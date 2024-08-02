import { Injectable, LoggerService } from '@nestjs/common';
import { utilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as WinstonCloudWatch from 'winston-cloudwatch';
import * as AWS from '@aws-sdk/client-cloudwatch-logs';
import { ConfigService } from '@nestjs/config';

import { AWSConfig } from '../../config/intefaces';

// TODO: убрать винстон, заменить просто решением неста из-под капота
@Injectable()
export class CustomLoggerService implements LoggerService {
  private awsConfig: AWSConfig;
  private loggers: Record<string, LoggerService>;

  constructor(private readonly configService: ConfigService) {
    this.awsConfig = this.configService.get<AWSConfig>('aws') as AWSConfig;

    this.loggers = {
      error: this.createLogger('error'),
      info: this.createLogger('info'),
      warn: this.createLogger('warn'),
    };
  }

  private createLogger(level: string): LoggerService {
    return WinstonModule.createLogger({
      transports: [
        process.env.NODE_ENV === 'local'
          ? new winston.transports.Console({
              format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.ms(),
                utilities.format.nestLike('Blog', {
                  prettyPrint: true,
                  colors: true,
                }),
              ),
            })
          : new WinstonCloudWatch({
              logGroupName: this.awsConfig.awsLogGroup,
              logStreamName: level,
              cloudWatchLogs: new AWS.CloudWatchLogs({
                credentials: {
                  accessKeyId: this.awsConfig.accessKeyId,
                  secretAccessKey: this.awsConfig.secretKeyId,
                },
                region: this.awsConfig.region,
              }),
            }),
      ],
    });
  }

  error(message: string | unknown): void {
    this.loggers.error.error(message);
  }

  log(message: string | unknown): void {
    this.loggers.info.log(message);
  }

  warn(message: string | unknown): void {
    this.loggers.warn.warn(message);
  }
}

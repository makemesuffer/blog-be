import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import * as compression from 'compression';
import { json } from 'express';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { CustomLoggerService } from './global/logger/logger.service';
import { AppConfig } from './config/intefaces';

dotenv.config({ path: '.env.local' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const appConfig = configService.get<AppConfig>('app') as AppConfig;
  app.use(json({ limit: appConfig.requestLimit }));
  app.setGlobalPrefix('api');

  const logger = app.get(CustomLoggerService);

  if (appConfig.isProd) {
    app.enableCors({
      origin: [appConfig.projectOrigin, appConfig.projectOriginWWW],
      allowedHeaders: '*',
      methods: '*',
    });
  } else {
    app.enableCors();
  }

  app.use(compression());
  // app.useGlobalFilters();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(appConfig.listeningPort);
  app.useLogger(logger);
  logger.log(
    `Listening on http://${appConfig.listeningIp}:${appConfig.listeningPort}`,
  );
}

bootstrap();

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { databaseConfig, appConfig, awsConfig, authConfig } from './config';
import { HistoryModule } from './modules/history/history.module';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { LoggerModule } from './global/logger/logger.module';
import { SkillModule } from './modules/skill/skill.module';
import { ProjectModule } from './modules/project/project.module';
import { ExperienceModule } from './modules/experience/experience.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      load: [appConfig, databaseConfig, authConfig, awsConfig],
      isGlobal: true,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        return {
          playground: configService.get('app.isProd'),
          autoSchemaFile: true,
          sortSchema: true,
        };
      },
      inject: [ConfigService],
    }),
    HistoryModule,
    LoggerModule,
    PostModule,
    UserModule,
    SkillModule,
    ProjectModule,
    ExperienceModule,
  ],
})
export class AppModule {}

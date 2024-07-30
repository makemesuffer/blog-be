import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { AuthorInfoService } from './author-Info.service';
import { AuthorInfoResolver } from './author-Info.resolver';
import { AuthorInfoRepository } from './author-Info.repository';

@Module({
  providers: [
    AuthorInfoService,
    AuthorInfoResolver,
    AuthorInfoRepository,
    PrismaService,
  ],
})
export class AuthorInfoModule {}

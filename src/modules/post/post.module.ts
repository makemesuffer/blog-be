import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { PostService } from './post.service';
import { PostResolver } from './post.resolver';
import { PostRepository } from './post.repository';

@Module({
  providers: [PostService, PostResolver, PostRepository, PrismaService],
})
export class PostModule {}

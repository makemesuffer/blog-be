import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { CrudRepository } from '../../global/repositories/crud.repository';
import { PrismaService } from '../../global/services/prisma.service';

@Injectable()
export class PostRepository extends CrudRepository<
  Post,
  Prisma.PostCreateInput,
  Prisma.PostUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.post);
  }
}

import { Injectable } from '@nestjs/common';
import { AuthorInfo, Prisma } from '@prisma/client';

import { CrudRepository } from '../../global/repositories/crud.repository';
import { PrismaService } from '../../global/services/prisma.service';

@Injectable()
export class AuthorInfoRepository extends CrudRepository<
  AuthorInfo,
  Prisma.AuthorInfoCreateInput,
  Prisma.AuthorInfoUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.authorInfo);
  }
}

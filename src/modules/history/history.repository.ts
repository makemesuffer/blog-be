import { Injectable } from '@nestjs/common';
import { History, Prisma } from '@prisma/client';

import { CrudRepository } from '../../global/repositories/crud.repository';
import { PrismaService } from '../../global/services/prisma.service';

@Injectable()
export class HistoryRepository extends CrudRepository<
  History,
  Prisma.HistoryCreateInput,
  Prisma.HistoryUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.history);
  }
}

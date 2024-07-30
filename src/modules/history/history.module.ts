import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { HistoryService } from './history.service';
import { HistoryResolver } from './history.resolver';
import { HistoryRepository } from './history.repository';

@Module({
  providers: [
    HistoryService,
    HistoryResolver,
    HistoryRepository,
    PrismaService,
  ],
})
export class HistoryModule {}

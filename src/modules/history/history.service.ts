import { Injectable } from '@nestjs/common';
import { History, Prisma } from '@prisma/client';

import { HistoryRepository } from './history.repository';

@Injectable()
export class HistoryService {
  constructor(private historyRepository: HistoryRepository) {}

  async createHistory(data: Prisma.HistoryCreateInput): Promise<History> {
    return this.historyRepository.create(data);
  }

  async findById(id: number): Promise<History | null> {
    return this.historyRepository.findById(id);
  }

  async findAll(): Promise<History[]> {
    return this.historyRepository.findAll();
  }

  async updateHistory(
    id: number,
    data: Prisma.HistoryUpdateInput,
  ): Promise<History> {
    return this.historyRepository.update(id, data);
  }

  async deleteHistory(id: number): Promise<History> {
    return this.historyRepository.delete(id);
  }
}

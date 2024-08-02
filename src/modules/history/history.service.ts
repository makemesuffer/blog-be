import { Injectable } from '@nestjs/common';
import { History, Prisma } from '@prisma/client';

import { HistoryRepository } from './history.repository';
import { CreateHistoryInput, UpdateHistoryInput } from './inputs';

@Injectable()
export class HistoryService {
  constructor(private historyRepository: HistoryRepository) {}

  async createHistory(data: CreateHistoryInput): Promise<History> {
    const historyData: Prisma.HistoryCreateInput = {
      content: data.content,
      project: { connect: { id: data.projectId } },
    };

    return this.historyRepository.create(historyData);
  }

  async findById(id: number): Promise<History | null> {
    return this.historyRepository.findById(id);
  }

  async findAll(): Promise<History[]> {
    return this.historyRepository.findAll();
  }

  async updateHistory(id: number, data: UpdateHistoryInput): Promise<History> {
    const historyData: Prisma.HistoryUpdateInput = {
      content: data.content,
      project: data.projectId ? { connect: { id: data.projectId } } : undefined,
    };
    return this.historyRepository.update(id, historyData);
  }

  async deleteHistory(id: number): Promise<History> {
    return this.historyRepository.delete(id);
  }
}

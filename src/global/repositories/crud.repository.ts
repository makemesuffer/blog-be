import { PrismaClient } from '@prisma/client';

import { CrudModel } from './interfaces';

export abstract class CrudRepository<T, CreateInput, UpdateInput> {
  protected prisma: PrismaClient;
  protected model: CrudModel<T, CreateInput, UpdateInput>;

  constructor(prisma: PrismaClient, model: any) {
    this.prisma = prisma;
    this.model = model;
  }

  async create(data: CreateInput): Promise<T> {
    return this.model.create({ data });
  }

  async findById(id: number): Promise<T | null> {
    return this.model.findUnique({ where: { id } });
  }

  async findAll(): Promise<T[]> {
    return this.model.findMany();
  }

  async update(id: number, data: UpdateInput): Promise<T> {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: number): Promise<T> {
    return this.model.delete({ where: { id } });
  }
}

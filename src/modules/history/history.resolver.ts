import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { HistoryService } from './history.service';
import { History } from './models/history.model';

@Resolver(() => History)
export class HistoryResolver {
  constructor(private historyService: HistoryService) {}

  @Query(() => [History], { name: 'historys' })
  async findAll() {
    return this.historyService.findAll();
  }

  @Query(() => History, { name: 'history' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.historyService.findById(id);
  }

  @Mutation(() => History)
  async createHistory(
    @Args('createHistoryInput') createHistoryInput: Prisma.HistoryCreateInput,
  ) {
    return this.historyService.createHistory(createHistoryInput);
  }

  @Mutation(() => History)
  async updateHistory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateHistoryInput') updateHistoryInput: Prisma.HistoryUpdateInput,
  ) {
    return this.historyService.updateHistory(id, updateHistoryInput);
  }

  @Mutation(() => History)
  async deleteHistory(@Args('id', { type: () => Int }) id: number) {
    return this.historyService.deleteHistory(id);
  }
}

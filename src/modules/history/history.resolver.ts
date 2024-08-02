import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { HistoryService } from './history.service';
import { History } from './models/history.model';
import { CreateHistoryInput, UpdateHistoryInput } from './inputs';

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
    @Args('createHistoryInput') createHistoryInput: CreateHistoryInput,
  ) {
    return this.historyService.createHistory(createHistoryInput);
  }

  @Mutation(() => History)
  async updateHistory(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateHistoryInput') updateHistoryInput: UpdateHistoryInput,
  ) {
    return this.historyService.updateHistory(id, updateHistoryInput);
  }

  @Mutation(() => History)
  async deleteHistory(@Args('id', { type: () => Int }) id: number) {
    return this.historyService.deleteHistory(id);
  }
}

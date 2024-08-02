import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { ExperienceService } from './experience.service';
import { Experience } from './models/experience.model';
import { UpdateExperienceInput, CreateExperienceInput } from './inputs';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private experienceService: ExperienceService) {}

  @Query(() => [Experience], { name: 'experiences' })
  async findAll() {
    return this.experienceService.findAll();
  }

  @Query(() => Experience, { name: 'experience' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.experienceService.findById(id);
  }

  @Mutation(() => Experience)
  async createExperience(
    @Args('createExperienceInput')
    createExperienceInput: CreateExperienceInput,
  ) {
    return this.experienceService.createExperience(createExperienceInput);
  }

  @Mutation(() => Experience)
  async updateExperience(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateExperienceInput')
    updateExperienceInput: UpdateExperienceInput,
  ) {
    return this.experienceService.updateExperience(id, updateExperienceInput);
  }

  @Mutation(() => Experience)
  async deleteExperience(@Args('id', { type: () => Int }) id: number) {
    return this.experienceService.deleteExperience(id);
  }
}

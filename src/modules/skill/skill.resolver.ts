import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { SkillService } from './skill.service';
import { Skill } from './models/skill.model';
import { CreateSkillInput, UpdateSkillInput } from './inputs';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private skillService: SkillService) {}

  @Query(() => [Skill], { name: 'skills' })
  async findAll() {
    return this.skillService.findAll();
  }

  @Query(() => Skill, { name: 'skill' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.skillService.findById(id);
  }

  @Mutation(() => Skill)
  async createSkill(
    @Args('createSkillInput') createSkillInput: CreateSkillInput,
  ) {
    return this.skillService.createSkill(createSkillInput);
  }

  @Mutation(() => Skill)
  async updateSkill(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSkillInput') updateSkillInput: UpdateSkillInput,
  ) {
    return this.skillService.updateSkill(id, updateSkillInput);
  }

  @Mutation(() => Skill)
  async deleteSkill(@Args('id', { type: () => Int }) id: number) {
    return this.skillService.deleteSkill(id);
  }
}

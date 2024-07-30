import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { SkillService } from './skill.service';
import { Skill } from './models/skill.model';

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
    @Args('createSkillInput') createSkillInput: Prisma.SkillCreateInput,
  ) {
    return this.skillService.createSkill(createSkillInput);
  }

  @Mutation(() => Skill)
  async updateSkill(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateSkillInput') updateSkillInput: Prisma.SkillUpdateInput,
  ) {
    return this.skillService.updateSkill(id, updateSkillInput);
  }

  @Mutation(() => Skill)
  async deleteSkill(@Args('id', { type: () => Int }) id: number) {
    return this.skillService.deleteSkill(id);
  }
}

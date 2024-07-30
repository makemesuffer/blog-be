import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { ProjectService } from './project.service';
import { Project } from './models/project.model';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private projectService: ProjectService) {}

  @Query(() => [Project], { name: 'projects' })
  async findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.findById(id);
  }

  @Mutation(() => Project)
  async createProject(
    @Args('createProjectInput') createProjectInput: Prisma.ProjectCreateInput,
  ) {
    return this.projectService.createProject(createProjectInput);
  }

  @Mutation(() => Project)
  async updateProject(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProjectInput') updateProjectInput: Prisma.ProjectUpdateInput,
  ) {
    return this.projectService.updateProject(id, updateProjectInput);
  }

  @Mutation(() => Project)
  async deleteProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.deleteProject(id);
  }
}

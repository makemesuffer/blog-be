import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { ProjectService } from './project.service';
import { Project } from './models/project.model';
import { CreateProjectInput, UpdateProjectInput } from './inputs';

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
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.createProject(createProjectInput);
  }

  @Mutation(() => Project)
  async updateProject(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProjectInput') updateProjectInput: UpdateProjectInput,
  ) {
    return this.projectService.updateProject(id, updateProjectInput);
  }

  @Mutation(() => Project)
  async deleteProject(@Args('id', { type: () => Int }) id: number) {
    return this.projectService.deleteProject(id);
  }
}

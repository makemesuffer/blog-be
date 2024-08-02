import { Injectable } from '@nestjs/common';
import { Project } from '@prisma/client';

import { ProjectRepository } from './project.repository';
import { CreateProjectInput, UpdateProjectInput } from './inputs';

@Injectable()
export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  async createProject(data: CreateProjectInput): Promise<Project> {
    return this.projectRepository.create(data);
  }

  async findById(id: number): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }

  async updateProject(id: number, data: UpdateProjectInput): Promise<Project> {
    return this.projectRepository.update(id, data);
  }

  async deleteProject(id: number): Promise<Project> {
    return this.projectRepository.delete(id);
  }
}

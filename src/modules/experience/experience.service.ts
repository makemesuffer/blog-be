import { Injectable } from '@nestjs/common';
import { Experience, Prisma } from '@prisma/client';

import { ExperienceRepository } from './experience.repository';

@Injectable()
export class ExperienceService {
  constructor(private experienceRepository: ExperienceRepository) {}

  async createExperience(
    data: Prisma.ExperienceCreateInput,
  ): Promise<Experience> {
    return this.experienceRepository.create(data);
  }

  async findById(id: number): Promise<Experience | null> {
    return this.experienceRepository.findById(id);
  }

  async findAll(): Promise<Experience[]> {
    return this.experienceRepository.findAll();
  }

  async updateExperience(
    id: number,
    data: Prisma.ExperienceUpdateInput,
  ): Promise<Experience> {
    return this.experienceRepository.update(id, data);
  }

  async deleteExperience(id: number): Promise<Experience> {
    return this.experienceRepository.delete(id);
  }
}

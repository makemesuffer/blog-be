import { Injectable } from '@nestjs/common';
import { Skill, Prisma } from '@prisma/client';

import { SkillRepository } from './skill.repository';

@Injectable()
export class SkillService {
  constructor(private skillRepository: SkillRepository) {}

  async createSkill(data: Prisma.SkillCreateInput): Promise<Skill> {
    return this.skillRepository.create(data);
  }

  async findById(id: number): Promise<Skill | null> {
    return this.skillRepository.findById(id);
  }

  async findAll(): Promise<Skill[]> {
    return this.skillRepository.findAll();
  }

  async updateSkill(id: number, data: Prisma.SkillUpdateInput): Promise<Skill> {
    return this.skillRepository.update(id, data);
  }

  async deleteSkill(id: number): Promise<Skill> {
    return this.skillRepository.delete(id);
  }
}

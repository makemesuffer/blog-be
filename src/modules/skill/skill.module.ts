import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { SkillService } from './skill.service';
import { SkillResolver } from './skill.resolver';
import { SkillRepository } from './skill.repository';

@Module({
  providers: [SkillService, SkillResolver, SkillRepository, PrismaService],
})
export class SkillModule {}

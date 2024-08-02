import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { ExperienceService } from './experience.service';
import { ExperienceResolver } from './experience.resolver';
import { ExperienceRepository } from './experience.repository';

@Module({
  providers: [
    ExperienceService,
    ExperienceResolver,
    ExperienceRepository,
    PrismaService,
  ],
})
export class ExperienceModule {}

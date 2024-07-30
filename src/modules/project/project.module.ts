import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { ProjectRepository } from './project.repository';

@Module({
  providers: [
    ProjectService,
    ProjectResolver,
    ProjectRepository,
    PrismaService,
  ],
})
export class ProjectModule {}

import { Injectable } from '@nestjs/common';
import { Project, Prisma } from '@prisma/client';

import { CrudRepository } from '../../global/repositories/crud.repository';
import { PrismaService } from '../../global/services/prisma.service';

@Injectable()
export class ProjectRepository extends CrudRepository<
  Project,
  Prisma.ProjectCreateInput,
  Prisma.ProjectUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.project);
  }
}

import { Injectable } from '@nestjs/common';
import { Experience, Prisma } from '@prisma/client';

import { CrudRepository } from '../../global/repositories/crud.repository';
import { PrismaService } from '../../global/services/prisma.service';

@Injectable()
export class ExperienceRepository extends CrudRepository<
  Experience,
  Prisma.ExperienceCreateInput,
  Prisma.ExperienceUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.experience);
  }
}

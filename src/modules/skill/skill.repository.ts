import { Injectable } from '@nestjs/common';
import { Skill, Prisma } from '@prisma/client';

import { CrudRepository } from '../../global/repositories/crud.repository';
import { PrismaService } from '../../global/services/prisma.service';

@Injectable()
export class SkillRepository extends CrudRepository<
  Skill,
  Prisma.SkillCreateInput,
  Prisma.SkillUpdateInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, prisma.skill);
  }
}

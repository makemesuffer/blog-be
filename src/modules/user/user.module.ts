import { Module } from '@nestjs/common';

import { PrismaService } from '../../global/services/prisma.service';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserService, UserResolver, UserRepository, PrismaService],
})
export class UserModule {}

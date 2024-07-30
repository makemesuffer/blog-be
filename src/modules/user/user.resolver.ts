import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { UserService } from './user.service';
import { User } from './models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findById(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: Prisma.UserCreateInput,
  ) {
    return this.userService.createUser(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserInput') updateUserInput: Prisma.UserUpdateInput,
  ) {
    return this.userService.updateUser(id, updateUserInput);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.deleteUser(id);
  }
}

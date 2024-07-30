import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { AuthorInfoService } from './author-Info.service';
import { AuthorInfo } from './models/author-Info.model';

@Resolver(() => AuthorInfo)
export class AuthorInfoResolver {
  constructor(private authorInfoService: AuthorInfoService) {}

  @Query(() => [AuthorInfo], { name: 'authorInfos' })
  async findAll() {
    return this.authorInfoService.findAll();
  }

  @Query(() => AuthorInfo, { name: 'authorInfo' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.authorInfoService.findById(id);
  }

  @Mutation(() => AuthorInfo)
  async createAuthorInfo(
    @Args('createAuthorInfoInput')
    createAuthorInfoInput: Prisma.AuthorInfoCreateInput,
  ) {
    return this.authorInfoService.createAuthorInfo(createAuthorInfoInput);
  }

  @Mutation(() => AuthorInfo)
  async updateAuthorInfo(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateAuthorInfoInput')
    updateAuthorInfoInput: Prisma.AuthorInfoUpdateInput,
  ) {
    return this.authorInfoService.updateAuthorInfo(id, updateAuthorInfoInput);
  }

  @Mutation(() => AuthorInfo)
  async deleteAuthorInfo(@Args('id', { type: () => Int }) id: number) {
    return this.authorInfoService.deleteAuthorInfo(id);
  }
}

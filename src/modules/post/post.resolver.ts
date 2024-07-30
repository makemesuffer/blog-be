import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { PostService } from './post.service';
import { Post } from './models/post.model';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => [Post], { name: 'posts' })
  async findAll() {
    return this.postService.findAll();
  }

  @Query(() => Post, { name: 'post' })
  async findById(@Args('id', { type: () => Int }) id: number) {
    return this.postService.findById(id);
  }

  @Mutation(() => Post)
  async createPost(
    @Args('createPostInput') createPostInput: Prisma.PostCreateInput,
  ) {
    return this.postService.createPost(createPostInput);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePostInput') updatePostInput: Prisma.PostUpdateInput,
  ) {
    return this.postService.updatePost(id, updatePostInput);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.deletePost(id);
  }
}

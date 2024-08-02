import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { PostService } from './post.service';
import { Post } from './models/post.model';
import { CreatePostInput, UpdatePostInput } from './inputs';

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
  async createPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.createPost(createPostInput);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => Int }) id: number,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return this.postService.updatePost(id, updatePostInput);
  }

  @Mutation(() => Post)
  async deletePost(@Args('id', { type: () => Int }) id: number) {
    return this.postService.deletePost(id);
  }
}

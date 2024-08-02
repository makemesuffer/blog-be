import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { PostRepository } from './post.repository';
import { CreatePostInput, UpdatePostInput } from './inputs';

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  async createPost(data: CreatePostInput): Promise<Post> {
    const postData: Prisma.PostCreateInput = {
      title: data.title,
      contentPreview: data.contentPreview,
      content: data.content,
      published: data.published ?? false,
      author: { connect: { id: data.authorId } },
    };

    return this.postRepository.create(postData);
  }

  async findById(id: number): Promise<Post | null> {
    return this.postRepository.findById(id);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAll();
  }

  async updatePost(id: number, data: UpdatePostInput): Promise<Post> {
    const postData: Prisma.PostUpdateInput = {
      title: data.title,
      contentPreview: data.contentPreview,
      content: data.content,
      published: data.published,
      author: data.authorId ? { connect: { id: data.authorId } } : undefined,
    };

    return this.postRepository.update(id, postData);
  }

  async deletePost(id: number): Promise<Post> {
    return this.postRepository.delete(id);
  }
}

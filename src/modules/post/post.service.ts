import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';

import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.postRepository.create(data);
  }

  async findById(id: number): Promise<Post | null> {
    return this.postRepository.findById(id);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.findAll();
  }

  async updatePost(id: number, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.postRepository.update(id, data);
  }

  async deletePost(id: number): Promise<Post> {
    return this.postRepository.delete(id);
  }
}

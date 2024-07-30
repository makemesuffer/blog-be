import { Injectable } from '@nestjs/common';
import { AuthorInfo, Prisma } from '@prisma/client';

import { AuthorInfoRepository } from './author-Info.repository';

@Injectable()
export class AuthorInfoService {
  constructor(private authorInfoRepository: AuthorInfoRepository) {}

  async createAuthorInfo(
    data: Prisma.AuthorInfoCreateInput,
  ): Promise<AuthorInfo> {
    return this.authorInfoRepository.create(data);
  }

  async findById(id: number): Promise<AuthorInfo | null> {
    return this.authorInfoRepository.findById(id);
  }

  async findAll(): Promise<AuthorInfo[]> {
    return this.authorInfoRepository.findAll();
  }

  async updateAuthorInfo(
    id: number,
    data: Prisma.AuthorInfoUpdateInput,
  ): Promise<AuthorInfo> {
    return this.authorInfoRepository.update(id, data);
  }

  async deleteAuthorInfo(id: number): Promise<AuthorInfo> {
    return this.authorInfoRepository.delete(id);
  }
}

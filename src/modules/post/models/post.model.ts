import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  contentPreview: string;

  @Field()
  content: string;

  @Field()
  published: boolean;

  @Field()
  authorId: number;

  @Field()
  author: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

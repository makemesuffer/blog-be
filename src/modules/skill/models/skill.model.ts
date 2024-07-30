import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Skill {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  seniority: string;

  @Field()
  authorInfoId: number;

  @Field()
  projectId: number;

  @Field()
  authorInfo: string;

  @Field()
  project: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

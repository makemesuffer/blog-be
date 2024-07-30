import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class History {
  @Field(() => Int)
  id: number;

  @Field()
  content: string;

  @Field()
  projectId: number;

  @Field()
  project: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

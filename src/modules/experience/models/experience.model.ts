import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  workTitle: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AuthorInfo {
  @Field(() => Int)
  id: number;

  @Field()
  skills: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}

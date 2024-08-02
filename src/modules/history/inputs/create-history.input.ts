import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class CreateHistoryInput {
  @Field()
  @IsString()
  content: string;

  @Field(() => Int)
  projectId: number;
}

export default CreateHistoryInput;

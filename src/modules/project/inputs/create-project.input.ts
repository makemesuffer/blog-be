import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class CreateProjectInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  content: string;
}

export default CreateProjectInput;

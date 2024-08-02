import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class CreateExperienceInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  workTitle: string;
}

export default CreateExperienceInput;

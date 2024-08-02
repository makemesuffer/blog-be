import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator';

@InputType()
class CreateSkillInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  seniority: string;

  @Field(() => Int)
  authorInfoId: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  projectId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  experienceId?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  skillId?: number;
}

export default CreateSkillInput;

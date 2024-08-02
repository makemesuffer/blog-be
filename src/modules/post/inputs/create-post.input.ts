import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

@InputType()
class CreatePostInput {
  @Field()
  @IsString()
  title: string;

  @Field()
  @IsString()
  contentPreview: string;

  @Field()
  @IsString()
  content: string;

  @Field({ defaultValue: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;

  @Field(() => Int)
  authorId: number;
}

export default CreatePostInput;

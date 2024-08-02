import { InputType, PartialType } from '@nestjs/graphql';
import CreatePostInput from './create-post.input';

@InputType()
class UpdatePostInput extends PartialType(CreatePostInput) {}

export default UpdatePostInput;

import { InputType, PartialType } from '@nestjs/graphql';
import CreateUserInput from './create-user.input';

@InputType()
class UpdateUserInput extends PartialType(CreateUserInput) {}

export default UpdateUserInput;

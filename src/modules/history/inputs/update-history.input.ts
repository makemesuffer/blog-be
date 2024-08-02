import { InputType, PartialType } from '@nestjs/graphql';
import CreateHistoryInput from './create-history.input';

@InputType()
class UpdateHistoryInput extends PartialType(CreateHistoryInput) {}

export default UpdateHistoryInput;

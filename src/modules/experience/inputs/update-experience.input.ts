import { InputType, PartialType } from '@nestjs/graphql';
import CreateExperienceInput from './create-experience.input';

@InputType()
class UpdateExperienceInput extends PartialType(CreateExperienceInput) {}

export default UpdateExperienceInput;

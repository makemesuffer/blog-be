import { InputType, PartialType } from '@nestjs/graphql';
import CreateSkillInput from './create-skill.input';

@InputType()
class UpdateSkillInput extends PartialType(CreateSkillInput) {}

export default UpdateSkillInput;

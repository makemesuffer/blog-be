import { InputType, PartialType } from '@nestjs/graphql';
import CreateProjectInput from './create-project.input';

@InputType()
class UpdateProjectInput extends PartialType(CreateProjectInput) {}

export default UpdateProjectInput;

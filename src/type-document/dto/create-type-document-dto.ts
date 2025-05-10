import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateTypeDocumentDto {
  @Field()
  @Length(2, 50)
  NameTypeDocument: string;
}

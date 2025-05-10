import { InputType, Field, Int } from '@nestjs/graphql';
import { IsDateString, Length, IsInt, Matches } from 'class-validator';

@InputType()
export class CreateUserDocumentDto {
  @Field()
  @Matches(/^\d+$/, { message: 'El número de documento debe ser numérico' })
  Document: string;

  @Field(() => Int)
  @IsInt()
  TypeDocumentID: number;

  @Field()
  @Length(2, 60)
  PlaceExpedition: string;

  @Field()
  @IsDateString()
  DateExpedition: string;
}

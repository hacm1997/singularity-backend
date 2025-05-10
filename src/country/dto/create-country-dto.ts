import { InputType, Field } from '@nestjs/graphql';
import { Length } from 'class-validator';

@InputType()
export class CreateCountryDto {
  @Field()
  @Length(1, 4)
  CountryCode: string;

  @Field()
  @Length(2, 100)
  CountryName: string;
}

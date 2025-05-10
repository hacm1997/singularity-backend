import { InputType, Field, Int } from '@nestjs/graphql';
import { Length, Matches, IsInt } from 'class-validator';

@InputType()
export class CreateContactInfoDto {
  @Field()
  @Length(2, 60)
  Address: string;

  @Field()
  @Length(2, 50)
  City: string;

  @Field()
  @Matches(/^\+?\d{7,15}$/, { message: 'Teléfono no válido' })
  Phone: string;

  @Field()
  @Matches(/^\+?\d{7,15}$/, { message: 'Celular no válido' })
  CelPhone: string;

  @Field()
  @Length(2, 100)
  EmergencyName: string;

  @Field()
  @Matches(/^\+?\d{7,15}$/, { message: 'Teléfono de emergencia no válido' })
  EmergencyPhone: string;

  @Field(() => Int)
  @IsInt()
  CountryID: number;
}

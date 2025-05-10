import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { CreateContactInfoDto } from 'src/contact-info/dto/create-contact-info-dto';
import { CreateUserDocumentDto } from 'src/user-document/dto/create-user-document-dto';

@InputType()
export class CreateAppUserDto {
  @Field()
  username: string;

  @Field()
  @MinLength(6)
  password: string;

  @Field()
  Name: string;

  @Field()
  LastName: string;

  @Field({ defaultValue: false })
  IsMilitar: boolean;

  @Field({ defaultValue: false })
  isTemporal: boolean;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => CreateUserDocumentDto)
  document: CreateUserDocumentDto;

  @Field(() => CreateContactInfoDto)
  contact: CreateContactInfoDto;
}

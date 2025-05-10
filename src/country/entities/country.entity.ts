import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'Country_TB' })
export class Country {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 4 })
  CountryCode: string;

  @Field()
  @Column({ length: 100 })
  CountryName: string;
}

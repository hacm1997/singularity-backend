import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { AppUser } from '../../app-user/entities/app-user.entity';
import { Country } from 'src/country/entities/country.entity';

@ObjectType()
@Entity({ name: 'ContactInfo_TB' })
export class ContactInfo {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 60 })
  Address: string;

  @Field()
  @Column({ length: 50 })
  City: string;

  @Field()
  @Column({ length: 20 })
  Phone: string;

  @Field()
  @Column({ length: 20 })
  CelPhone: string;

  @Field()
  @Column({ length: 100 })
  EmergencyName: string;

  @Field()
  @Column({ length: 20 })
  EmergencyPhone: string;

  @Field()
  @Column()
  UserID: number;

  @OneToOne(() => AppUser, (user) => user.contact)
  @JoinColumn({ name: 'UserID' })
  user: AppUser;

  @ManyToOne(() => Country)
  @JoinColumn({ name: 'CountryID' })
  country: Country;
}

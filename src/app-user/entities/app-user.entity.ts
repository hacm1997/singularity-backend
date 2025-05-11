import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { UserDocument } from 'src/user-document/entities/user-document.entity';

@ObjectType()
@Entity({ name: 'AppUser_TB' })
export class AppUser {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 20 })
  Name: string;

  @Field()
  @Column({ length: 20 })
  LastName: string;

  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email: string;

  @Field()
  @Column({ default: false })
  emailVerified: boolean;

  @Column({ nullable: true })
  verificationToken: string;

  @Field()
  @Column({ default: false })
  IsMilitar: boolean;

  @Field()
  @Column({ default: false })
  isTemporal: boolean;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  TimeCreate: Date;

  @Field(() => UserDocument)
  @OneToOne(() => UserDocument, (document) => document.user)
  // @JoinColumn({ name: 'id', referencedColumnName: 'UserID' })
  document: UserDocument;

  @Field(() => ContactInfo, { nullable: true })
  @OneToOne(() => ContactInfo, (contact) => contact.user)
  contact: ContactInfo;
}

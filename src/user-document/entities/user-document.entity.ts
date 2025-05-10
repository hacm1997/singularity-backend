import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { AppUser } from '../../app-user/entities/app-user.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';

@ObjectType()
@Entity({ name: 'UserDocument_TB' })
export class UserDocument {
  @PrimaryColumn()
  UserID: number;

  @OneToOne(() => AppUser, (user) => user.document)
  @JoinColumn({ name: 'UserID' })
  user: AppUser;

  @Field()
  @Column({ length: 20 })
  Document: string;

  @ManyToOne(() => TypeDocument)
  @JoinColumn({ name: 'TypeDocumentID' })
  typeDocument: TypeDocument;

  @Field()
  @Column({ length: 60 })
  PlaceExpedition: string;

  @Field()
  @Column({ type: 'date' })
  DateExpedition: Date;
}

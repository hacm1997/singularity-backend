import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocument } from './entities/user-document.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDocument, TypeDocument])],
  exports: [TypeOrmModule],
})
export class UserDocumentModule {}

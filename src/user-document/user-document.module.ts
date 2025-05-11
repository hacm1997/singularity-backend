import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocument } from './entities/user-document.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { UserDocumentResolver } from './user-document.resolver';
import { TypeDocumentModule } from 'src/type-document/type-document.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDocument, TypeDocument]),
    TypeDocumentModule,
  ],
  providers: [UserDocumentResolver],
  exports: [TypeOrmModule],
})
export class UserDocumentModule {}

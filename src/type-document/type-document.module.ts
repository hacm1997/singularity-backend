import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeDocument } from './entities/type-document.entity';
import { TypeDocumentResolver } from './type-document.resolver';
import { TypeDocumentService } from './type-document.service';

@Module({
  imports: [TypeOrmModule.forFeature([TypeDocument])],
  providers: [TypeDocumentService, TypeDocumentResolver],
  exports: [TypeOrmModule],
})
export class TypeDocumentModule {}

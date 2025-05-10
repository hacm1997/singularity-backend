import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeDocument } from './entities/type-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeDocument])],
  exports: [TypeOrmModule],
})
export class TypeDocumentModule {}

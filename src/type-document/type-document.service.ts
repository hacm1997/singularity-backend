import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeDocument } from './entities/type-document.entity';
import { CreateTypeDocumentDto } from './dto/create-type-document-dto';

@Injectable()
export class TypeDocumentService {
  constructor(
    @InjectRepository(TypeDocument)
    private readonly repo: Repository<TypeDocument>,
  ) {}

  create(input: CreateTypeDocumentDto): Promise<TypeDocument> {
    const typeDoc = this.repo.create(input);
    return this.repo.save(typeDoc);
  }

  findAll(): Promise<TypeDocument[]> {
    return this.repo.find();
  }
}

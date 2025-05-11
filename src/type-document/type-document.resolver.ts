import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TypeDocumentService } from './type-document.service';
import { TypeDocument } from './entities/type-document.entity';
import { CreateTypeDocumentDto } from './dto/create-type-document-dto';

@Resolver(() => TypeDocument)
export class TypeDocumentResolver {
  constructor(private readonly typeDocService: TypeDocumentService) {}

  @Mutation(() => TypeDocument)
  createTypeDocument(
    @Args('input') input: CreateTypeDocumentDto,
  ): Promise<TypeDocument> {
    return this.typeDocService.create(input);
  }

  @Query(() => [TypeDocument])
  TypeDocuments(): Promise<TypeDocument[]> {
    return this.typeDocService.findAll();
  }
}

import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDocument } from './entities/user-document.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { CreateUserDocumentDto } from './dto/create-user-document-dto';

@Resolver(() => UserDocument)
export class UserDocumentResolver {
  constructor(
    @InjectRepository(UserDocument)
    private readonly userDocumentRepository: Repository<UserDocument>,
    @InjectRepository(TypeDocument)
    private readonly typeDocumentRepository: Repository<TypeDocument>,
  ) {}

  @Mutation(() => UserDocument)
  async createUserDocument(
    @Args('input') input: CreateUserDocumentDto,
  ): Promise<UserDocument> {
    const typeDocument = await this.typeDocumentRepository.findOne({
      where: { id: input.TypeDocumentID },
    });

    if (!typeDocument) {
      throw new Error('Tipo de documento no encontrado');
    }
    try {
      const userDocument = this.userDocumentRepository.create({
        ...input,
        typeDocument: typeDocument,
      });
      console.log(userDocument);
      const saved = await this.userDocumentRepository.save(userDocument);

      return this.userDocumentRepository.findOne({
        where: { UserID: saved.UserID },
        relations: ['typeDocument'],
      });
    } catch (error) {
      console.error('error to create document => ', error);
    }
  }
}

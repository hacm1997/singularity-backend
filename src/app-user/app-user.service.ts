import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateAppUserDto } from './dto/create-app-user-dto';
import { AppUser } from './entities/app-user.entity';
import { UserDocument } from 'src/user-document/entities/user-document.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { Country } from 'src/country/entities/country.entity';

@Injectable()
export class AppUserService {
  constructor(
    @InjectRepository(AppUser)
    private readonly userRepo: Repository<AppUser>,
    @InjectRepository(UserDocument)
    private readonly docRepo: Repository<UserDocument>,
    @InjectRepository(TypeDocument)
    private readonly typeDocRepo: Repository<TypeDocument>,
    @InjectRepository(ContactInfo)
    private readonly contactRepo: Repository<ContactInfo>,
    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,
  ) {}

  async create(input: CreateAppUserDto): Promise<AppUser> {
    const existing = await this.userRepo.findOne({
      where: [{ username: input.username }, { email: input.email }],
    });

    if (existing) {
      throw new ConflictException('Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);

    try {
      const user = this.userRepo.create({
        ...input,
        password: hashedPassword,
      });

      const newUser = await this.userRepo.save(user);

      // Aquí se crea el documento
      const typeDocument = await this.typeDocRepo.findOneBy({
        id: input.document.TypeDocumentID,
      });

      const userDocument = this.docRepo.create({
        ...input.document,
        user: newUser,
        typeDocument: typeDocument,
      });

      await this.docRepo.save(userDocument);

      if (input.contact) {
        const country = await this.countryRepo.findOne({
          where: [{ id: input.contact.CountryID }],
        });

        if (!country) {
          throw new Error('País no encontrado');
        }
        const contact = this.contactRepo.create({
          ...input.contact,
          user: newUser,
          country: country,
        });
        await this.contactRepo.save(contact);
      }

      return await this.userRepo.findOne({
        where: { id: newUser.id },
        relations: {
          document: {
            typeDocument: true,
          },
          contact: {
            country: true,
          },
        },
      });
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  }
}

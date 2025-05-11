import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Country } from 'src/country/entities/country.entity';
import { AppUser } from 'src/app-user/entities/app-user.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { CreateContactInfoDto } from 'src/contact-info/dto/create-contact-info-dto';

@Resolver(() => ContactInfo)
export class ContactInfoResolver {
  constructor(
    @InjectRepository(ContactInfo)
    private readonly contactRepo: Repository<ContactInfo>,

    @InjectRepository(Country)
    private readonly countryRepo: Repository<Country>,

    @InjectRepository(AppUser)
    private readonly userRepo: Repository<AppUser>,
  ) {}

  @Mutation(() => ContactInfo)
  async createContactInfo(
    @Args('input') input: CreateContactInfoDto,
  ): Promise<ContactInfo> {
    const country = await this.countryRepo.findOne({
      where: { id: input.CountryID },
    });

    if (!country) {
      throw new Error('País no encontrado');
    }

    try {
      const contact = this.contactRepo.create({
        ...input,
        country,
      });

      const saved = await this.contactRepo.save(contact);

      return this.contactRepo.findOne({
        where: { id: saved.id },
        relations: ['country'],
      });
    } catch (error) {
      console.error('Error al crear ContactInfo =>', error);
      throw new Error('No se pudo crear la información de contacto');
    }
  }
}

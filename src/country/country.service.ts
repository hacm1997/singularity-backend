import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entities/country.entity';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country-dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(Country)
    private readonly repo: Repository<Country>,
  ) {}

  create(input: CreateCountryDto): Promise<Country> {
    const country = this.repo.create(input);
    return this.repo.save(country);
  }

  findAll(): Promise<Country[]> {
    return this.repo.find();
  }
}

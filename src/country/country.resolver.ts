import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { Country } from './entities/country.entity';
import { CreateCountryDto } from './dto/create-country-dto';

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {}

  @Mutation(() => Country)
  createCountry(@Args('input') input: CreateCountryDto): Promise<Country> {
    return this.countryService.create(input);
  }

  @Query(() => [Country])
  countries(): Promise<Country[]> {
    return this.countryService.findAll();
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Country } from 'src/country/entities/country.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfo, Country])],
  exports: [TypeOrmModule],
})
export class ContactInfoModule {}

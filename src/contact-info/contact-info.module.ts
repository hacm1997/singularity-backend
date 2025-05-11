import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Country } from 'src/country/entities/country.entity';
import { AppUserModule } from 'src/app-user/app-user.module';
import { ContactInfoResolver } from './contact-info.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactInfo, Country]),
    forwardRef(() => AppUserModule),
  ],
  providers: [ContactInfoResolver],
  exports: [TypeOrmModule],
})
export class ContactInfoModule {}

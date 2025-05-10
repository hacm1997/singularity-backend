import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppUser } from './entities/app-user.entity';
import { AppUserResolver } from './app-user.resolver';
import { AppUserService } from './app-user.service';
import { UserDocument } from 'src/user-document/entities/user-document.entity';
import { ContactInfo } from 'src/contact-info/entities/contact-info.entity';
import { TypeDocument } from 'src/type-document/entities/type-document.entity';
import { Country } from 'src/country/entities/country.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AppUser,
      UserDocument,
      ContactInfo,
      TypeDocument,
      Country,
    ]),
  ],
  providers: [AppUserResolver, AppUserService],
})
export class AppUserModule {}

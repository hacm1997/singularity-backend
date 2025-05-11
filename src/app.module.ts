import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config_DB as config_graph_db } from './config/db.config';
import { AppUserModule } from './app-user/app-user.module';
import { CountryModule } from './country/country.module';
import { TypeDocumentModule } from './type-document/type-document.module';

@Module({
  imports: [
    ...config_graph_db,
    AppUserModule,
    CountryModule,
    TypeDocumentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '@mfe-monorepo/user';
import { QuoteModule } from '@mfe-monorepo/quote';
import { DashboardModule } from '@mfe-monorepo/dashboard';
import { FileUploadModule } from '../file-upload/file-upload.module';

@Module({
  imports: [DashboardModule, UserModule, QuoteModule, FileUploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

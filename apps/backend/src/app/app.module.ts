import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { DashboardController } from '../dashboard/dashboard.controller';
import { QuoteController } from '../quote/quote.controller';
import { QuoteService } from '../quote/quote.service';

@Module({
  imports: [],
  controllers: [AppController, DashboardController, QuoteController],
  providers: [AppService, DashboardService, QuoteService],
})
export class AppModule {}

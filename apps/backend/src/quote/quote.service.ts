import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  getQuoteInfo(): string {
    return 'sample quote data';
  }
}

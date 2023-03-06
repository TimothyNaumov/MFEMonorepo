import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getDashboardInfo(): string {
    return 'sample dashboard data';
  }
}

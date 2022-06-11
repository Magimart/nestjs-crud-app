import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'welcome to this Nextjs Crud App, originally tutored by Brad and Later i(Magima) felt the need to upgrade it';
  }

}

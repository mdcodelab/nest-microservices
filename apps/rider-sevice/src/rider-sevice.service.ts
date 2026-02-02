import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderSeviceService {
  getHello(): string {
    return 'Hello World!';
  }
}

import { Controller, Get } from '@nestjs/common';
import { RiderSeviceService } from './rider-sevice.service';

@Controller()
export class RiderSeviceController {
  constructor(private readonly riderSeviceService: RiderSeviceService) {}

  @Get()
  getHello(): string {
    return this.riderSeviceService.getHello();
  }
}

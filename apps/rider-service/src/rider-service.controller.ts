import { Controller, Get, Param } from '@nestjs/common';
import { RiderService } from './rider-service.service';

@Controller('rider')
export class RiderServiceController {
  constructor(private readonly riderService: RiderService) {}

  @Get()
  getHello(): string {
    return this.riderService.getHello();
  }

  @Get(':id')
  getRiderById(@Param('id') id: string) {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@email.com',
    };
  }
}


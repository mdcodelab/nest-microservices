import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { LoggingService } from './logging-service.service';

@Controller('riders')
export class LoggingServiceController {
  constructor(private readonly loggingService: LoggingService) {}

  @Post('save')
  async saveCoordinates(
    @Body('riderId') riderId: string,
    @Body('latitude') latitude: number,
    @Body('longitude') longitude: number,
  ) {
    return this.loggingService.saveCoordinates(riderId, latitude, longitude);
  }

  @Get(':riderId')
  async getRiderCoordinates(@Param('riderId') riderId: string) {
    return this.loggingService.getRiderCoordinates(riderId);
  }

  @Get()
  async getAllRidersCoordinates() {
    return this.loggingService.getAllRidersCoordinates();
  }
}

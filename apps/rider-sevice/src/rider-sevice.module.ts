import { Module } from '@nestjs/common';
import { RiderSeviceController } from './rider-sevice.controller';
import { RiderSeviceService } from './rider-sevice.service';

@Module({
  imports: [],
  controllers: [RiderSeviceController],
  providers: [RiderSeviceService],
})
export class RiderSeviceModule {}

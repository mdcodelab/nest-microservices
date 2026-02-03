import { Module } from '@nestjs/common';
import { RiderServiceController } from './rider-service.controller';
import { RiderService } from './rider-service.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI!),
  ],
  controllers: [RiderServiceController],
  providers: [RiderService],
})
export class RiderServiceModule {}

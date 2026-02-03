
import { Module } from '@nestjs/common';
import { RiderServiceController } from './rider-service.controller';
import { RiderService } from './rider-service.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Rider, RiderSchema } from './schema';


const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined');
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(mongoUri),
    MongooseModule.forFeature([{ name: Rider.name, schema: RiderSchema }]),
  ],
  controllers: [RiderServiceController],
  providers: [RiderService],
})
export class RiderServiceModule {}

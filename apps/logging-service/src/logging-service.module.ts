import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggingService } from './logging-service.service';
import { LoggingServiceController } from './logging-service.controller';
import { Rider, RiderSchema } from './schema';

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI is not defined');
}

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    MongooseModule.forFeature([{ name: Rider.name, schema: RiderSchema }]),
    ClientsModule.register([
      {
        name: 'rider-service',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  controllers: [LoggingServiceController],
  providers: [LoggingService],
  exports: [LoggingService],
})
export class LoggingServiceModule {}

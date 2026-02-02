import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);

  await app.listen(3001);
  console.log('LoggingService running on port 3001');
}

bootstrap();
import './load-env'; // 🔥 primul import
import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  app.enableCors();

  await app.listen(3001, '0.0.0.0');
  console.log('LoggingService running on http://localhost:3001');
}

bootstrap();

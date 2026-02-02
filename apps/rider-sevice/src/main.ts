import { NestFactory } from '@nestjs/core';
import { RiderSeviceModule } from './rider-sevice.module';

async function bootstrap() {
  const app = await NestFactory.create(RiderSeviceModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();

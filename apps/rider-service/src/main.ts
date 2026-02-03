import './load-env.ts';
import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule);
  await app.listen(process.env.port ?? 3000);
}
// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap();

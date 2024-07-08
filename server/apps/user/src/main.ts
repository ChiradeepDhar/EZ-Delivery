/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(4001);
}
bootstrap();

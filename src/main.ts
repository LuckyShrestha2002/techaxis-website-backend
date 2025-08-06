// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <<< Add this import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // <<< Add this line
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
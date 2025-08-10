// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // <-- Automatically converts strings to numbers
      whitelist: true, // <-- Strips unknown fields
    }),
  );

  app.enableCors();
  await app.listen(3000);
}
bootstrap();

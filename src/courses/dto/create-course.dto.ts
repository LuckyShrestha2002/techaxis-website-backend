// src/courses/dto/create-course.dto.ts
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @Type(() => Number) // <-- Converts incoming string to number
  @IsNumber({}, { message: 'Price must be a number.' })
  @IsNotEmpty()
  @Min(0, { message: 'Price cannot be negative.' })
  price: number;

  @Type(() => Number) // <-- Converts incoming string to number
  @IsNumber({}, { message: 'Duration must be a number.' })
  @IsNotEmpty()
  @Min(1, { message: 'Duration must be at least 1.' })
  duration: number;

  @IsString()
  @IsNotEmpty()
  instructor: string;
}

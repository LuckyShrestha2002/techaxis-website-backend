// src/courses/dto/create-course.dto.ts
import { IsString, IsUrl, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsUrl()
  readonly imageUrl: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly duration: string;

  @IsNotEmpty()
  @IsString()
  readonly instructor: string;
}
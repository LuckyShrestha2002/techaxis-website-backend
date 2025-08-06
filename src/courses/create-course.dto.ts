// src/courses/create-course.dto.ts
import { IsString, IsUrl } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsUrl()
  readonly imageUrl: string;
}
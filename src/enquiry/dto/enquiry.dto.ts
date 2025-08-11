// src/enquiry/dto/enquiry.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class EnquiryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  courseId: string;

  @IsNotEmpty()
  @IsString()
  message: string;
}
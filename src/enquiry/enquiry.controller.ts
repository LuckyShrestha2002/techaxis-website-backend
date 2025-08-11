import { Controller, Post, Body, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from '../mailer/mailer.service';
import { CoursesService } from '../courses/courses.service';
import { EnquiryDto } from './dto/enquiry.dto';

@Controller('api/enquiries') // <-- Change this path
export class EnquiryController {
  constructor(
    private readonly mailerService: MailerService,
    private readonly coursesService: CoursesService,
  ) {}

  @Post()
  async sendEnquiry(@Body() enquiryDto: EnquiryDto) {
    try {
      const course = await this.coursesService.findOne(parseInt(enquiryDto.courseId));
      const courseName = course ? course.name : 'Unknown Course';

      await this.mailerService.sendEnquiryEmail(
        enquiryDto.name,
        enquiryDto.email,
        courseName,
        enquiryDto.message,
      );
      return { message: 'Enquiry sent successfully!' };
    } catch (error) {
      console.error('Error sending enquiry:', error);
      throw new InternalServerErrorException('Failed to send enquiry email');
    }
  }
}
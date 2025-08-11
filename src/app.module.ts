import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/entities/course.entity';
import { MailerService } from './mailer/mailer.service';
import { EnquiryController } from './enquiry/enquiry.controller';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'myuser', 
      password: 'myuser123', 
      database: 'techaxis',
      entities: [Course],
      synchronize: false, 
    }),
    CoursesModule,    
  ],
  controllers: [
    EnquiryController
  ],
  providers: [
    MailerService, 
    // Remove CoursesService from here
  ],
})
export class AppModule {}
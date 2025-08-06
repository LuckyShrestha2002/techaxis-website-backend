// src/courses/courses.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // <<< Import this
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './course.entity'; // <<< Import this

@Module({
  imports: [TypeOrmModule.forFeature([Course])], // <<< Add this line
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}
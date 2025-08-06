// src/courses/courses.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Course } from './course.entity';
import { CreateCourseDto } from './create-course.dto'; // <<< Import DTO

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Course> {
    const course = await this.coursesService.findOne(+id);
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto): Promise<Course> { // <<< Use DTO here
    return this.coursesService.create(createCourseDto);
  }

  // <<< Add the update endpoint
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<CreateCourseDto>): Promise<Course> {
    return this.coursesService.update(+id, updateData);
  }

  // <<< Add the delete endpoint
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.coursesService.remove(+id);
  }
}
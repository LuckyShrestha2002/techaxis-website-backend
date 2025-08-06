// src/courses/courses.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'; // <<< Add NotFoundException
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './create-course.dto'; // <<< Import the DTO

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  findAll(): Promise<Course[]> {
    return this.coursesRepository.find();
  }

  findOne(id: number): Promise<Course | null> {
    return this.coursesRepository.findOneBy({ id });
  }

  async create(courseData: CreateCourseDto): Promise<Course> { // <<< Use the DTO here
    const newCourse = this.coursesRepository.create(courseData);
    return this.coursesRepository.save(newCourse);
  }

  // <<< Add the update method
  async update(id: number, updateData: Partial<CreateCourseDto>): Promise<Course> {
    await this.coursesRepository.update(id, updateData);
    const updatedCourse = await this.coursesRepository.findOneBy({ id });
    if (!updatedCourse) {
      throw new NotFoundException('Course not found');
    }
    return updatedCourse;
  }

  // <<< Add the remove method
  async remove(id: number): Promise<void> {
    await this.coursesRepository.delete(id);
  }
}
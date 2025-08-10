// src/courses/courses.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const newCourse = this.coursesRepository.create(createCourseDto);
    return await this.coursesRepository.save(newCourse);
  }

  async findAll(): Promise<Course[]> {
    return await this.coursesRepository.find();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.coursesRepository.findOneBy({ id });
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }
    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.findOne(id);
    this.coursesRepository.merge(course, updateCourseDto);
    return await this.coursesRepository.save(course);
  }

  async remove(id: number): Promise<void> {
    const result = await this.coursesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Course with ID ${id} not found.`);
    }
  }
}
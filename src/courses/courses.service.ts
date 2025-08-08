import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    { id: 1, name: 'DevOps Training', description: 'This course covers the essentials of DevOps practices, including CI/CD, automation, and infrastructure as code.', imageUrl: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/devops-2-632000.png?f=webp&w=256', price: 99.99, duration: '3 Months', instructor: 'John Doe' },
    { id: 3, name: 'Cloud Computing', description: 'Learn how to leverage cloud services from providers like AWS, Azure, and Google Cloud to build scalable and reliable applications.', imageUrl: 'https://cdn.iconscout.com/icon/premium/png-512-thumb/cloud-computing-2035310-1721867.png?f=webp&w=256', price: 149.99, duration: '6 Months', instructor: 'Jane Smith' },
  ];
  private nextId = 4;

  create(createCourseDto: CreateCourseDto): Course {
    const newCourse = {
      id: this.nextId++,
      ...createCourseDto,
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  findAll(): Course[] {
    return this.courses;
  }

  findOne(id: number): Course {
    const course = this.courses.find(course => course.id === id);
    if (!course) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    return course;
  }

  update(id: number, updateCourseDto: UpdateCourseDto): Course {
    const courseIndex = this.courses.findIndex(course => course.id === id);
    if (courseIndex === -1) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
    this.courses[courseIndex] = { ...this.courses[courseIndex], ...updateCourseDto };
    return this.courses[courseIndex];
  }

  remove(id: number): void {
    const initialLength = this.courses.length;
    this.courses = this.courses.filter(course => course.id !== id);
    if (this.courses.length === initialLength) {
      throw new NotFoundException(`Course with ID "${id}" not found`);
    }
  }
}
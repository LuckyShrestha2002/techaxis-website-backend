// src/courses/entities/course.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  imageUrl: string;

  // Add the new fields here
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column()
  duration: number;

  @Column()
  instructor: string;
}
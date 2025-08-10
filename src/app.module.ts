import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/entities/course.entity';

@Module({
  imports: [
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
  controllers: [],
  providers: [],
})
export class AppModule {}
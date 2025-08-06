// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',            // <<< Using MySQL
      host: 'localhost',        // <<< Or your Docker container name
      port: 3306,               // <<< Default MySQL port
      username: 'myuser',  // <<< Replace with your MySQL username
      password: 'luckypassword',  // <<< Replace with your MySQL password
      database: 'techaxis',    // <<< The name of your database
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,        // Automatically creates tables. Use with caution!
    }),
    CoursesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
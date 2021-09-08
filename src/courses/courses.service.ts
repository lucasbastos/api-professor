import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { CourseModule } from './../modules/entities/module.entity';

@Injectable()
export class CoursesService {
  async create(createCourseDto: CreateCourseDto) {
    const course = Course.create(createCourseDto);
    // const modules = Modules.create(createCourseDto.modules);
    await course.save();
    console.log(course);
    return course;
  }

  findAll(userId: number) {
    const courses = Course.find({ userId: userId });
    return courses;
  }

  async findOne(id: number) {
    const courses = await Course.find({ id: id });
    const modules = await CourseModule.find({ courseId: id });

    console.log(modules);
    return { courses: courses, modules: modules };
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}

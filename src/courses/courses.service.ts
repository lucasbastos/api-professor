import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
// import { Modules } from './../modules/entities/module.entity';

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

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}

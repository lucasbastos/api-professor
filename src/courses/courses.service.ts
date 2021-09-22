import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';
import { CourseModule } from './../modules/entities/module.entity';
import { Lesson } from 'src/lessons/entities/lesson.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = Course.create(createCourseDto);
    // const modules = Modules.create(createCourseDto.modules);
    await course.save();
    return course;
  }

  findAllByUser(userId: number) {
    const courses = Course.find({ userId: userId });
    return courses;
  }

  findAllCourses() {
    const courses = Course.find();
    return courses;
  }

  async findOne(id: number) {
    const courses = await Course.find({ id: id });
    const modules = await CourseModule.find({ courseId: id });
    const lessons = [];

    for (const module of modules) {
      const lesson = await Lesson.find({ moduleId: module.id });
      lessons.push(lesson[0]);
    }
    // const lessons = await Lesson.find({ moduleId: 1 });

    // const lessons = await Promise.all(
    //   modules.forEach(async (item) => {
    //     await Lesson.find({ moduleId: item.id });
    //   }),
    // );

    return { courses: courses, modules: modules, lessons: lessons };
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.update({ id: id }, updateCourseDto);
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}

import { Injectable } from '@nestjs/common';
import { LessonItem } from 'src/lesson-item/entities/lesson-item.entity';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
  async create(createLessonDto: CreateLessonDto) {
    const lesson = Lesson.create(createLessonDto);
    await lesson.save();
    return lesson;
  }

  findAll() {
    return `This action returns all lessons`;
  }

  async findOne(id: number) {
    const lessons = await Lesson.find({ id: id });
    const lessonItens = await LessonItem.find({ lessonId: id });

    return { lessons: lessons, lessonItens: lessonItens };
  }

  update(id: number, updateLessonDto: UpdateLessonDto) {
    return `This action updates a #${id} lesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} lesson`;
  }
}

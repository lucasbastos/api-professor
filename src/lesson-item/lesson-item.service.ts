import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLessonItemDto } from './dto/create-lesson-item.dto';
import { UpdateLessonItemDto } from './dto/update-lesson-item.dto';
import { LessonItem } from './entities/lesson-item.entity';

@Injectable()
export class LessonItemService {
  constructor(
    @InjectRepository(LessonItem)
    private lessonItemRepository: Repository<LessonItem>,
  ) {}

  async create(createLessonItemDto: CreateLessonItemDto) {
    const lessonItem = LessonItem.create(createLessonItemDto);
    await lessonItem.save();
    return lessonItem;
  }

  findAll() {
    return `This action returns all lessonItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lessonItem`;
  }

  update(id: number, updateLessonItemDto: UpdateLessonItemDto) {
    return this.lessonItemRepository.update({ id: id }, updateLessonItemDto);
  }

  remove(id: number) {
    return `This action removes a #${id} lessonItem`;
  }
}

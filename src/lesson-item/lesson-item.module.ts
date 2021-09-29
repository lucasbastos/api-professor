import { Module } from '@nestjs/common';
import { LessonItemService } from './lesson-item.service';
import { LessonItemController } from './lesson-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonItem } from './entities/lesson-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonItem])],
  controllers: [LessonItemController],
  providers: [LessonItemService],
})
export class LessonItemModule {}

import { PartialType } from '@nestjs/swagger';
import { CreateLessonItemDto } from './create-lesson-item.dto';

export class UpdateLessonItemDto extends PartialType(CreateLessonItemDto) {}

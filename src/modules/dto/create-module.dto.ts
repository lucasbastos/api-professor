import { ApiProperty } from '@nestjs/swagger';
import { Lesson } from 'src/lessons/entities/lesson.entity';

export class CreateModuleDto {
  @ApiProperty()
  courseId: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
}

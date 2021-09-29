import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonItemDto {
  @ApiProperty()
  lessonId: number;
  @ApiProperty()
  type: string;
  @ApiProperty()
  content: string;
}

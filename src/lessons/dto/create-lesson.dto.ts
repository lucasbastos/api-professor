import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonDto {
  @ApiProperty()
  moduleId: number;
  @ApiProperty()
  type: string;
  @ApiProperty()
  order: number;
  @ApiProperty()
  content: number;
}

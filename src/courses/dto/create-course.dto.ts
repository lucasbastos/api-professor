import { ApiProperty } from '@nestjs/swagger';
import { CourseModule } from 'src/modules/entities/module.entity';

export class CreateCourseDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  code: number;
  @ApiProperty()
  description: string;
  @ApiProperty()
  modules: Array<CourseModule>;
}

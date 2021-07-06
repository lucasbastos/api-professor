import { CourseModule } from 'src/modules/entities/module.entity';

export class CreateCourseDto {
  userId: number;
  title: string;
  code: number;
  description: string;
  modules: Array<CourseModule>;
}

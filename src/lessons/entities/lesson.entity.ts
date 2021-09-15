import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Lesson extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  moduleId: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @Column()
  order: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}

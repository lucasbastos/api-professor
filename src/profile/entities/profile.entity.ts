import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  title: string;

  @Column()
  isActive: boolean;

  @Column()
  location: string;

  @Column()
  phone: string;

  @Column()
  facebook: string;

  @Column()
  twitter: string;

  @Column()
  linkedin: string;

  @Column()
  about: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}

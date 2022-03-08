import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Generated, ManyToOne } from 'typeorm';
import { Task } from './task';

@Entity()
export class Todo {
  @PrimaryColumn()
  @Generated('increment')
  id: number;

  @Column()
  name: string;

  @Column({default: null})
  description: string;

  @Column({ default: false })
  isDone: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', default: null })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime', default: null })
  updatedAt: Date;

  @ManyToOne(() => Task, task => task.todos)
  task: Task;

}

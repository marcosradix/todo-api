import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Generated, ManyToOne } from 'typeorm';
import { Task } from './task';

@Entity()
export class Todo {
  @PrimaryColumn()
  @Generated('increment')
  id: number;

  @IsNotEmpty()
  @Column()
  name: string;
  
  @IsNotEmpty()
  @Column()
  description: string;

  @Column({ default: false })
  isDone: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @ManyToOne(() => Task, task => task.todos, {onDelete: 'CASCADE'})
  task: Task;

}

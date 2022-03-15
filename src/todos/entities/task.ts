import { Todo } from './todo';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Task {
  @PrimaryColumn()
  @Generated('increment')
  id: number;
  
  @IsNotEmpty()
  @Column()
  name: string;

  @OneToMany(() => Todo, todo => todo.task)
  todos: Todo[];
  
  @CreateDateColumn({ name: 'created_at', type: 'datetime'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime'})
  updatedAt: Date;

}

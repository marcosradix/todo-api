import { Todo } from './todo';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Generated, OneToMany } from 'typeorm';

@Entity()
export class Task {
  @PrimaryColumn()
  @Generated('increment')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Todo, todo => todo.task)
  todos: Todo[];
  
  @CreateDateColumn({ name: 'created_at', type: 'datetime', default: null })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime', default: null })
  updatedAt: Date;

}

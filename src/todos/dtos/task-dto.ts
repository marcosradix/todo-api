import { TodoDto } from './todo-dto';

export class TaskDto {

  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  todos: TodoDto[];
}

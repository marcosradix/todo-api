import { TaskDto } from './task-dto';

export class TodoDto {

  id: number;
  name: string;
  description: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  task: TaskDto;
}


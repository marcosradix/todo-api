import { TodoDto } from './todo-dto';
import { ApiProperty } from '@nestjs/swagger';

export class TaskDto {

  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  todos: TodoDto[];
}

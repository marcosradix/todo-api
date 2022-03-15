import { TodoDto } from './todo-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class TaskDto {

  @ApiProperty()
  id: number;
  @ApiProperty()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  todos: TodoDto[];
}

import { ApiProperty } from '@nestjs/swagger';
import { TaskDto } from './task-dto';

export class TodoDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  isDone: boolean;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
  @ApiProperty()
  task: TaskDto;
}


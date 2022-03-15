import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TaskDto } from './task-dto';

export class TodoUpdateDto {

  task: TaskDto;
}


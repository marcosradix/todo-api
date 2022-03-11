import { TaskDto } from './task-dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskInTodo {

    @ApiProperty()
    task: TaskDto;
}
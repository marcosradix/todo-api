import { TaskDto } from './../dtos/task-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from '../repositories/taskRepository';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
      ) {}

    createTask(taskDto: TaskDto) {
       return this.taskRepository.createTask(taskDto);
    }

    listTasks() {
        return this.taskRepository.findAll();
     }

   //   finById(id: number) {
   //      return this.todoRepository.findById(id);
   //   }

   //   changeStatus(id: number, status: boolean) {
   //      return this.todoRepository.changeStatus(id, status["status"]);
   //   }
}

import { TaskDto } from './../dtos/task-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from '../repositories/taskRepository';
import { CreateTodoInTaskDto } from '../dtos/create-todo-in-task-dto';

@Injectable()
export class TaskService {

   constructor(
      @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
   ) { }

   createTask(taskDto: TaskDto) {
      return this.taskRepository.createTask(taskDto);
   }

   listTasks() {
      return this.taskRepository.findAll();
   }

   findAllOnlyTasks() {
      return this.taskRepository.findAllOnlyTasks();
   }

   finById(id: number) {
      return this.taskRepository.findById(id);
   }

   deleteTaskById(id: number) {
      return this.taskRepository.deleteById(id);
   }
}

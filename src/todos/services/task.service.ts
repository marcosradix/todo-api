import { TaskDto } from './../dtos/task-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from '../repositories/taskRepository';

@Injectable()
export class TaskService {

   constructor(
      @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
   ) { }

   createTask(taskDto: TaskDto) {
      return this.taskRepository.createTask(taskDto);
   }

   listTasks() {
      let tasks = this.taskRepository.findAll();
         tasks.then(data => data.map(d =>{
            if(d.todos.filter(f => f.isDone == true).length == d.todos.length && d.todos.filter(f => f.isDone == true).length != 0){
             return d.isDone = true;
            }
            return d.isDone = false;
         }));
      return tasks;
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

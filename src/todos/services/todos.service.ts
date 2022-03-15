import { Injectable } from '@nestjs/common';
import { TodoDto } from '../dtos/todo-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from '../repositories/todoRepository';
import { UpdateStatusDto } from '../dtos/update-status-dto';
import { Todo } from '../entities/todo';
import { CreateTodoInTaskDto } from '../dtos/create-todo-in-task-dto';
import { TodoUpdateDto } from '../dtos/todo-dto-update';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
      ) {}

    createTodo(todo: TodoDto) {
       return this.todoRepository.createTodo(todo);
    }

    async updateTaskInTodos(todoId: number, todo: TodoUpdateDto) {
      let todoFound: Todo  = await this.todoRepository.findById(todoId).then(data => data);
      todoFound.task = todo.task;
      return this.todoRepository.createTodo(todoFound);
   }
   updateTaskInTodosAll(createTodoInTaskDto: CreateTodoInTaskDto){
      return this.todoRepository.createTodoAll(createTodoInTaskDto.todos);
   }

    listTodos() {
        return this.todoRepository.findAll();
     }

     listTodosByTaskId(taskId: number) {
      return this.todoRepository.findAll();
   }

     finById(id: number) {
        return this.todoRepository.findById(id);
     }

     findAllTodosByTaskId(id: number) {
      return this.todoRepository.findAllTodosByTaskId(id);
   }

     changeStatus(id: number, updateStatusDto: UpdateStatusDto) {
        return this.todoRepository.changeStatus(id, updateStatusDto.status);
     }
}

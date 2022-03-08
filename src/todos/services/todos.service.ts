import { Injectable } from '@nestjs/common';
import { TodoDto } from '../dtos/todo-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from '../repositories/todoRepository';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
      ) {}

    createTodo(todo: TodoDto) {
       return this.todoRepository.createTodo(todo);
    }

    listTodos() {
        return this.todoRepository.findAll();
     }

     finById(id: number) {
        return this.todoRepository.findById(id);
     }

     changeStatus(id: number, status: boolean) {
        return this.todoRepository.changeStatus(id, status["status"]);
     }
}

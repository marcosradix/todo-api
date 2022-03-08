import { TodosService } from '../services/todos.service';
import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { TodoDto } from '../dtos/todo-dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) { }

    @Post()
    async createTodos(@Body() todo: TodoDto):Promise<TodoDto> {
        return this.todosService.createTodo(todo);
    }

    @Get()
    async listTodos():Promise<TodoDto[]> {
        return this.todosService.listTodos();
    }

    @Get("/:id")
    async findById(@Param("id") id: number):Promise<TodoDto> {
        return this.todosService.finById(id);
    }

    @Put("/:id")
    async changeStatus(@Param("id") id: number, @Body() status: boolean):Promise<TodoDto> {
        return this.todosService.changeStatus(id, status);
    }
}

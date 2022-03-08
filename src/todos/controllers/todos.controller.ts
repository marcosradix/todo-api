import { TodosService } from '../services/todos.service';
import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { TodoDto } from '../dtos/todo-dto';
import { TaskDto } from '../dtos/task-dto';
import { TaskService } from '../services/task.service';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService, private readonly taskService: TaskService) { }

    @Post()
    async createTodos(@Body() todo: TodoDto):Promise<TodoDto> {
        return this.todosService.createTodo(todo);
    }

    @Post("/task")
    async createTask(@Body() task: TaskDto):Promise<TaskDto> {
        return this.taskService.createTask(task);
    }

    @Get()
    async listTodos():Promise<TodoDto[]> {
        return this.todosService.listTodos();
    }

    @Get("/tasks")
    async listTasks():Promise<TaskDto[]> {
        return this.taskService.listTasks();
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

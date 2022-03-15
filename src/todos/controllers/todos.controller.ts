import { TodosService } from '../services/todos.service';
import { Body, Controller, Post, Get, Param, Put, Patch } from '@nestjs/common';
import { TodoDto } from '../dtos/todo-dto';
import { TaskDto } from '../dtos/task-dto';
import { TaskService } from '../services/task.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateStatusDto } from '../dtos/update-status-dto';
import { CreateTodoInTaskDto } from '../dtos/create-todo-in-task-dto';
import { TodoUpdateDto } from '../dtos/todo-dto-update';

@ApiTags('todos')
@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService, private readonly taskService: TaskService) { }

    @Post()
    @ApiOkResponse({
        description: 'Todo created successfully',
        type: TodoDto
      })
    async createTodos(@Body() todo: TodoDto):Promise<TodoDto> {
        return this.todosService.createTodo(todo);
    }

    @Put("/:todoId")
    @ApiOkResponse({
        description: 'Todo updated successfully',
        type: TodoDto
      })
    async updateTaskInTodos(@Param("todoId") todoId: number, @Body() todo: TodoUpdateDto):Promise<TodoDto> {
        return this.todosService.updateTaskInTodos(todoId, todo);
    }

    @Post("task/todo/create")
    @ApiOkResponse({
        description: 'Todo updated successfully',
        type: TodoDto
      })
    async updateTaskInTodosTest(@Body() createTodoInTaskDto: CreateTodoInTaskDto):Promise<TodoDto[]> {
        return this.todosService.updateTaskInTodosAll(createTodoInTaskDto);
    }

    @Post("/task")
    @ApiOkResponse({
        description: 'Task created successfully',
        type: TaskDto
      })
    async createTask(@Body() task: TaskDto):Promise<TaskDto> {
        return this.taskService.createTask(task);
    }

    @Get()
    @ApiOkResponse({
        description: 'All todos',
        type: TodoDto,
        isArray: true
      })
    async listTodos():Promise<TodoDto[]> {
        return this.todosService.listTodos();
    }

    @Get("/tasks")
    @ApiOkResponse({
        description: 'All tasks',
        type: TaskDto,
        isArray: true
      })
    async listTasks():Promise<TaskDto[]> {
        return this.taskService.listTasks();
    }

    @Get("/:id")
    @ApiOkResponse({
        description: 'Successfully found',
        type: TaskDto
      })
    async findById(@Param("id") id: number):Promise<TodoDto> {
        return this.todosService.finById(id);
    }

    @Get("/task/:id")
    @ApiOkResponse({
        description: 'Successfully found',
        type: TodoDto,
        isArray: true
      })
    async findTaskById(@Param("id") id: number):Promise<TodoDto[]> {
        return this.todosService.findAllTodosByTaskId(id);
    }

    @Patch("/:id")
    @ApiOkResponse({
        description: 'Successfully updated',
        type: TodoDto
      })
    async changeStatus(@Param("id") id: number, @Body() updateStatusDto: UpdateStatusDto):Promise<TodoDto> {
        return this.todosService.changeStatus(id, updateStatusDto);
    }
}

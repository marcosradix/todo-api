import { TodoDto } from './../dtos/todo-dto';
import { Todo } from './../entities/todo';
import { Repository, EntityRepository, getRepository } from 'typeorm';


@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
    public async findAll(): Promise<Todo[]> {
        return await this.find({});
    }

    public async findById(todoId: number): Promise<Todo> {
        return await this.findOne(todoId);
    }

    public async findAllTodosByTaskId(taskId: number): Promise<TodoDto[]> {
            return await getRepository(Todo).createQueryBuilder() 
            .select("tod", "task") 
            .from(Todo, "tod") 
            .where("tod.taskId = :id", { id: taskId })
            .printSql()
            .getMany();
    }

    public async createTodo(todoDto: TodoDto): Promise<Todo> {
        let newTodo: Todo = new Todo();

        Object.assign(newTodo, todoDto);
        return await this.save(newTodo);
    }

    public async createTodoAll(todoDtoList: TodoDto[]): Promise<TodoDto[]> {
        return await this.save(todoDtoList);
    }

    public async changeStatus(id: number, status: boolean): Promise<Todo> {
        const todoFound = await this.findOne(id);
        let newTodo: Todo = new Todo();

        Object.assign(newTodo, todoFound);
        newTodo.isDone = status;
        return await this.save(newTodo);
    }

    public async destroy(todoId: number): Promise<void> {
        const todo = await this.findOne(todoId);
        await this.remove(todo);
    }
}
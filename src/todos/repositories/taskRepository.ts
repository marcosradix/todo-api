import { Task } from './../entities/task';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { TaskDto } from '../dtos/task-dto';


@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    public async findAll(): Promise<Task[]> {
        const taskRepository = getRepository(Task);
        return await taskRepository.find({ relations: ["todos"] });
    }

    // public async findById(todoId: number): Promise<Todo> {
    //     return await this.findOne(todoId);
    // }

    public async createTask(taskDto: TaskDto): Promise<Task> {
        let newTask: Task = new Task();

        Object.assign(newTask, taskDto);
        return await this.save(newTask);
    }

    // public async changeStatus(id: number, status: boolean): Promise<Todo> {
    //     const todoFound = await this.findOne(id);
    //     let newTodo: Todo = new Todo();

    //     Object.assign(newTodo, todoFound);
    //     newTodo.isDone = status;
    //     return await this.save(newTodo);
    // }

    // public async destroy(todoId: number): Promise<void> {
    //     const todo = await this.findOne(todoId);
    //     await this.remove(todo);
    // }
}
import { Task } from './../entities/task';
import { Repository, EntityRepository, getRepository } from 'typeorm';
import { TaskDto } from '../dtos/task-dto';


@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    public async findAll(): Promise<Task[]> {
        const taskRepository = getRepository(Task);
        return await taskRepository.find({ relations: ["todos"] });
    }

    public async createTask(taskDto: TaskDto): Promise<Task> {
        let newTask: Task = new Task();

        Object.assign(newTask, taskDto);
        return await this.save(newTask);
    }

    public async findById(id: number) {
        return this.findOne(id);
    }
}
import { TaskService } from './todos/services/task.service';
import { Task } from './todos/entities/task';
import { TodoRepository } from './todos/repositories/todoRepository';
import { Todo } from './todos/entities/todo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/controllers/todos.controller';
import { TodosService } from './todos/services/todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './todos/repositories/taskRepository';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: 3306,
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [Todo, Task],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TodoRepository, TaskRepository])
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService, TaskService],
})
export class AppModule {}

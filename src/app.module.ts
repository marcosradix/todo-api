import { TodoRepository } from './todos/repositories/todoRepository';
import { Todo } from './todos/entities/todo';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/controllers/todos.controller';
import { TodosService } from './todos/services/todos.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'todo',
      entities: [Todo],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([TodoRepository])
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
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
      host: process.env.Host,
      port: 3306,
      username: process.env.Username,
      password: process.env.Password,
      database: process.env.Database,
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

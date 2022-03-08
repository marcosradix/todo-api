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
      host: 'pk1l4ihepirw9fob.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'y1hz3l3kwpaz9x6q',
      password: "c027iaosieel0klw",
      database: 'dxdlnr749vod2nt0',
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

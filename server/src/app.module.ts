import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}

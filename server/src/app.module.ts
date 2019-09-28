import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TodosController } from './todos/todos.controller';
// import { TodosService } from './todos/todos.service';
import { TodosModule } from './todos/module/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

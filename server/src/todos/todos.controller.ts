import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo-dto';
import { TodosService } from './todos.service';
import { Todo } from './interface/todo.iterface';

@Controller('todos')
export class TodosController {
    constructor( private readonly todosService : TodosService ){}

    @Get()
    async findAll() : Promise<Todo[]> {
        return this.todosService.findAll();
    }
}

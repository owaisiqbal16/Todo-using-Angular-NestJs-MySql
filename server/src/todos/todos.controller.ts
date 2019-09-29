import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './entity/todo.entity';

@Controller('todos')
export class TodosController {
    constructor( private readonly todosService : TodosService ){}

    @Get()
    async findAll() : Promise<Todo[]> {
        return this.todosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) : Promise<Todo>{
        return this.todosService.findOne(id);
    }

    @Post()
    async create(@Body() todoData : Todo) : Promise<Todo> {
        return this.todosService.create(todoData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() todoData: Todo): Promise<any> {
        todoData.id = Number(id);
        return this.todosService.update( id , todoData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.todosService.delete(id);
    }
}

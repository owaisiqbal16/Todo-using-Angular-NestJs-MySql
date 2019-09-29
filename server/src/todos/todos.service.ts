import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { Repository } from 'typeorm';
import { UpdateResult , DeleteResult } from 'typeorm';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository : Repository<Todo>,
    ) {}

    async findAll() : Promise<Todo[]> {
        return this.todoRepository.find()
    }

    async findOne(id : number) : Promise<Todo> {
        return await this.todoRepository.findOne({ id: id });
    }

    async create(todo : Todo ) : Promise<Todo> {
        // const newTodo = new this.todoRepository.sa(todo);
        return await this.todoRepository.save(todo);
    }

    async update(id: number , todo: Todo) : Promise<UpdateResult>{
        return await this.todoRepository.update(id, todo); 
    }

    async delete(id : number) : Promise<DeleteResult> {
        return await this.todoRepository.delete(id);
    } 
}
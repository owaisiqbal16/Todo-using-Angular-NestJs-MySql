import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entity/todo.entity';
import { Repository } from 'typeorm';


@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository : Repository<Todo>,
    ) {}

    async findAll() : Promise<Todo[]> {
        return this.todoRepository.find()
    }
}
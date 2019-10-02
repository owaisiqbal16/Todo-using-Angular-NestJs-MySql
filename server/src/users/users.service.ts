import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

// export type User = any;

@Injectable()
export class UsersService {
    // private readonly users: User[];

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){
        // this.users = [
        //     {
        //         userId: 1,
        //         username: 'john',
        //         password: 'changeme',
        //     },
        //     {
        //         userId: 2,
        //         username: 'chris',
        //         password: 'secret',
        //     },
        //     {
        //         userId: 3,
        //         username: 'maria',
        //         password: 'guess',
        //     },
        // ];
    }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                id: id,
            }
        });
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    // async findOne(username : string) : Promise<User | undefined> {
    //     return this.users.find(user => user.username === username);
    // }
}


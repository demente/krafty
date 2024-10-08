import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IUserRepository } from '../interfaces/user.repository';
import { User } from './user.entity';


@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    async findUserById(id: string): Promise<User | null> {
        return this.userRepository.findOne({ where: { id } });
    }

    async findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
    }

    async updateUser(id: string, user: Partial<User>): Promise<User> {
        await this.userRepository.update(id, user);
        return this.findUserById(id);
    }

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}

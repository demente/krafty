import { User } from "../db/user.entity";

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    findUserById(id: string): Promise<User | null>;
    findAllUsers(): Promise<User[]>;
    updateUser(id: string, user: Partial<User>): Promise<User>;
    deleteUser(id: string): Promise<void>;
}

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';


@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 100 })
    name: string;

    @OneToMany(() => User, (user) => user.company)
    users: User[];
}

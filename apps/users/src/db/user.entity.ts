import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Company } from './company.entity';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ length: 100 })
    firstName: string;

    @Column({ length: 100 })
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @ManyToOne(() => Company, (company) => company.users)
    @JoinColumn({ name: 'company_id' })
    company: Company;
}

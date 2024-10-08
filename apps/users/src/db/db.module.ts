import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userDataOptions } from './data.source';


@Module({
    imports: [
        TypeOrmModule.forRoot(userDataOptions),
    ],
})
export class DatabaseModule { }

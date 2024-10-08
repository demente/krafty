import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ICompanyRepository } from '../interfaces/company.repository';
import { Company } from './company.entity';

@Injectable()
export class CompanyRepository implements ICompanyRepository {
    constructor(
        @InjectRepository(Company)
        private readonly companyRepository: Repository<Company>,
    ) { }

    async createCompany(company: Company): Promise<Company> {
        return this.companyRepository.save(company);
    }

    async findCompanyById(id: string): Promise<Company | null> {
        return this.companyRepository.findOne({ where: { id } });
    }

    async findAllCompanies(): Promise<Company[]> {
        return this.companyRepository.find();
    }

    async updateCompany(id: string, company: Partial<Company>): Promise<Company> {
        await this.companyRepository.update(id, company);
        return this.findCompanyById(id);
    }

    async deleteCompany(id: string): Promise<void> {
        await this.companyRepository.delete(id);
    }
}

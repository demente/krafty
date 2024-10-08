import { Company } from "../db/company.entity";

export interface ICompanyRepository {
    createCompany(company: Company): Promise<Company>;
    findCompanyById(id: string): Promise<Company | null>;
    findAllCompanies(): Promise<Company[]>;
    updateCompany(id: string, company: Partial<Company>): Promise<Company>;
    deleteCompany(id: string): Promise<void>;
}
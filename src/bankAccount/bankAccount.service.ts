import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BankAccount } from '../bankAccount/bankAccount.entity';

@Injectable()
export class BankAccountService {
  constructor(
    @InjectRepository(BankAccount)
    private readonly repo: Repository<BankAccount>,
  ) {}

  async findAll(): Promise<BankAccount[]> {
    return this.repo.find();
  }

  async getTotalAmount(): Promise<{ total: number }> {
    const result = await this.repo
      .createQueryBuilder('bank_account')
      .select('SUM(bank_account.amount)', 'total')
      .getRawOne<{ total: string }>();

    const total = parseFloat(result?.total ?? '0');
    return { total };
  }
}

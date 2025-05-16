import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccount } from './bankAccount.entity';
import { BankAccountService } from './bankAccount.service';
import { BankAccountController } from './bankAccount.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccount])],
  providers: [BankAccountService],
  controllers: [BankAccountController],
})
export class BankAccountModule {}

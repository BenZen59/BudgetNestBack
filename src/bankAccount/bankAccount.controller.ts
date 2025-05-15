import { Controller, Get } from '@nestjs/common';
import { BankAccountService } from '../bankAccount/bankAccount.service';

@Controller('accounts')
export class BankAccountController {
  constructor(private readonly service: BankAccountService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Get('total')
  getTotal() {
    return this.service.getTotalAmount();
  }
}

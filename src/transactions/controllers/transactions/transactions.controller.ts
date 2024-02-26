import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { TransactionsService } from 'src/transactions/application/transactions.service';
import { Transaction } from 'src/transactions/domain/entities/transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post()
  create(@Body() createTransactionDto: Transaction) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() transaction: Partial<Transaction>) {
    return this.transactionService.update(+id, transaction);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transactionService.delete(+id);
  }
}

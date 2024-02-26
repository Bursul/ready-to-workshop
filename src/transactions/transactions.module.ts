import { Module } from '@nestjs/common';
import { TransactionsService } from './application/transactions.service';
import { TransactionsController } from './controllers/transactions/transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './domain/entities/transaction.entity';
import { TransactionRepository } from './infrastructure/transactions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [TransactionsController],
  providers: [
    TransactionsService,
    {
      provide: 'ITransactionRepository',
      useClass: TransactionRepository,
    },
  ],
})
export class TransactionsModule {}

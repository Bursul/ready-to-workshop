import { Inject, Injectable, Scope } from '@nestjs/common';
import { Transaction } from '../domain/entities/transaction.entity';
import { ITransactionRepository } from '../domain/interfaces/transaction.repository.interface';

@Injectable({ scope: Scope.DEFAULT })
export class TransactionsService {
  constructor(
    @Inject('ITransactionRepository')
    private transactionRepository: ITransactionRepository,
  ) {}

  async create(transaction: Transaction): Promise<Transaction> {
    return this.transactionRepository.createOne(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return this.transactionRepository.findAll();
  }

  async findOne(id: number): Promise<Transaction> {
    return this.transactionRepository.findById(id);
  }

  async update(id: number, transaction: Partial<Transaction>): Promise<void> {
    await this.transactionRepository.updateOne(id, transaction);
  }

  async delete(id: number): Promise<void> {
    await this.transactionRepository.deleteById(id);
  }
}

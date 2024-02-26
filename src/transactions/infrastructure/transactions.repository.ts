// External
import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

// Internal
import { Transaction } from '../domain/entities/transaction.entity';
import { ITransactionRepository } from '../domain/interfaces/transaction.repository.interface';

@Injectable()
export class TransactionRepository
  extends Repository<Transaction>
  implements ITransactionRepository
{
  constructor(private dataSource: DataSource) {
    super(Transaction, dataSource.createEntityManager());
  }

  async createOne(transaction: Transaction): Promise<Transaction> {
    return await this.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return await this.find();
  }

  async findById(id: number): Promise<Transaction> {
    return await this.findOneBy({ id });
  }

  async updateOne(
    id: number,
    transaction: Partial<Transaction>,
  ): Promise<void> {
    await this.save({ ...transaction, id });
  }

  async deleteById(id: number): Promise<void> {
    await this.delete(id);
  }
}

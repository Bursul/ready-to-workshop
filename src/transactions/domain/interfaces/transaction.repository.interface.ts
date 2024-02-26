// Internal

import { Transaction } from '../entities/transaction.entity';

export interface ITransactionRepository {
  createOne(transaction: Transaction): Promise<Transaction>;
  findAll(): Promise<Transaction[]>;
  findById(id: number): Promise<Transaction>;
  updateOne(id: number, transaction: Partial<Transaction>): Promise<void>;
  deleteById(id: number): Promise<void>;
}

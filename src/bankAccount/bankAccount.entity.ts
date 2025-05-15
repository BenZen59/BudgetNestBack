import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bank_accounts' })
export class BankAccount {
  @PrimaryGeneratedColumn()
  id_account: number;

  @Column()
  account_name: string;

  @Column('decimal', { precision: 10, scale: 2 }) // ou float si tu veux
  amount: number;
}

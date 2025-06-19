import { create } from 'zustand';
import { Transaction } from '../types/Transaction';
import { mockTransactions } from '../data/transaction';

interface TransactionStore {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: mockTransactions,
  setTransactions: (transactions) => set({ transactions })
}));
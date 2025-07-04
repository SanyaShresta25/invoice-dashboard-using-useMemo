// /types/index.ts

export interface Invoice {
  id: number;
  customer: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  date: string;
}

export type SortField = 'date' | 'amount' | 'customer';

export type SortOrder = 'asc' | 'desc';

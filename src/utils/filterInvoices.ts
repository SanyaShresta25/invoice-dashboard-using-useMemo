
import type { Invoice } from '../types';

export const filterInvoices = (invoices: Invoice[], status: string): Invoice[] => {
  return status === 'all' ? invoices : invoices.filter(i => i.status === status);
};


import type { Invoice, SortField } from '../types';

export const sortInvoices = (invoices: Invoice[], sortField: SortField): Invoice[] => {
  return [...invoices].sort((a, b) => {
    let aValue: string | number;
    let bValue: string | number;
    switch (sortField) {
      case 'date':
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
        break;
      case 'amount':
        aValue = a.amount;
        bValue = b.amount;
        break;
      default:
        return 0;
    }
    return aValue > bValue ? 1 : -1;
  });
};

import React, { useState, useMemo, useEffect } from 'react';
import StatusFilter from './StatusFilter';
import InvoiceRow from './InvoiceRow';
import RevenueSummary from './RevenueSummary';
import InvoiceHeader from './InvoiceHeader';
import SortDropdown from './SortDropdown';
import InvoiceTableContent from './InvoiceTableContent';
import { filterInvoices } from '../../utils/filterInvoices';
import { sortInvoices } from '../../utils/sortInvoices';
import type { Invoice, SortField } from '../../types';

interface InvoiceTableProps {
  title?: string;
  subtitle?: string;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ 
  title = "Invoice Table", 
  subtitle = "Filter and sort invoices with optimized performance" 
}) => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<SortField>('date');

  useEffect(() => {
    fetch('/invoices.json')
      .then(res => res.json())
      .then(data => setInvoices(data))
      .catch(err => console.error('Failed to fetch invoices:', err));
  }, []);

  const filteredInvoices = useMemo(() => filterInvoices(invoices, statusFilter), [invoices, statusFilter]);
  const sortedInvoices = useMemo(() => sortInvoices(filteredInvoices, sortField), [filteredInvoices, sortField]);

  const totalRevenue = useMemo(() => {
    return invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  }, [invoices]);

  const filteredRevenue = useMemo(() => {
    return sortedInvoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
  }, [sortedInvoices]);

  const statusCounts = useMemo(() => {
    return invoices.reduce((acc, i) => {
      acc[i.status] = (acc[i.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }, [invoices]);

  const handleSort = (field: SortField) => {
    if (field === 'customer') return;
    setSortField(field);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <InvoiceHeader title={title} subtitle={subtitle} />

        <StatusFilter
          currentFilter={statusFilter}
          onFilterChange={setStatusFilter}
          statusCounts={statusCounts}
          totalCount={invoices.length}
        />

        <SortDropdown sortField={sortField} handleSort={handleSort} />

        <InvoiceTableContent invoices={sortedInvoices} />

        <RevenueSummary
          totalRevenue={totalRevenue}
          filteredRevenue={filteredRevenue}
          showFiltered={statusFilter !== 'all'}
        />

        <div className="mt-4 text-sm text-gray-600 text-center">
          Showing {sortedInvoices.length} of {invoices.length} invoices
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;

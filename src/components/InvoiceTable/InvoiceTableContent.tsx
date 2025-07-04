import React from 'react';
import InvoiceRow from './InvoiceRow';
import type { Invoice } from '../../types';

interface InvoiceTableContentProps {
  invoices: Invoice[];
}

const InvoiceTableContent: React.FC<InvoiceTableContentProps> = ({ invoices }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice ID</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <InvoiceRow key={invoice.id} invoice={invoice} />
          ))}
        </tbody>
      </table>
    </div>
    {invoices.length === 0 && (
      <div className="text-center py-8">
        <p className="text-gray-500">No invoices found for the selected filter.</p>
      </div>
    )}
  </div>
);

export default InvoiceTableContent;

import React from 'react';
import type { Invoice } from '../../types';
import StatusBadge from './StatusBadge';

interface InvoiceRowProps {
  invoice: Invoice;
}

const InvoiceRow: React.FC<InvoiceRowProps> = ({ invoice }) => (
  <tr className="hover:bg-gray-50 text-xs sm:text-sm">
    <td className="px-4 py-3 whitespace-nowrap text-gray-900 font-medium">
      #{invoice.id.toString().padStart(3, '0')}
    </td>
    <td className="px-4 py-3 whitespace-nowrap text-gray-900">
      {invoice.customer}
    </td>
    <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
      ${invoice.amount.toLocaleString()}
    </td>
    <td className="px-4 py-3 whitespace-nowrap">
      <StatusBadge status={invoice.status} />
    </td>
    <td className="px-4 py-3 whitespace-nowrap text-gray-900">
      {new Date(invoice.date).toLocaleDateString()}
    </td>
  </tr>
);

export default InvoiceRow;

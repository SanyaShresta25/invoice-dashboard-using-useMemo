import React from 'react';

interface InvoiceHeaderProps {
  title: string;
  subtitle: string;
}

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export default InvoiceHeader;
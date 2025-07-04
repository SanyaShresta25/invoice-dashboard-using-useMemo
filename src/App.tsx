// /App.tsx
import React from 'react';
import InvoiceTable from './components/InvoiceTable/InvoiceTable';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <InvoiceTable
        title="My Invoice Dashboard"
        subtitle="Manage your invoices efficiently"
      />
    </div>
  );
};

export default App;

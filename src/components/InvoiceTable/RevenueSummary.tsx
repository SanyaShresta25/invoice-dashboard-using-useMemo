import React from 'react';

interface RevenueSummaryProps {
  totalRevenue: number;
  filteredRevenue: number;
  showFiltered: boolean;
}

const RevenueSummary: React.FC<RevenueSummaryProps> = ({ totalRevenue, filteredRevenue, showFiltered }) => (
  <div className="mt-4 p-4 sm:p-6 bg-gray-50 rounded-lg text-sm sm:text-base">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">Revenue Summary</h3>
        {showFiltered && (
          <p className="text-sm text-gray-600 mt-1">Showing revenue for filtered results</p>
        )}
      </div>
      <div className="text-right">
        {showFiltered && (
          <div className="text-sm text-gray-600">Filtered: <span className="font-medium">${filteredRevenue.toLocaleString()}</span></div>
        )}
        <div className="text-xl font-bold text-green-600">Total Paid: ${totalRevenue.toLocaleString()}</div>
      </div>
    </div>
  </div>
);

export default RevenueSummary;
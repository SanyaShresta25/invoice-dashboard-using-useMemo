import React from 'react';

interface StatusFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  statusCounts: Record<string, number>;
  totalCount: number;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ currentFilter, onFilterChange, statusCounts, totalCount }) => {
  const options = [
    { value: 'all', label: 'All', count: totalCount },
    { value: 'Paid', label: 'Paid', count: statusCounts.Paid || 0 },
    { value: 'Pending', label: 'Pending', count: statusCounts.Pending || 0 },
    { value: 'Overdue', label: 'Overdue', count: statusCounts.Overdue || 0 }
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Status</label>
      <select
        className="w-full sm:min-w-48 px-4 py-2 border rounded-lg bg-white text-gray-900"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label} ({opt.count})
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusFilter;
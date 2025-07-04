import React from 'react';
import type { SortField } from '../../types';

interface SortDropdownProps {
  sortField: SortField;
  handleSort: (field: SortField) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ sortField, handleSort }) => (
  <div className="mb-6 flex flex-col sm:flex-row gap-4 sm:items-center">
    <label htmlFor="sortDropdown" className="text-sm font-medium text-gray-700">
      Sort By:
    </label>
    <select
      id="sortDropdown"
      value={sortField}
      onChange={(e) => handleSort(e.target.value as SortField)}
      className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-gray-800"
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

export default SortDropdown;
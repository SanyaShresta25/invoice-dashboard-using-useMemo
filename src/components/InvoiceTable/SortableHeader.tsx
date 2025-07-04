import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import type { SortField } from '../../types';

interface SortableHeaderProps {
  field: Exclude<SortField, 'customer'>;
  currentSort: SortField;
  onSort: (field: SortField) => void;
  children: React.ReactNode;
}

const SortableHeader: React.FC<SortableHeaderProps> = ({
  field,
  currentSort,
  onSort,
  children,
}) => {
  const isActive = currentSort === field;

  return (
    <th
      onClick={() => onSort(field)}
      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:text-blue-600 select-none"
    >
      <div className="flex items-center gap-1">
        {children}
        {isActive && <ArrowUpDown className="w-4 h-4 text-blue-500" />}
      </div>
    </th>
  );
};

export default SortableHeader;

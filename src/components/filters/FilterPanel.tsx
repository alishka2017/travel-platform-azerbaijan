"use client";

import React, { ReactNode } from 'react';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onApply?: () => void;
  onReset?: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onApply,
  onReset,
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto animate-slide-in">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 space-y-6">{children}</div>
        
        <div className="p-4 border-t border-gray-200 space-y-2 sticky bottom-0 bg-white">
          <button
            onClick={onApply || onClose}
            className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Apply Filters
          </button>
          {onReset && (
            <button
              onClick={onReset}
              className="w-full py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>
    </>
  );
};

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => (
  <div className="space-y-3">
    <h4 className="text-sm font-medium text-gray-700">{title}</h4>
    {children}
  </div>
);

export default FilterPanel;
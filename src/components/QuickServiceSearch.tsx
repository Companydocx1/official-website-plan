import React from 'react';
import { Search, X } from 'lucide-react';

interface QuickServiceSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  resultCount: number;
}

export const QuickServiceSearch: React.FC<QuickServiceSearchProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  resultCount,
}) => {
  const categoryChips = [
    { id: 'all', label: 'All Services' },
    { id: 'corporate-mca', label: 'MCA & Corporate' },
    { id: 'taxation-financial', label: 'Tax & Finance' },
    { id: 'labour-hr', label: 'Labour & HR' },
    { id: 'licences-noc', label: 'Licences & Fire NOC' },
    { id: 'import-export', label: 'Import & Export' },
    { id: 'ipr', label: 'Intellectual Property (IPR)' },
    { id: 'iso-certifications', label: 'ISO Certifications' },
    { id: 'legal-services', label: 'Legal & Contracts' },
    { id: 'business-setup', label: 'Business Setup & DPR' },
    { id: 'tech-digital-ai', label: 'Tech, AI & Branding' }
  ];

  return (
    <div className="relative z-20 mx-auto -mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6">
        
        {/* Search Input Box */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            <Search className="h-5 w-5 text-[#C9A227]" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="What service are you looking for? (e.g. GST, Company Registration, Trademark, NGO, FSSAI...)"
            className="w-full rounded-lg border border-slate-300 bg-slate-50/50 py-3.5 pl-11 pr-10 text-sm text-slate-900 placeholder-slate-500 transition-colors focus:border-[#C9A227] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A227]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
              aria-label="Clear search query"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hidden sm:inline">
            Categories:
          </span>
          {categoryChips.map((chip) => {
            const isSelected = selectedCategory === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => onCategorySelect(chip.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  isSelected
                    ? 'bg-[#061B36] text-[#E5C76B] font-semibold shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* Search Results Summary */}
        {(searchQuery || selectedCategory !== 'all') && (
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-800">{resultCount}</strong> services matching your criteria
            </span>
            <button
              onClick={() => {
                onSearchChange('');
                onCategorySelect('all');
              }}
              className="text-[#C9A227] hover:underline font-medium"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

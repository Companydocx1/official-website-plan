import React, { useState } from 'react';
import { GOVERNMENT_PORTALS, GovernmentPortal } from '../data/governmentPortals';
import { ExternalLink, ShieldCheck, Landmark, Building2, Search } from 'lucide-react';

export const GovernmentPortalsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Portals' },
    { id: 'Corporate & Company', label: 'Corporate & MCA' },
    { id: 'Taxation & GST', label: 'Tax & GST' },
    { id: 'IPR & Patents', label: 'IPR & Patents' },
    { id: 'Startup & MSME', label: 'Startup & MSME' },
    { id: 'Licences & Certifications', label: 'Licences & Foreign Trade' },
    { id: 'NGO & Trusts', label: 'NGO & Trusts' },
    { id: 'Labour & Compliance', label: 'Labour & Social Security' },
    { id: 'State & Legal', label: 'Tamil Nadu State' }
  ];

  const filteredPortals = GOVERNMENT_PORTALS.filter((portal) => {
    const matchesCategory = filterCategory === 'all' || portal.category === filterCategory;
    const matchesQuery =
      searchQuery === '' ||
      portal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      portal.keyServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <section id="portals" className="bg-[#FAF9F6] py-16 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
              Statutory Transparency Directory
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#061B36] mt-1">
              Official Government Portals
            </h2>
          </div>
          <p className="text-xs text-slate-600 mt-2 md:mt-0">
            Verified statutory domains for direct public verification & online processing
          </p>
        </div>

        {/* Statutory Submissions Disclaimer Notice */}
        <div className="mb-8 rounded-lg border border-[#C9A227]/40 bg-white p-4 text-xs text-slate-700 shadow-xs flex items-start gap-3">
          <Landmark className="h-5 w-5 shrink-0 text-[#C9A227] mt-0.5" />
          <div className="leading-relaxed">
            <p className="font-semibold text-[#061B36]">
              Direct Government Submission Notice:
            </p>
            <p className="mt-0.5 text-slate-600">
              Company DOCX provides professional advisory, documentation, drafting, and facilitation assistance. Government applications and filings are officially submitted through the respective authorized government portals and statutory departments.
            </p>
          </div>
        </div>

        {/* Category Filter Chips & Portal Search */}
        <div className="mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                    filterCategory === cat.id
                      ? 'bg-[#061B36] text-[#E5C76B] font-semibold'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter government portal..."
                className="w-full rounded border border-slate-300 bg-white py-1.5 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-[#C9A227] focus:outline-none"
              />
              <Search className="pointer-events-none absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Portals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPortals.map((portal) => (
            <div
              key={portal.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-[#C9A227]/70 hover:shadow-md"
            >
              <div>
                {/* Authority Header */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227] truncate">
                    {portal.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {portal.displayUrl}
                  </span>
                </div>

                <h3 className="font-serif text-base font-bold text-[#061B36]">
                  {portal.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-slate-500 line-clamp-1">
                  {portal.department}
                </p>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {portal.purpose}
                </p>

                {/* Key Statutory Services */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-bold uppercase text-slate-400">
                    Key Statutory Services:
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {portal.keyServices.slice(0, 3).map((serv, idx) => (
                      <span
                        key={idx}
                        className="rounded bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600"
                      >
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Portal CTA */}
              <div className="mt-5 pt-3 border-t border-slate-100">
                <a
                  href={portal.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs font-semibold text-[#061B36] hover:bg-[#061B36] hover:text-[#E5C76B] hover:border-[#061B36] transition-colors"
                >
                  <span>Open Official Portal</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

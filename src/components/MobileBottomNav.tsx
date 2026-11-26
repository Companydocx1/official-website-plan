import React from 'react';
import { Layers, FileText, MessageSquare, PhoneCall } from 'lucide-react';
import { generateWhatsAppLink } from '../utils/whatsapp';

interface MobileBottomNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activeSection, onNavigate }) => {
  const whatsappUrl = generateWhatsAppLink();

  const navItems = [
    { id: 'services', label: 'Services', icon: Layers },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare, isExternal: true, href: whatsappUrl },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="fixed bottom-0 inset-x-0 z-40 block sm:hidden bg-[#061B36] border-t border-[#0C2B55] shadow-2xl px-2 py-1.5"
    >
      <div className="grid grid-cols-4 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-1 text-[#25D366] focus:outline-none"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/20">
                  <Icon className="h-4 w-4 fill-current" />
                </div>
                <span className="text-[10px] font-bold mt-0.5 text-[#25D366]">
                  {item.label}
                </span>
              </a>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center py-1 transition-colors focus:outline-none ${
                isActive ? 'text-[#E5C76B]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[10px] font-medium mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

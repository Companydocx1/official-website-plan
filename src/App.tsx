import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickServiceSearch } from './components/QuickServiceSearch';
import { DashboardQuickActions } from './components/DashboardQuickActions';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DocumentsSection } from './components/DocumentsSection';
import { GovernmentPortalsSection } from './components/GovernmentPortalsSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LiveChatWidget } from './components/LiveChatWidget';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GoogleSheetSyncModal } from './components/GoogleSheetSyncModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';

import { ALL_SERVICES, ServiceItem, searchServices, getServiceById } from './data/services';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  // Modal states
  const [detailedService, setDetailedService] = useState<ServiceItem | null>(null);
  const [isSheetModalOpen, setIsSheetModalOpen] = useState<boolean>(false);

  // Documents Section focused service
  const [documentServiceId, setDocumentServiceId] = useState<string>('gst-registration');

  // Contact form initial service
  const [contactServiceFocus, setContactServiceFocus] = useState<string>('Private Limited Company');

  // Filtered services
  const filteredServices = useMemo(() => {
    return searchServices(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  const isSearching = searchQuery.trim().length > 0 || selectedCategory !== 'all';

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Quick Action select handler
  const handleQuickActionSelect = (serviceId: string) => {
    const service = getServiceById(serviceId);
    if (service) {
      setDetailedService(service);
    }
  };

  // View Details handler
  const handleViewDetails = (service: ServiceItem) => {
    setDetailedService(service);
  };

  // View Documents handler
  const handleViewDocuments = (service: ServiceItem) => {
    setDocumentServiceId(service.id);
    const docElement = document.getElementById('documents');
    if (docElement) {
      docElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Open Enquiry handler
  const handleOpenEnquiry = (serviceName?: string) => {
    if (serviceName) {
      setContactServiceFocus(serviceName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#172033] flex flex-col font-sans selection:bg-[#C9A227]/25 selection:text-[#061B36]">
      <ScrollProgressBar />
      {/* 1 & 2. Top bar & Main Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
        onOpenSheetSync={() => setIsSheetModalOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero
          onExploreServices={() => handleNavigate('services')}
          onViewPortals={() => handleNavigate('portals')}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 4. Quick Service Search Box */}
        <QuickServiceSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          resultCount={filteredServices.length}
        />

        {/* 5. Popular Dashboard Quick Actions */}
        <DashboardQuickActions onSelectService={handleQuickActionSelect} />

        {/* 6. Service Categories & Cards Grid */}
        <ServicesSection
          services={filteredServices}
          isSearching={isSearching}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewDetails={handleViewDetails}
          onViewDocuments={handleViewDocuments}
        />

        {/* 7. How It Works (4 Steps) */}
        <HowItWorks />

        {/* 8. Required Documents Section */}
        <DocumentsSection
          initialServiceId={documentServiceId}
          onSelectServiceDetails={handleViewDetails}
        />

        {/* 9. Official Government Portals Section */}
        <GovernmentPortalsSection />

        {/* 10. Why Choose Company DOCX */}
        <WhyChooseUs />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Contact Section with Smart Enquiry Form */}
        <ContactSection initialService={contactServiceFocus} />
      </main>

      {/* 13. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onFilterCategory={(catId) => {
          setSelectedCategory(catId);
          setSearchQuery('');
        }}
        onOpenSheetSync={() => setIsSheetModalOpen(true)}
      />

      {/* Floating Action Elements */}
      <LiveChatWidget />
      <MobileBottomNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Service Detail Modal */}
      {detailedService && (
        <ServiceDetailModal
          service={detailedService}
          onClose={() => setDetailedService(null)}
          onViewDocuments={handleViewDocuments}
        />
      )}

      {/* Google Sheet Sync & Recorded Enquiries Modal */}
      <GoogleSheetSyncModal
        isOpen={isSheetModalOpen}
        onClose={() => setIsSheetModalOpen(false)}
      />
    </div>
  );
}

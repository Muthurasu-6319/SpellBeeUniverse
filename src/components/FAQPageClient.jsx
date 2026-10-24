"use client";
import React, { useState } from 'react';
import FAQHero from '@/components/FAQHero';
import FAQCategories from '@/components/FAQCategories';
import FAQAccordionSection from '@/components/FAQAccordionSection';

export default function FAQPageClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (q) => {
    setSearchQuery(q);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
  };

  return (
    <>
      <FAQHero 
        searchQuery={searchQuery} 
        onSearch={handleSearch} 
        onSelectCategory={handleSelectCategory} 
      />
      <FAQCategories onSelectCategory={handleSelectCategory} />
      <FAQAccordionSection 
        searchQuery={searchQuery} 
        onClearSearch={handleClearSearch}
        selectedCategory={selectedCategory}
      />
    </>
  );
}

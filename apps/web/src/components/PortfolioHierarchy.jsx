
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/lib/portfolioData.js';
import ImageLoader from '@/components/ImageLoader.jsx';
import { Button } from '@/components/ui/button';

const PortfolioHierarchy = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    if (onCategoryChange) {
      onCategoryChange(categoryName);
    }
  };

  const handleBack = () => {
    setActiveCategory(null);
    if (onCategoryChange) {
      onCategoryChange(null);
    }
  };

  if (activeCategory) {
    const categoryData = portfolioData[activeCategory];
    return (
      <div className="space-y-8 w-full">
        <Button variant="ghost" onClick={handleBack} className="mb-4 hover:bg-muted">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Categories
        </Button>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {activeCategory === 'MusicEvent' ? 'Music Events' : activeCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categoryData.photos.map((photo, idx) => (
            <motion.div 
              key={photo.id} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md border border-border/50 bg-muted">
                <ImageLoader 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{photo.description}</p>
                <p className="text-xs font-medium text-foreground/60 mt-2 bg-muted inline-block px-2 py-1 rounded-md">
                  {photo.metadata}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
      {Object.entries(portfolioData).map(([catName, catData], idx) => (
        <motion.div
          key={catName}
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: idx * 0.1 }}
          onClick={() => handleCategoryClick(catName)}
          className="group cursor-pointer"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-muted border border-border/50 mb-4">
            <ImageLoader 
              src={catData.coverImage} 
              alt={catName} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-6 text-center">
              <h3 className="text-white text-3xl font-bold tracking-wide drop-shadow-md">
                {catName === 'MusicEvent' ? 'Music Events' : catName}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioHierarchy;

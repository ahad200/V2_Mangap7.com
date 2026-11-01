
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PhotoCarousel from '@/components/PhotoCarousel.jsx';
import PortfolioHierarchy from '@/components/PortfolioHierarchy.jsx';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
      <Helmet>
        <title>Firman Suryani - Professional Photography Portfolio</title>
        <meta name="description" content="Professional photographer specializing in wedding, commercial, street, and nature photography. Capturing moments that matter." />
      </Helmet>
      
      <Header />
      
      <main className="flex-1 pt-16 flex flex-col">
        {/* Carousel Section - Only show when no category is selected */}
        {!selectedCategory && (
          <section className="pt-8 pb-12 bg-background">
            <div className="container mx-auto px-2 sm:px-4">
              <PhotoCarousel />
            </div>
          </section>
        )}

        {/* Portfolio Collections Section */}
        <section className={`flex-grow bg-muted/30 ${selectedCategory ? 'pt-8 pb-[var(--section-padding-y)]' : 'pb-[var(--section-padding-y)] pt-8'}`}>
          <div className="container mx-auto px-2 sm:px-4">
            <PortfolioHierarchy onCategoryChange={setSelectedCategory} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;

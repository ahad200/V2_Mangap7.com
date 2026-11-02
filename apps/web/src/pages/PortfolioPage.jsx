
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PortfolioHierarchy from '@/components/PortfolioHierarchy.jsx';
import { SITE_URL } from '@/lib/site.js';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio - Firman Suryani Photography</title>
        <meta name="description" content="Browse my comprehensive photography portfolio featuring curated collections of wedding, commercial, street, and nature photography." />
        <link rel="canonical" href={`${SITE_URL}/portfolio`} />
      </Helmet>

      <Header />

      <main className="flex-1 pt-16 flex flex-col">
        <section className="pt-8 pb-[var(--section-padding-y)] flex-grow bg-background">
          <div className="container mx-auto px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h1 className="font-bogart text-foreground mb-4">Portfolio</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A carefully curated selection of my finest work, organized by discipline and theme.
              </p>
            </motion.div>

            <PortfolioHierarchy />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PortfolioPage;


import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ImageLoader from '@/components/ImageLoader.jsx';

const AboutPage = () => {
  const gearList = [
    'Sony a7c mark II',
    'Sony a7III',
    'Lens Sony FE 55mm f1.8',
    'Lens Tamron 20-40mm f2.8',
    'Lens Tamron 28-75mm f2.8',
    'Lens Sony FE 70-200mm G macro f4',
    'Lens TTArtisan Fisheye 11m f2.8',
    'Flash Godox TT685s',
    'Drone DJI mini 3 Pro',
    'Fujifilm MDL-9 (analog)'
  ];

  return (
    <>
      <Helmet>
        <title>About - Firman Suryani Photography</title>
        <meta name="description" content="Meet Firman Suryani, a professional photographer and visual storyteller capturing authentic moments." />
      </Helmet>

      <Header />

      <main className="flex-1 pt-16 pb-8 flex flex-col">
        <section className="pt-8 pb-[var(--section-padding-y)] flex-grow flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }} 
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start md:items-center">
                
                {/* Photographer Image */}
                <div className="w-full md:w-5/12 order-1">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-muted">
                    <ImageLoader 
                      src="https://drive.google.com/uc?export=view&id=1xQMuxqdkkCkWyfB-YVaLIfdH1iXNTcUd" 
                      alt="Firman Suryani - Professional Photographer" 
                      className="w-full h-full object-cover"
                      wrapperClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full md:w-7/12 order-2 flex flex-col justify-center">
                  <h1 className="font-bogart text-foreground mb-2">Firman Suryani</h1>
                  <p className="text-xl text-muted-foreground font-medium mb-8 tracking-wide">
                    Photographer & Visual Storyteller
                  </p>
                  
                  <div className="space-y-8 text-lg text-foreground/80 leading-relaxed max-w-prose">
                    <p>
                      As a creative worker, I have various experiences working as a photographer, videographer, sound engineer, and Editor, collaborating with government, non-profit organizations, the music industry, and commercial brands. My educational background in sociology science, experience working in social-related issues, and experience traveling to field sites provide me with strong knowledge and a broad network in social fields.
                    </p>
                    
                    <div className="bg-muted/40 p-6 rounded-2xl border border-border/50">
                      <h2 className="font-bogart text-xl font-semibold text-foreground mb-4">My Gear for Work</h2>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {gearList.map((item, i) => (
                          <li key={i} className="flex items-center text-base">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;

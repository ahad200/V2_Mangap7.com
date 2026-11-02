
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { SITE_URL } from '@/lib/site.js';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Firman Suryani Photography</title>
        <meta name="description" content="Get in touch with Firman Suryani for photography inquiries, bookings, and collaborations via Instagram." />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>

      <Header />

      <main className="flex-1 pt-16 flex flex-col">
        <section className="pt-12 pb-[var(--section-padding-y)] flex-grow flex items-center justify-center bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-12">
                <h1 className="font-bogart text-foreground mb-4">Let's Work Together</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Whether you're looking to capture a special event or need professional commercial photography, I'm here to bring your vision to life. Connect with me on Instagram to discuss your project.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-10 shadow-xl border border-border text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 mb-6">
                  <Instagram className="w-8 h-8 text-[#E1306C]" />
                </div>
                <h2 className="font-bogart text-2xl md:text-3xl font-bold text-foreground mb-3">Connect on Instagram</h2>
                <p className="text-muted-foreground mb-8 text-balance text-lg">
                  For photography inquiries, bookings, and collaborations, please reach out to me directly on Instagram. I'm always excited to discuss your vision!
                </p>
                
                <Button
                  onClick={() => window.open('https://instagram.com/mangap7', '_blank')}
                  className="w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white transition-all duration-200 active:scale-[0.98] h-12 text-base font-medium shadow-md"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow me on Instagram
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;

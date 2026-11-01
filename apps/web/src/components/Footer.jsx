import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center space-x-6">
          <a
            href="https://instagram.com/mangap7"
            target="https://www.instagram.com/mangap7"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com/@firmansuryani/"
            target="https://www.youtube.com/@firmansuryani/"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors p-2"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Firman Suryani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
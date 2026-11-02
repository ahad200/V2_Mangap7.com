import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <Helmet>
              <title>404 - Page Not Found</title>
              <meta name="robots" content="noindex" />
            </Helmet>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">404 - Page Not Found</h1>
              <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
              <a href="/" className="text-primary hover:underline">Back to home</a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
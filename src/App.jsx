
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUsPage';
import ProductsServicesPage from '@/pages/ProductsServicesPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import GalleryPage from '@/pages/GalleryPage';
import FaqsPage from '@/pages/FaqsPage';
import ContactUsPage from '@/pages/ContactUsPage';
import QuoteRequestPage from '@/pages/QuoteRequestPage';
import PrivencyPolice from '@/pages/PrivencyPolice';
import BlogPage from '@/pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products-services" element={<ProductsServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/privency-policy" element={<PrivencyPolice />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Quote Request Page */}
          <Route path="/quote-request" element={<QuoteRequestPage />} />
          {/* Fallback for any other route - could be a 404 page */}
          <Route path="*" element={<HomePage />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

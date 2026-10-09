import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InnerPageLayout } from './layouts/InnerPageLayout';
import { WorkPage } from './pages/WorkPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CaseStudyPage } from './pages/CaseStudyPage';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOMEPAGE ROUTE — 100% UNCHANGED, preserving existing single-page UI/UX */}
        <Route path="/" element={<HomePage />} />

        {/* INNER PAGES — Wrapped in InnerPageLayout with WebGL2 LiquidFilm background */}
        <Route element={<InnerPageLayout />}>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Individual Case Study Routes */}
          <Route path="/work/infotally" element={<CaseStudyPage />} />
          <Route path="/work/astra" element={<CaseStudyPage />} />
          <Route path="/work/rexpo" element={<CaseStudyPage />} />
          <Route path="/work/packcheck" element={<CaseStudyPage />} />
          <Route path="/work/:slug" element={<CaseStudyPage />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

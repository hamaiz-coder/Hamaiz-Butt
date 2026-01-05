
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import CategoriesPage from './pages/CategoriesPage';
import ImagePage from './pages/ImagePage';
import { AboutPage, ContactPage, LicensePage } from './pages/StaticPages';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/category/:cat" element={<SearchPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/image/:id" element={<ImagePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/license" element={<LicensePage />} />
          {/* SEO friendly redirects */}
          <Route path="/terms" element={<LicensePage />} />
          <Route path="/privacy" element={<LicensePage />} />
          <Route path="/dmca" element={<AboutPage />} />
          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

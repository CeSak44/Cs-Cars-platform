import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
// import Tracking from './pages/Tracking';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.className = dir === 'rtl' ? 'rtl-layout' : 'ltr-layout';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/tracking" element={<Tracking />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

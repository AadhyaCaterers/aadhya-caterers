import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import Layout from './components/Layout';
import Preloader from './components/Preloader';

import Home     from './pages/Home';
import About    from './pages/About';
import Services from './pages/Services';
import Gallery  from './pages/Gallery';
import Videos   from './pages/Videos';
import Menu     from './pages/Menu';
import Contact  from './pages/Contact';
import NotFound from './pages/NotFound';

// Top-level app shell:
// 1. Show preloader on first paint
// 2. Wrap routes in BrowserRouter + persistent Layout (navbar, footer, floating buttons, route transitions)
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" onDone={() => setLoading(false)} />
      ) : (
        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/"         element={<Home />} />
                <Route path="/about"    element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/gallery"  element={<Gallery />} />
                <Route path="/videos"   element={<Videos />} />
                <Route path="/menu"     element={<Menu />} />
                <Route path="/contact"  element={<Contact />} />
                <Route path="*"         element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

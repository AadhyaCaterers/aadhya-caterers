import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';
import ScrollToTop from './ScrollToTop';

// Persistent app shell: navbar, animated route outlet, footer, floating action buttons
export default function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          style={{ minHeight: '60vh' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </>
  );
}

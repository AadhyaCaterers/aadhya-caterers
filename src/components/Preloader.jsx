import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Brand preloader shown once on initial app load
export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div className="preloader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <img src="/logo.png" alt="Aadhya Caterers" className="preloader-logo" />
      <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: '1.5rem', color: '#C9A857', marginTop: -8, fontWeight: 500 }}>
        Aadhya Caterers
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
      <p style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(255,247,229,0.5)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Crafting Excellence…
      </p>
    </motion.div>
  );
}

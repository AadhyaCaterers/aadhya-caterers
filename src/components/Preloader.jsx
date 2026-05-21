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
      <div style={{ fontFamily: '"Great Vibes", cursive', fontSize: '1.6rem', color: '#d4a017', marginTop: -8 }}>
        Aadhya Caterers
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
      <p style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(253,246,227,0.5)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Crafting Excellence…
      </p>
    </motion.div>
  );
}

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Brand preloader — bright cream luxury feel
export default function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div className="preloader" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <img src="/logo.png" alt="Aadhya Caterers" className="preloader-logo" />
      <div style={{
        fontFamily: '"Playfair Display", serif',
        fontStyle: 'italic',
        fontSize: '1.65rem',
        background: 'linear-gradient(135deg, #B8923D 0%, #C9A14A 50%, #8B6B2A 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginTop: -8,
        fontWeight: 600,
      }}>
        Aadhya Caterers
      </div>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" />
      </div>
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        color: '#8B6B2A',
        fontSize: '0.78rem',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        fontWeight: 700,
      }}>
        Crafting Excellence…
      </p>
    </motion.div>
  );
}

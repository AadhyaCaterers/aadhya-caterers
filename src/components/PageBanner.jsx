import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Reusable page banner / hero used at the top of every sub-page.
// Provides a consistent premium feel + breadcrumbs + page title.
export default function PageBanner({ title, subtitle, tagline, image = '/img7.jpg', height = 360 }) {
  const { pathname } = useLocation();
  const crumb = pathname === '/' ? 'Home' : title;

  return (
    <section
      style={{
        position: 'relative',
        height,
        marginTop: 72, // sit below sticky navbar
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212,160,23,0.18)',
      }}
    >
      {/* Dark gradient overlay for text legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,14,2,0.55) 0%, rgba(26,14,2,0.75) 60%, rgba(26,14,2,0.95) 100%)' }} />
      {/* Subtle 45deg gold pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(212,160,23,0.025) 40px,rgba(212,160,23,0.025) 80px)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: '"Great Vibes", cursive', fontSize: 'clamp(1.6rem,3vw,2.4rem)', color: '#d4a017', marginBottom: 4 }}
          >
            {tagline}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.9rem,5vw,3.4rem)', color: '#fdf6e3', fontWeight: 700, marginBottom: 12, lineHeight: 1.15 }}
        >
          {title}
        </motion.h1>

        <div className="gold-divider" style={{ margin: '0 auto 16px' }} />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.25 }}
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(0.95rem,2vw,1.15rem)', color: 'rgba(253,246,227,0.85)', maxWidth: 720, lineHeight: 1.6 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.35 }}
          style={{ marginTop: 18, fontFamily: '"Lato", sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(253,246,227,0.6)' }}
        >
          <Link to="/" style={{ color: '#d4a017', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 10px', color: '#d4a017' }}>✦</span>
          <span>{crumb}</span>
        </motion.div>
      </div>
    </section>
  );
}

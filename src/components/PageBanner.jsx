import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Reusable page banner / hero used at the top of every sub-page.
// Provides a consistent premium feel + breadcrumbs + page title.
export default function PageBanner({ title, subtitle, tagline, image = '/img7.jpg', height = 380 }) {
  const { pathname } = useLocation();
  const crumb = pathname === '/' ? 'Home' : title;

  return (
    <section
      style={{
        position: 'relative',
        height,
        // sit below sticky navbar (top-bar 38px on desktop + nav 82px ≈ 120; on mobile only 82)
        marginTop: 0,
        paddingTop: 110,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212,160,23,0.22)',
      }}
    >
      {/* Dark gradient overlay for text legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,14,2,0.55) 0%, rgba(26,14,2,0.78) 60%, rgba(26,14,2,0.96) 100%)' }} />
      {/* Subtle 45deg gold pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(212,160,23,0.025) 40px,rgba(212,160,23,0.025) 80px)' }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ fontFamily: '"Great Vibes", cursive', fontSize: 'clamp(1.7rem,3vw,2.6rem)', color: '#d4a017', marginBottom: 4, lineHeight: 1 }}
          >
            {tagline}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem,5.2vw,3.6rem)', color: '#fdf6e3', fontWeight: 700, marginBottom: 14, lineHeight: 1.1, textShadow: '0 4px 22px rgba(0,0,0,0.4)' }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="ornament-divider"
          style={{ maxWidth: 240 }}
        >
          <span className="ornament-symbol">✦ ❀ ✦</span>
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1rem,2vw,1.18rem)', color: 'rgba(253,246,227,0.88)', maxWidth: 760, lineHeight: 1.65, marginTop: 4 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: 22, fontFamily: '"Lato", sans-serif', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(253,246,227,0.7)' }}
        >
          <Link to="/" style={{ color: '#d4a017', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 12px', color: '#d4a017' }}>✦</span>
          <span>{crumb}</span>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Reusable page banner — bright cream/beige luxury hero with gold ornaments.
// Used at the top of every sub-page for a consistent premium feel.
export default function PageBanner({ title, subtitle, tagline, image = '/img7.jpg', height = 420 }) {
  const { pathname } = useLocation();
  const crumb = pathname === '/' ? 'Home' : title;

  return (
    <section
      style={{
        position: 'relative',
        height,
        marginTop: 0,
        paddingTop: 110,
        overflow: 'hidden',
        borderBottom: '1px solid rgba(139,107,42,0.25)',
        background:
          'radial-gradient(ellipse at 20% 30%, rgba(229,199,127,0.40) 0%, transparent 50%),' +
          'radial-gradient(ellipse at 80% 70%, rgba(232,162,156,0.28) 0%, transparent 50%),' +
          'linear-gradient(135deg, #FFFBF2 0%, #FFF7E5 35%, #FBEFD6 70%, #F4E4C9 100%)',
      }}
    >
      {/* Background image — soft on the right */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.18,
        mixBlendMode: 'multiply',
      }} />

      {/* Diagonal pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(139,107,42,0.06) 60px, rgba(139,107,42,0.06) 120px)',
        pointerEvents: 'none',
      }} />

      {/* Decorative gold rings */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px', width: 320, height: 320,
        borderRadius: '50%', border: '2px solid rgba(201,161,74,0.30)', pointerEvents: 'none',
      }}>
        <div style={{ position: 'absolute', inset: 24, borderRadius: '50%', border: '1px solid rgba(201,161,74,0.18)' }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 24px',
        height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
      }}>
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.05rem, 1.6vw, 1.32rem)',
              color: '#C0392B',
              marginBottom: 8,
              lineHeight: 1.3,
              fontWeight: 500,
            }}
          >
            {tagline}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.2rem, 5.4vw, 3.8rem)',
            color: '#3B2A1F',
            fontWeight: 700,
            marginBottom: 14,
            lineHeight: 1.1,
          }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="ornament-divider"
          style={{ maxWidth: 280 }}
        >
          <span className="ornament-symbol">✦ ❀ ✦</span>
        </motion.div>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.18rem)',
              color: '#6B5544',
              maxWidth: 760,
              lineHeight: 1.7,
              marginTop: 4,
            }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 26,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.78rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#6B5544',
            fontWeight: 600,
          }}
        >
          <Link to="/" style={{ color: '#C0392B', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 14px', color: '#8B6B2A' }}>✦</span>
          <span style={{ color: '#8B6B2A' }}>{crumb}</span>
        </motion.div>
      </div>
    </section>
  );
}

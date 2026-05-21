import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Bright luxury hero — cream/ivory canvas, warm gold gradient,
// elegant Playfair display title, soft-red & gold CTAs.
// Hero image is presented BRIGHT (not darkened) for premium catering feel.
export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // Light cream gradient — warm and luxurious
        background:
          'radial-gradient(ellipse at 18% 22%, rgba(229,199,127,0.45) 0%, transparent 45%),' +
          'radial-gradient(ellipse at 82% 78%, rgba(232,162,156,0.30) 0%, transparent 45%),' +
          'linear-gradient(135deg, #FFFBF2 0%, #FFF7E5 35%, #FBEFD6 70%, #F4E4C9 100%)',
      }}
    >
      {/* Soft diagonal pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(139,107,42,0.04) 60px, rgba(139,107,42,0.04) 120px)',
        pointerEvents: 'none',
      }} />

      {/* Ornamental gold ring (top-right) */}
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '-180px', right: '-180px',
          width: 520, height: 520,
          borderRadius: '50%',
          border: '2px solid rgba(201,161,74,0.35)',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          position: 'absolute', inset: 30,
          borderRadius: '50%',
          border: '1px solid rgba(201,161,74,0.20)',
        }} />
      </motion.div>

      {/* Ornamental gold ring (bottom-left) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: '-160px', left: '-160px',
          width: 460, height: 460,
          borderRadius: '50%',
          border: '2px solid rgba(192,57,43,0.20)',
          pointerEvents: 'none',
        }}
      >
        <div style={{
          position: 'absolute', inset: 26,
          borderRadius: '50%',
          border: '1px solid rgba(192,57,43,0.12)',
        }} />
      </motion.div>

      {/* Gold decorative inner border */}
      <div className="hero-gold-frame">
        <div className="hero-corner tl" />
        <div className="hero-corner tr" />
        <div className="hero-corner bl" />
        <div className="hero-corner br" />
      </div>

      {/* ── CONTENT GRID ── */}
      <div
        style={{
          position: 'relative', zIndex: 2,
          width: '100%',
          maxWidth: 1280,
          padding: '160px 32px 110px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 60,
          alignItems: 'center',
        }}
      >
        {/* LEFT — Headline & CTAs */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 18px',
              background: 'rgba(255, 251, 242, 0.7)',
              border: '1px solid rgba(139,107,42,0.30)',
              borderRadius: 999,
              backdropFilter: 'blur(8px)',
              marginBottom: 22,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#C0392B' }} />
            <span style={{
              fontFamily: '"DM Sans", sans-serif',
              color: '#8B6B2A',
              fontSize: '0.74rem',
              letterSpacing: '0.30em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}>
              Premium Catering · Hyderabad
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.8 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
              color: '#C0392B',
              marginBottom: 6,
              lineHeight: 1.2,
              fontWeight: 500,
            }}
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.9 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2.6rem, 7vw, 5.6rem)',
              fontWeight: 700,
              lineHeight: 1.02,
              marginBottom: 18,
              color: '#3B2A1F',
              letterSpacing: '-0.01em',
            }}
          >
            Aadhya{' '}
            <span style={{
              background: 'linear-gradient(135deg, #B8923D 0%, #C9A14A 35%, #E5C77F 70%, #C9A14A 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}>
              Caterers
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="ornament-divider"
            style={{ margin: '0 0 20px', maxWidth: 360, justifyContent: 'flex-start' }}
          >
            <span className="ornament-symbol">✦ ❀ ✦</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.7 }}
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.1vw, 1.42rem)',
              color: '#6B5544',
              marginBottom: 14,
              fontWeight: 400,
              lineHeight: 1.4,
            }}
          >
            Deliciously Crafted &nbsp;·&nbsp; Royally Served &nbsp;·&nbsp; Memorably Celebrated
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.7 }}
            style={{
              fontFamily: '"DM Sans", sans-serif',
              color: '#6B5544',
              fontSize: '1.02rem',
              marginBottom: 38,
              maxWidth: 540,
              lineHeight: 1.75,
            }}
          >
            Hyderabad's most trusted name for grand wedding feasts, traditional Telugu meals,
            corporate events and live counter celebrations — crafted with eight years of culinary excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.7 }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 56 }}
          >
            <a href={`tel:${PHONE_PRIMARY}`} className="btn-primary" style={{ textDecoration: 'none' }}>
              <span>📞 &nbsp;Call Now</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textDecoration: 'none' }}>
              <span>WhatsApp Us</span>
            </a>
            <Link to="/menu" className="btn-outline-gold" style={{ textDecoration: 'none' }}>
              View Menu
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3, duration: 0.8 }}
            style={{
              display: 'flex',
              gap: 36,
              flexWrap: 'wrap',
              paddingTop: 28,
              borderTop: '1px solid rgba(139,107,42,0.25)',
              maxWidth: 600,
            }}
          >
            {[
              { num: '500+', label: 'Events' },
              { num: '10K+', label: 'Guests' },
              { num: '8+',   label: 'Years' },
              { num: '100%', label: 'Hygienic' },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: 'left', minWidth: 90 }}>
                <div className="stat-number">{s.num}</div>
                <div style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: '#8C7763',
                  fontSize: '0.78rem',
                  letterSpacing: '0.18em',
                  marginTop: 6,
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Image collage */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          style={{ position: 'relative', minHeight: 480 }}
          className="hidden-mobile"
        >
          {/* Floating gold "8+ Years" badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.1, duration: 0.7, type: 'spring', stiffness: 120 }}
            style={{
              position: 'absolute',
              top: 30, right: -10,
              zIndex: 4,
              width: 120, height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 16px 36px rgba(139,107,42,0.40)',
              border: '3px solid #FFFBF2',
              color: '#3B2A1F',
              fontFamily: '"Playfair Display", serif',
              textAlign: 'center',
              lineHeight: 1.05,
            }}
          >
            <span style={{ fontSize: '1.85rem', fontWeight: 700 }}>8+</span>
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: '"DM Sans"', fontWeight: 700, marginTop: 2 }}>Years</span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.10em', textTransform: 'uppercase', fontFamily: '"DM Sans"', fontWeight: 600, opacity: 0.85 }}>of Excellence</span>
          </motion.div>

          {/* Main image */}
          <div style={{
            position: 'relative',
            borderRadius: 14,
            overflow: 'hidden',
            border: '4px solid #FFFBF2',
            boxShadow: '0 24px 60px rgba(139,107,42,0.30)',
            transform: 'rotate(-1.5deg)',
          }}>
            <img
              src="/img7.jpg"
              alt="Premium wedding catering setup"
              style={{
                width: '100%',
                height: 480,
                objectFit: 'cover',
                display: 'block',
                filter: 'saturate(1.10) contrast(1.04) brightness(1.02)',
              }}
            />
            {/* Soft warm overlay (very subtle) */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, rgba(255,251,242,0.06), transparent 40%, rgba(192,57,43,0.04))',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Floating second image (bottom-left) */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
            style={{
              position: 'absolute',
              bottom: -36, left: -28,
              width: 200,
              borderRadius: 12,
              overflow: 'hidden',
              border: '4px solid #FFFBF2',
              boxShadow: '0 16px 36px rgba(139,107,42,0.30)',
              transform: 'rotate(3deg)',
              zIndex: 3,
            }}
          >
            <img
              src="/img2.jpg"
              alt="Royal buffet setup"
              style={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                display: 'block',
                filter: 'saturate(1.10) contrast(1.04) brightness(1.02)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        }}
      >
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          color: '#8B6B2A',
          fontSize: '0.66rem',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ color: '#8B6B2A', fontSize: '1.3rem' }}>
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

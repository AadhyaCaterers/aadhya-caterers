import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// Full-screen hero with brand framing — used on the Home page only
export default function Hero() {
  return (
    <section
      id="home"
      style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/img7.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.32) contrast(1.08) saturate(1.15)',
          transform: 'scale(1.04)',
        }}
      />
      {/* Layered gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(34,31,31,0.65) 0%, rgba(34,31,31,0.3) 40%, rgba(34,31,31,0.92) 100%)' }} />
      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
      {/* Subtle pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(201,168,87,0.025) 40px,rgba(201,168,87,0.025) 80px)' }} />

      {/* Gold decorative border */}
      <div className="hero-gold-frame">
        <div className="hero-corner tl" />
        <div className="hero-corner tr" />
        <div className="hero-corner bl" />
        <div className="hero-corner br" />
      </div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '160px 24px 100px', maxWidth: 980 }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            color: '#C9A857',
            fontSize: '0.78rem',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            marginBottom: 18,
          }}
        >
          ✦ &nbsp; Premium Catering Services &nbsp; ✦
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.9 }}
          style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 'clamp(1.1rem,1.6vw,1.35rem)', color: '#E0C68A', marginBottom: 8, lineHeight: 1, letterSpacing: '0.02em', fontWeight: 500 }}
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(2.4rem,7vw,5.2rem)',
            fontWeight: 700,
            color: '#FFF7E5',
            lineHeight: 1.05,
            marginBottom: 18,
            textShadow: '0 4px 30px rgba(0,0,0,0.5)',
          }}
        >
          Aadhya <span style={{ color: '#C9A857', fontStyle: 'italic' }}>Caterers</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
          className="ornament-divider"
          style={{ maxWidth: 360 }}
        >
          <span className="ornament-symbol">✦ ❀ ✦</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: 'clamp(1.05rem,2.2vw,1.32rem)',
            color: 'rgba(255,247,229,0.92)',
            letterSpacing: '0.04em',
            marginBottom: 14,
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          Deliciously Crafted &nbsp;·&nbsp; Royally Served &nbsp;·&nbsp; Memorably Celebrated
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.05, duration: 0.8 }}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgba(255,247,229,0.65)',
            fontSize: '0.95rem',
            marginBottom: 38,
            maxWidth: 620,
            margin: '0 auto 38px',
            lineHeight: 1.7,
          }}
        >
          Hyderabad's most trusted name for grand wedding feasts, corporate events,
          traditional Telugu meals and live counter celebrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href={`tel:${PHONE_PRIMARY}`} className="btn-primary" style={{ textDecoration: 'none' }}>Call Now</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ textDecoration: 'none' }}>WhatsApp Us</a>
          <Link to="/menu" className="btn-outline-gold" style={{ textDecoration: 'none' }}>View Menu</Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            display: 'flex',
            gap: 50,
            justifyContent: 'center',
            marginTop: 70,
            flexWrap: 'wrap',
            paddingTop: 30,
            borderTop: '1px solid rgba(201,168,87,0.18)',
            maxWidth: 720,
            marginInline: 'auto',
          }}
        >
          {[
            { num: '500+', label: 'Events Catered' },
            { num: '10K+', label: 'Happy Guests' },
            { num: '8+',   label: 'Years Experience' },
            { num: '100%', label: 'Hygienic Food' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center', minWidth: 110 }}>
              <div className="stat-number">{s.num}</div>
              <div style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(255,247,229,0.7)', fontSize: '0.92rem', letterSpacing: '0.12em', marginTop: 6, textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
      >
        <span style={{ fontFamily: '"DM Sans", sans-serif', color: 'rgba(201,168,87,0.7)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ color: '#C9A857', fontSize: '1.2rem' }}>↓</motion.div>
      </motion.div>
    </section>
  );
}

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
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/img7.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3) contrast(1.1) saturate(1.1)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(26,14,2,0.55) 0%, rgba(26,14,2,0.2) 40%, rgba(26,14,2,0.85) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 40px,rgba(212,160,23,0.02) 40px,rgba(212,160,23,0.02) 80px)' }} />

      {/* Gold decorative border */}
      <div className="hero-gold-frame">
        <div className="hero-corner tl" />
        <div className="hero-corner tr" />
        <div className="hero-corner bl" />
        <div className="hero-corner br" />
      </div>

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '130px 24px 90px', maxWidth: 900 }}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ marginBottom: 24 }}>
          <img src="/logo.png" alt="Aadhya Caterers" style={{ height: 100, objectFit: 'contain', filter: 'drop-shadow(0 4px 12px rgba(212,160,23,0.35))' }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: '"Great Vibes", cursive', fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#d4a017', marginBottom: 8 }}
        >
          Deliciously Crafted. Perfectly Served.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
          style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem,5vw,3.5rem)', fontWeight: 700, color: '#fdf6e3', lineHeight: 1.2, marginBottom: 16 }}
        >
          Premium Catering Services<br />
          <span style={{ color: '#d4a017' }}>in Hyderabad</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>
          <div style={{ margin: '16px 0', color: '#d4a017', fontSize: '0.8rem', letterSpacing: '0.3em', fontFamily: '"Lato", sans-serif' }}>✦ AADHYA CATERERS ✦</div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(1rem,2.5vw,1.4rem)', color: 'rgba(253,246,227,0.85)', letterSpacing: '0.1em', marginBottom: 40 }}
        >
          Traditional Taste &nbsp;•&nbsp; Grand Presentation &nbsp;•&nbsp; Memorable Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href={`tel:${PHONE_PRIMARY}`} className="btn-gold" style={{ textDecoration: 'none' }}>📞 Call Now</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>💬 WhatsApp Us</a>
          <Link to="/menu" className="btn-outline-gold" style={{ textDecoration: 'none' }}>📜 View Menu</Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          style={{ display: 'flex', gap: 40, justifyContent: 'center', marginTop: 60, flexWrap: 'wrap' }}
        >
          {[
            { num: '500+', label: 'Events Catered' },
            { num: '10K+', label: 'Happy Guests' },
            { num: '8+',   label: 'Years Experience' },
            { num: '100%', label: 'Hygienic Food' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="stat-number">{s.num}</div>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', color: 'rgba(253,246,227,0.7)', fontSize: '0.9rem', letterSpacing: '0.1em', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ color: '#d4a017', fontSize: '1.2rem' }}>↓</motion.div>
      </motion.div>
    </section>
  );
}

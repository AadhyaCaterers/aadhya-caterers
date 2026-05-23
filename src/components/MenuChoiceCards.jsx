import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MENU_OPTIONS } from '../data/menuData';

// ──────────────────────────────────────────────────────────────────
// MenuChoiceCards — two premium catering cards (Veg / Non-Veg).
// Used on Home page and on the /menu hub page.
//
// Each card shows: icon medallion, title, tagline, description,
// "View Menu →" CTA. Layout is mobile-first (stacked) and becomes
// a 2-column grid on tablet+. Colors come from each option's
// accent palette in data/menuData.js.
// ──────────────────────────────────────────────────────────────────

const Card = ({ option, index }) => {
  const a = option.accent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
      style={{ height: '100%' }}
    >
      <Link
        to={option.to}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          textDecoration: 'none',
          background: '#FFFFFF',
          border: '1.5px solid rgba(139,107,42,0.22)',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 14px 36px rgba(139,107,42,0.12)',
          transition:
            'transform 0.4s cubic-bezier(0.2,0.7,0.3,1), box-shadow 0.4s, border-color 0.4s',
          position: 'relative',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow =
            '0 26px 54px rgba(139,107,42,0.22)';
          e.currentTarget.style.borderColor = a.ring;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow =
            '0 14px 36px rgba(139,107,42,0.12)';
          e.currentTarget.style.borderColor = 'rgba(139,107,42,0.22)';
        }}
      >
        {/* Top accent band with image + soft tint + medallion */}
        <div
          style={{
            position: 'relative',
            height: 200,
            overflow: 'hidden',
          }}
        >
          <img
            src={option.image}
            alt={option.label}
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(1.05) contrast(1.04)',
              display: 'block',
            }}
          />
          {/* Tint overlay using accent gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(135deg, ${a.from}55 0%, ${a.mid}33 50%, ${a.to}66 100%)`,
            }}
          />
          {/* Subtle pattern */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255,251,242,0.10) 18px, rgba(255,251,242,0.10) 36px)',
            }}
          />
          {/* Medallion icon */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: -34,
              transform: 'translateX(-50%)',
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${a.from} 0%, ${a.mid} 50%, ${a.to} 100%)`,
              border: '4px solid #FFFBF2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.9rem',
              boxShadow: '0 10px 22px rgba(0,0,0,0.18)',
              zIndex: 2,
            }}
          >
            {option.icon}
          </div>
        </div>

        {/* Body */}
        <div
          style={{
            padding: '52px 28px 28px',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              color: a.to,
              fontSize: '0.7rem',
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            {option.tagline}
          </p>
          <h3
            style={{
              fontFamily: '"Playfair Display", serif',
              color: '#3B2A1F',
              fontSize: 'clamp(1.4rem, 2.4vw, 1.7rem)',
              fontWeight: 700,
              marginBottom: 12,
              lineHeight: 1.2,
            }}
          >
            {option.label}
          </h3>

          {/* Centered ornament */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              justifyContent: 'center',
              marginBottom: 14,
            }}
          >
            <div
              style={{
                flex: '0 0 40px',
                height: 1,
                background: `linear-gradient(90deg, transparent, ${a.mid})`,
              }}
            />
            <span
              style={{
                color: a.mid,
                fontSize: '0.85rem',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              ✦
            </span>
            <div
              style={{
                flex: '0 0 40px',
                height: 1,
                background: `linear-gradient(90deg, ${a.mid}, transparent)`,
              }}
            />
          </div>

          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              color: '#6B5544',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: 24,
              flex: 1,
            }}
          >
            {option.description}
          </p>

          {/* Plan chips */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: 24,
            }}
          >
            {option.plans.map((p) => (
              <span
                key={p.id}
                style={{
                  padding: '6px 14px',
                  background: a.tint,
                  border: `1px solid ${a.ring}`,
                  borderRadius: 999,
                  fontFamily: '"DM Sans", sans-serif',
                  color: a.to,
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                }}
              >
                {p.title.replace(/Vegetarian |Non-Veg /, '').replace(' Menu', '')}
              </span>
            ))}
          </div>

          {/* CTA pill — uses accent color */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              alignSelf: 'center',
              padding: '13px 28px',
              borderRadius: 999,
              background: `linear-gradient(135deg, ${a.from} 0%, ${a.mid} 50%, ${a.to} 100%)`,
              color: '#FFFBF2',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              boxShadow: `0 10px 24px ${a.ring}`,
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
          >
            View Menu <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default function MenuChoiceCards() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 30,
        maxWidth: 920,
        margin: '0 auto',
      }}
    >
      {MENU_OPTIONS.map((option, i) => (
        <Card key={option.key} option={option} index={i} />
      ))}
    </div>
  );
}

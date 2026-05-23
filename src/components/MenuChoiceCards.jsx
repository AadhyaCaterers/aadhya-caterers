import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  VEG_PLANS,
  NONVEG_PLANS,
} from '../data/menuData';

const MENU_OPTIONS = [
  {
    key: 'veg',
    to: '/veg-menu',
    label: 'Vegetarian Menu',
    tagline: 'Pure Vegetarian',
    description:
      'Traditional vegetarian catering with premium presentation, authentic flavours and elegant dining experience.',
    image: '/img6.jpg',
    icon: '🥗',
    plans: VEG_PLANS,

    accent: {
      from: '#8B6B2A',
      mid: '#D4AF37',
      to: '#B68B3A',
      tint: 'rgba(212,175,55,0.10)',
      ring: 'rgba(212,175,55,0.28)',
    },
  },

  {
    key: 'nonveg',
    to: '/non-veg-menu',
    label: 'Non-Veg Menu',
    tagline: 'Premium Non-Veg',
    description:
      'Luxury non-vegetarian catering crafted with rich flavours, live counters and signature premium dishes.',
    image: '/img5.jpg',
    icon: '🍗',
    plans: NONVEG_PLANS,

    accent: {
      from: '#8B6B2A',
      mid: '#D4AF37',
      to: '#B68B3A',
      tint: 'rgba(212,175,55,0.10)',
      ring: 'rgba(212,175,55,0.28)',
    },
  },
];

const Card = ({ option, index }) => {
  const a = option.accent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: 'easeOut',
      }}
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
            'transform 0.4s cubic-bezier(0.2,0.7,0.3,1), box-shadow 0.4s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            'translateY(-8px)';
          e.currentTarget.style.boxShadow =
            '0 26px 54px rgba(139,107,42,0.22)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            'translateY(0)';
          e.currentTarget.style.boxShadow =
            '0 14px 36px rgba(139,107,42,0.12)';
        }}
      >
        {/* IMAGE */}
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
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(rgba(0,0,0,0.18), rgba(0,0,0,0.18))',
            }}
          />

          {/* ICON */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: -34,
              transform: 'translateX(-50%)',

              width: 72,
              height: 72,

              borderRadius: '50%',

              background:
                'linear-gradient(135deg,#B68B3A,#D4AF37)',

              border: '4px solid #fff',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              fontSize: '1.8rem',
            }}
          >
            {option.icon}
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: '52px 28px 28px',
            textAlign: 'center',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: '#B68B3A',
              fontSize: '0.72rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            {option.tagline}
          </p>

          <h3
            style={{
              fontFamily:
                '"Playfair Display", serif',

              color: '#3B2A1F',

              fontSize: '1.7rem',

              marginBottom: 14,
            }}
          >
            {option.label}
          </h3>

          <p
            style={{
              color: '#6B5544',
              lineHeight: 1.8,
              marginBottom: 24,
              flex: 1,
            }}
          >
            {option.description}
          </p>

          {/* PLANS */}
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
                  borderRadius: 999,

                  background:
                    'rgba(212,175,55,0.10)',

                  border:
                    '1px solid rgba(212,175,55,0.24)',

                  color: '#8B6B2A',

                  fontSize: '0.72rem',
                  fontWeight: 700,
                }}
              >
                {p.title}
              </span>
            ))}
          </div>

          {/* BUTTON */}
          <span
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',

              padding: '14px 28px',

              borderRadius: 999,

              background:
                'linear-gradient(135deg,#B68B3A,#D4AF37)',

              color: '#fff',

              fontSize: '0.78rem',
              fontWeight: 700,

              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            View Menu →
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

        gridTemplateColumns:
          'repeat(auto-fit, minmax(280px, 1fr))',

        gap: 30,

        maxWidth: 920,
        margin: '0 auto',
      }}
    >
      {MENU_OPTIONS.map((option, i) => (
        <Card
          key={option.key}
          option={option}
          index={i}
        />
      ))}
    </div>
  );
}
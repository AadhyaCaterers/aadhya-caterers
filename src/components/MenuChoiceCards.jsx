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
    },
  },
];

const Card = ({ option, index }) => {
  const a = option.accent;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
      }}
      style={{
        height: '100%',
      }}
    >
      <Link
        to={option.to}
        style={{
          display: 'flex',
          flexDirection: 'column',

          height: '100%',

          textDecoration: 'none',

          background: '#ffffff',

          borderRadius: 22,

          overflow: 'hidden',

          border:
            '1px solid rgba(139,107,42,0.18)',

          boxShadow:
            '0 14px 36px rgba(139,107,42,0.12)',

          transition: 'all .35s ease',
        }}
      >
        {/* IMAGE */}
        <div
          style={{
            position: 'relative',

            height: 220,

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

              display: 'block',
            }}
          />

          {/* OVERLAY */}
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

              width: 74,
              height: 74,

              borderRadius: '50%',

              background:
                `linear-gradient(135deg, ${a.from}, ${a.mid}, ${a.to})`,

              border: '4px solid #fff',

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

              fontSize: '1.9rem',

              boxShadow:
                '0 10px 24px rgba(0,0,0,0.16)',
            }}
          >
            {option.icon}
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{
            padding: '56px 28px 30px',

            display: 'flex',
            flexDirection: 'column',

            flex: 1,

            textAlign: 'center',
          }}
        >
          {/* TAGLINE */}
          <p
            style={{
              color: '#B68B3A',

              fontSize: '0.72rem',

              letterSpacing: '0.32em',

              textTransform: 'uppercase',

              fontWeight: 700,

              marginBottom: 10,
            }}
          >
            {option.tagline}
          </p>

          {/* TITLE */}
          <h3
            style={{
              fontFamily:
                '"Playfair Display", serif',

              fontSize: '1.8rem',

              color: '#3B2A1F',

              marginBottom: 14,

              lineHeight: 1.2,
            }}
          >
            {option.label}
          </h3>

          {/* DESCRIPTION */}
          <p
            style={{
              color: '#6B5544',

              lineHeight: 1.8,

              marginBottom: 26,

              flex: 1,
            }}
          >
            {option.description}
          </p>

          {/* PLAN TAGS */}
          <div
            style={{
              display: 'flex',

              justifyContent: 'center',

              gap: 8,

              flexWrap: 'wrap',

              marginBottom: 28,
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

              alignItems: 'center',
              justifyContent: 'center',

              alignSelf: 'center',

              padding: '14px 30px',

              borderRadius: 999,

              background:
                `linear-gradient(135deg, ${a.from}, ${a.mid}, ${a.to})`,

              color: '#fff',

              fontSize: '0.78rem',

              fontWeight: 700,

              letterSpacing: '0.18em',

              textTransform: 'uppercase',

              boxShadow:
                '0 10px 24px rgba(212,175,55,0.28)',
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
    <section
      style={{
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          display: 'grid',

          gridTemplateColumns:
            'repeat(auto-fit, minmax(300px, 1fr))',

          gap: 32,

          maxWidth: 1100,

          margin: '0 auto',
        }}
      >
        {MENU_OPTIONS.map((option, index) => (
          <Card
            key={option.key}
            option={option}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
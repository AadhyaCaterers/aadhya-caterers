import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',

        background:
          'linear-gradient(135deg,#FFFDF8 0%,#FFF6E8 35%,#F8E7C8 100%)',
      }}
    >
      {/* LIGHT BACKGROUND GLOW */}
      <div
        style={{
          position: 'absolute',
          inset: 0,

          background:
            'radial-gradient(circle at top right, rgba(212,175,55,0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(192,57,43,0.10), transparent 30%)',
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,

          width: '100%',
          maxWidth: 1280,

          margin: '0 auto',

          padding: '150px 28px 100px',

          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(340px,1fr))',

          alignItems: 'center',

          gap: 60,
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,

              padding: '10px 18px',

              borderRadius: 999,

              background:
                'rgba(255,255,255,0.65)',

              border:
                '1px solid rgba(182,139,58,0.25)',

              backdropFilter: 'blur(10px)',

              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#C0392B',
              }}
            />

            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: '#8B6B2A',

                fontSize: '0.72rem',
                letterSpacing: '0.28em',

                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Premium Catering · Hyderabad
            </span>
          </motion.div>

          {/* WELCOME */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily:
                '"Playfair Display", serif',

              color: '#C0392B',

              fontStyle: 'italic',

              fontSize: '1.3rem',

              marginBottom: 10,
            }}
          >
            Welcome to
          </motion.p>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
            style={{
              fontFamily:
                '"Playfair Display", serif',

              fontSize:
                'clamp(3rem,7vw,5.8rem)',

              lineHeight: 1,

              marginBottom: 24,

              color: '#2B1B12',

              fontWeight: 700,
            }}
          >
            Aadhya{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg,#B68B3A,#E5C77F,#B68B3A)',

                WebkitBackgroundClip: 'text',
                WebkitTextFillColor:
                  'transparent',

                fontStyle: 'italic',
              }}
            >
              Caterers
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily:
                '"Playfair Display", serif',

              fontSize:
                'clamp(1.1rem,2vw,1.5rem)',

              color: '#6B5544',

              lineHeight: 1.6,

              marginBottom: 22,

              maxWidth: 640,
            }}
          >
            Deliciously Crafted · Royally Served ·
            Memorably Celebrated
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              fontFamily: '"DM Sans", sans-serif',

              color: '#6B5544',

              fontSize: '1.02rem',

              lineHeight: 1.9,

              maxWidth: 600,

              marginBottom: 42,
            }}
          >
            Hyderabad's trusted premium catering
            service for weddings, receptions,
            corporate events and traditional Telugu
            celebrations with rich presentation and
            unforgettable taste.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',

              marginBottom: 52,
            }}
          >
            <a
              href={`tel:${PHONE_PRIMARY}`}
              style={{
                textDecoration: 'none',

                background:
                  'linear-gradient(135deg,#B68B3A,#D4AF37)',

                color: '#fff',

                padding: '16px 32px',

                borderRadius: 999,

                fontWeight: 700,

                boxShadow:
                  '0 12px 28px rgba(182,139,58,0.25)',

                fontFamily: '"DM Sans"',
              }}
            >
              📞 Call Now
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',

                background: '#fff',

                border:
                  '1px solid rgba(182,139,58,0.25)',

                color: '#8B6B2A',

                padding: '16px 30px',

                borderRadius: 999,

                fontWeight: 700,

                fontFamily: '"DM Sans"',
              }}
            >
              WhatsApp Us
            </a>

            <Link
              to="/menu"
              style={{
                textDecoration: 'none',

                color: '#6B5544',

                padding: '16px 24px',

                fontWeight: 700,

                fontFamily: '"DM Sans"',
              }}
            >
              View Menu →
            </Link>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',

              gap: 40,

              paddingTop: 26,

              borderTop:
                '1px solid rgba(182,139,58,0.18)',
            }}
          >
            {[
              ['500+', 'Events'],
              ['10K+', 'Guests'],
              ['8+', 'Years'],
              ['100%', 'Hygienic'],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 700,

                    color: '#8B6B2A',

                    fontFamily:
                      '"Playfair Display", serif',
                  }}
                >
                  {num}
                </div>

                <div
                  style={{
                    color: '#8C7763',

                    letterSpacing: '0.18em',

                    textTransform: 'uppercase',

                    fontSize: '0.72rem',

                    marginTop: 6,

                    fontWeight: 700,
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 1,
          }}
          className="hidden-mobile"
          style={{
            position: 'relative',
          }}
        >
          {/* MAIN IMAGE */}
          <div
            style={{
              position: 'relative',

              borderRadius: 26,

              overflow: 'hidden',

              boxShadow:
                '0 30px 80px rgba(139,107,42,0.22)',

              border:
                '6px solid rgba(255,255,255,0.8)',
            }}
          >
            <img
              src="/img7.jpg"
              alt="Luxury Catering"

              style={{
                width: '100%',
                height: 620,

                objectFit: 'cover',

                display: 'block',

                filter:
                  'brightness(1.03) saturate(1.08)',
              }}
            />

            {/* OVERLAY */}
            <div
              style={{
                position: 'absolute',
                inset: 0,

                background:
                  'linear-gradient(180deg,transparent,rgba(0,0,0,0.08))',
              }}
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            style={{
              position: 'absolute',

              bottom: -30,
              left: -20,

              background:
                'rgba(255,255,255,0.92)',

              backdropFilter: 'blur(10px)',

              border:
                '1px solid rgba(182,139,58,0.20)',

              borderRadius: 22,

              padding: '20px 24px',

              boxShadow:
                '0 20px 40px rgba(139,107,42,0.15)',
            }}
          >
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 700,

                color: '#B68B3A',

                fontFamily:
                  '"Playfair Display", serif',
              }}
            >
              8+
            </div>

            <div
              style={{
                color: '#6B5544',

                fontWeight: 700,

                marginTop: 4,
              }}
            >
              Years of Excellence
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LOGO_SRC } from '../data/constants';

export default function Preloader({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 2400);

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        overflow: 'hidden',

        background:
          'linear-gradient(135deg,#FFFDF8 0%,#FFF7EC 45%,#F5E2BD 100%)',
      }}
    >
      {/* BACKGROUND GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        style={{
          position: 'absolute',

          width: '900px',
          height: '900px',

          borderRadius: '50%',

          background:
            'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',

          filter: 'blur(40px)',
        }}
      />

      {/* MAIN CONTENT */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* LOGO */}
        <motion.img
          src={LOGO_SRC}
          alt="Aadhya Caterers"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          style={{
            width: 220,
            maxWidth: '85vw',
            height: 'auto',

            background: '#ffffff',
            padding: '16px',
            borderRadius: '24px',

            boxShadow:
              '0 14px 40px rgba(0,0,0,0.12)',

            marginBottom: 28,
          }}
        />

        {/* BRAND NAME */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          style={{
            fontFamily:
              '"Playfair Display", serif',

            fontSize: 'clamp(2.4rem,5vw,4.5rem)',
            fontWeight: 700,

            color: '#8B6B2A',

            letterSpacing: '0.04em',

            margin: 0,
            textAlign: 'center',

            textShadow:
              '0 4px 18px rgba(139,107,42,0.15)',
          }}
        >
          Aadhya Caterers
        </motion.h1>

        {/* GOLD LINE */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 220,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 1.2,
          }}
          style={{
            height: 4,
            borderRadius: 999,

            marginTop: 28,

            background:
              'linear-gradient(90deg,#B68B3A,#D4AF37,#B68B3A)',

            boxShadow:
              '0 4px 18px rgba(212,175,55,0.35)',
          }}
        />

        {/* TAGLINE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          style={{
            marginTop: 24,

            fontFamily:
              '"Playfair Display", serif',

            color: '#8B6B2A',

            letterSpacing: '0.08em',

            fontSize: '1rem',
            fontWeight: 600,

            textAlign: 'center',
          }}
        >
          Premium Catering Hyderabad
        </motion.p>
      </div>
    </motion.div>
  );
}
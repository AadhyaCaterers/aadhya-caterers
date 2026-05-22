import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

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

      {/* GOLD RING */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',

          width: '650px',
          height: '650px',

          borderRadius: '50%',

          border:
            '1px solid rgba(212,175,55,0.18)',
        }}
      />

      {/* CONTENT */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        style={{
          position: 'relative',
          zIndex: 5,

          textAlign: 'center',
        }}
      >
        {/* LOGO CARD */}
        <motion.div
          initial={{
            scale: 0.85,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          style={{
            background:
              'rgba(255,255,255,0.75)',

            backdropFilter: 'blur(18px)',

            border:
              '1px solid rgba(212,175,55,0.25)',

            borderRadius: '36px',

            padding: '42px',

            boxShadow:
              '0 30px 80px rgba(0,0,0,0.08)',

            marginBottom: '36px',
          }}
        >
          <motion.img
            src="/logo.png"
            alt="Aadhya Caterers"

            animate={{
              y: [0, -6, 0],
            }}

            transition={{
              repeat: Infinity,
              duration: 3,
            }}

            style={{
              width: '300px',
              maxWidth: '80vw',

              display: 'block',
              margin: '0 auto',
            }}
          />
        </motion.div>

        {/* BRAND NAME */}
        <motion.h1
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          style={{
            fontFamily:
              '"Playfair Display", serif',

            fontSize:
              'clamp(2.8rem,5vw,4.5rem)',

            marginBottom: '16px',

            fontWeight: 700,

            lineHeight: 1.1,

            background:
              'linear-gradient(135deg,#B68B3A,#E5C77F,#B68B3A)',

            WebkitBackgroundClip: 'text',
            WebkitTextFillColor:
              'transparent',
          }}
        >
          Aadhya Caterers
        </motion.h1>

        {/* TAGLINE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
          }}
          style={{
            color: '#7A624D',

            fontSize: '0.95rem',

            letterSpacing: '0.35em',

            textTransform: 'uppercase',

            fontWeight: 700,

            marginBottom: '42px',
          }}
        >
          Pure Veg · Perfectly Served
        </motion.p>

        {/* LOADER */}
        <div
          style={{
            width: '280px',
            height: '7px',

            margin: '0 auto',

            borderRadius: '999px',

            overflow: 'hidden',

            background:
              'rgba(182,139,58,0.14)',
          }}
        >
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: '100%',
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
            style={{
              height: '100%',

              borderRadius: '999px',

              background:
                'linear-gradient(90deg,#B68B3A,#E5C77F,#B68B3A)',

              boxShadow:
                '0 0 20px rgba(212,175,55,0.55)',
            }}
          />
        </div>

        {/* LOADING TEXT */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          style={{
            marginTop: '18px',

            color: '#9A7A45',

            fontSize: '0.85rem',

            letterSpacing: '0.22em',

            textTransform: 'uppercase',

            fontWeight: 700,
          }}
        >
          Preparing Premium Experience...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
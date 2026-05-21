import React from 'react';
import { Link } from 'react-router-dom';
import { Ornament } from '../components/animations';

// Friendly 404 — bright cream luxury feel
export default function NotFound() {
  return (
    <section
      className="cream-section"
      style={{
        minHeight: '85vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '160px 24px 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gold rings */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px', width: 320, height: 320,
        borderRadius: '50%', border: '2px solid rgba(201,161,74,0.30)', pointerEvents: 'none',
      }}>
        <div style={{ position: 'absolute', inset: 28, borderRadius: '50%', border: '1px solid rgba(201,161,74,0.18)' }} />
      </div>
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px', width: 280, height: 280,
        borderRadius: '50%', border: '2px solid rgba(192,57,43,0.18)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 640, position: 'relative', zIndex: 1 }}>
        <p className="section-kicker">Oops!</p>
        <h1 style={{
          fontFamily: '"Playfair Display"',
          color: '#3B2A1F',
          fontSize: 'clamp(2.6rem, 7vw, 4.6rem)',
          margin: '8px 0 8px',
          fontWeight: 700,
          lineHeight: 1.1,
        }}>
          404 — Page <span style={{
            background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
            fontStyle: 'italic',
          }}>Not Found</span>
        </h1>
        <Ornament />
        <p style={{
          fontFamily: '"DM Sans"',
          color: '#6B5544',
          fontSize: '1.18rem',
          lineHeight: 1.78,
          marginBottom: 36,
          marginTop: 8,
        }}>
          The page you were looking for doesn't exist or has been moved.
          <br />
          Let's get you back to the feast.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold" style={{ textDecoration: 'none' }}>Back to Home</Link>
          <Link to="/contact" className="btn-outline-gold" style={{ textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}

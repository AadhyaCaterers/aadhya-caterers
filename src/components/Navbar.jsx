import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';
import { NAV_LINKS } from '../data/navLinks';
import { PHONE_PRIMARY } from '../data/constants';

// Bright, cream-luxury sticky navbar with gold accents
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        transition: 'all 0.4s',
      }}
    >
      <TopBar />

      <div
        style={{
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(255, 251, 242, 0.96)'
            : 'rgba(255, 251, 242, 0.88)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: scrolled
            ? '1px solid rgba(139, 107, 42, 0.20)'
            : '1px solid rgba(139, 107, 42, 0.08)',
          boxShadow: scrolled ? '0 10px 32px rgba(139, 107, 42, 0.12)' : 'none',
        }}
      >
        {/* Thin gold accent line at the bottom of the bar */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: 2,
          background: 'linear-gradient(90deg, transparent, rgba(201,161,74,0.35), rgba(201,161,74,0.6), rgba(201,161,74,0.35), transparent)',
          opacity: scrolled ? 1 : 0.6, transition: 'opacity 0.4s',
        }} />

        <div
          style={{
            maxWidth: 1280, margin: '0 auto', padding: '0 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: scrolled ? 76 : 90,
            transition: 'height 0.3s',
          }}
        >
          {/* Logo → Home */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Aadhya Caterers"
              style={{
                height: scrolled ? 56 : 68,
                objectFit: 'contain',
                transition: 'height 0.3s',
                filter: 'drop-shadow(0 4px 14px rgba(139,107,42,0.20))',
              }}
            />
            <div className="hidden-mobile" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: '1.4rem',
                background: 'linear-gradient(135deg, #8B6B2A 0%, #C9A14A 50%, #8B6B2A 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}>
                Aadhya Caterers
              </span>
              <span style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.68rem',
                color: '#C0392B',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                marginTop: 6,
                fontWeight: 600,
              }}>
                Premium · Hyderabad
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden-mobile" style={{ display: 'flex', gap: 32 }}>
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA — desktop */}
          <a href={`tel:${PHONE_PRIMARY}`} className="btn-primary hidden-mobile" style={{ textDecoration: 'none' }}>
            <span>Book Now</span>
          </a>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="show-mobile"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
          >
            <motion.div
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ width: 26, height: 2.5, background: '#8B6B2A', transformOrigin: 'center', borderRadius: 1 }}
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ width: 26, height: 2.5, background: '#8B6B2A', borderRadius: 1 }}
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ width: 18, height: 2.5, background: '#8B6B2A', transformOrigin: 'center', borderRadius: 1 }}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255, 251, 242, 0.98)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                borderTop: '1px solid rgba(139, 107, 42, 0.20)',
                overflow: 'hidden',
              }}
            >
              <div style={{ padding: '24px 28px 30px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                {NAV_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                    style={{ fontSize: '1.18rem', borderBottom: '1px solid rgba(139, 107, 42, 0.15)', paddingBottom: 12 }}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="btn-primary"
                  onClick={closeMenu}
                  style={{ textDecoration: 'none', textAlign: 'center', marginTop: 8 }}
                >
                  <span>Call +91 94940 55353</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

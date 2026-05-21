import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';
import { NAV_LINKS } from '../data/navLinks';
import { PHONE_PRIMARY } from '../data/constants';

// Sticky navbar with active route highlighting + mobile drawer
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

  // Close drawer whenever route changes
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
          transition: 'all 0.35s ease',
          background: scrolled
            ? 'rgba(26,14,2,0.97)'
            : 'linear-gradient(to bottom, rgba(26,14,2,0.92), rgba(26,14,2,0.55))',
          backdropFilter: scrolled ? 'blur(10px)' : 'blur(4px)',
          borderBottom: scrolled ? '1px solid rgba(212,160,23,0.25)' : '1px solid rgba(212,160,23,0.08)',
          boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.45)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 1280, margin: '0 auto', padding: '0 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            height: scrolled ? 70 : 82,
            transition: 'height 0.3s',
          }}
        >
          {/* Logo → Home */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img
              src="/logo.png"
              alt="Aadhya Caterers"
              style={{
                height: scrolled ? 50 : 60,
                objectFit: 'contain',
                transition: 'height 0.3s',
                filter: 'drop-shadow(0 2px 10px rgba(212,160,23,0.25))',
              }}
            />
            <div className="hidden-mobile" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.15rem', color: '#d4a017', fontWeight: 700, letterSpacing: '0.04em' }}>
                Aadhya Caterers
              </span>
              <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '0.72rem', color: 'rgba(253,246,227,0.65)', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 4 }}>
                Premium Catering
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden-mobile" style={{ display: 'flex', gap: 30 }}>
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
          <a href={`tel:${PHONE_PRIMARY}`} className="btn-gold hidden-mobile" style={{ textDecoration: 'none' }}>
            Book Now
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
              style={{ width: 26, height: 2, background: '#d4a017', transformOrigin: 'center', borderRadius: 1 }}
            />
            <motion.div
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ width: 26, height: 2, background: '#d4a017', borderRadius: 1 }}
            />
            <motion.div
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{ width: 18, height: 2, background: '#d4a017', transformOrigin: 'center', borderRadius: 1 }}
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
                background: 'rgba(14,7,0,0.98)',
                borderTop: '1px solid rgba(212,160,23,0.25)',
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
                    style={{ fontSize: '1.18rem', borderBottom: '1px solid rgba(212,160,23,0.1)', paddingBottom: 12 }}
                  >
                    {l.label}
                  </NavLink>
                ))}
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="btn-gold"
                  onClick={closeMenu}
                  style={{ textDecoration: 'none', textAlign: 'center', marginTop: 8 }}
                >
                  Call +91 94940 55353
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

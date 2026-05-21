import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
        background: scrolled
          ? 'rgba(26,14,2,0.97)'
          : 'linear-gradient(to bottom, rgba(26,14,2,0.85), rgba(26,14,2,0.4))',
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(2px)',
        borderBottom: scrolled ? '1px solid rgba(212,160,23,0.2)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

        {/* Logo → Home */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="Aadhya Caterers" style={{ height: 52, objectFit: 'contain' }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden-mobile" style={{ display: 'flex', gap: 28 }}>
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
          Call Now
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
            style={{ width: 24, height: 2, background: '#d4a017', transformOrigin: 'center', borderRadius: 1 }}
          />
          <motion.div
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ width: 24, height: 2, background: '#d4a017', borderRadius: 1 }}
          />
          <motion.div
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
            style={{ width: 16, height: 2, background: '#d4a017', transformOrigin: 'center', borderRadius: 1 }}
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
            style={{ background: 'rgba(26,14,2,0.98)', borderTop: '1px solid rgba(212,160,23,0.2)', overflow: 'hidden' }}
          >
            <div style={{ padding: '20px 24px 28px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                  style={{ fontSize: '1.15rem' }}
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
                📞 Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

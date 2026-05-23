import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';
import { NAV_LINKS } from '../data/navLinks';
import { PHONE_PRIMARY, LOGO_SRC } from '../data/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
      }}
    >
      <TopBar />

      <div
        style={{
          background: scrolled
            ? 'rgba(255,251,242,0.98)'
            : 'rgba(255,251,242,0.94)',

          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',

          borderBottom:
            '1px solid rgba(201,161,74,0.14)',

          boxShadow: scrolled
            ? '0 10px 30px rgba(139,107,42,0.08)'
            : 'none',

          transition: 'all .3s ease',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 28px',

            height: scrolled ? 72 : 82,

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',

            transition: 'all .3s ease',
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              textDecoration: 'none',
              padding: '4px 0',
            }}
          >
            <img
              src={LOGO_SRC}
              alt="Aadhya Caterers"
              className="brand-logo"
              style={{
                height: scrolled ? 52 : 64,
                width: 'auto',
                transition: 'height .3s ease, padding .3s ease',
              }}
            />

            <div
              className="hidden-mobile"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  fontFamily:
                    '"Playfair Display", serif',

                  fontSize: '1.9rem',
                  fontWeight: 700,

                  background:
                    'linear-gradient(135deg,#8B6B2A,#D4AF37,#8B6B2A)',

                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',

                  letterSpacing: '0.01em',
                }}
              >
                Aadhya Caterers
              </span>

              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.72rem',
                  color: '#B7472A',

                  letterSpacing: '0.30em',
                  textTransform: 'uppercase',

                  marginTop: 10,
                  fontWeight: 700,
                }}
              >
                Premium · Hyderabad
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden-mobile"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 34,
            }}
          >
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `nav-link${
                    isActive ? ' nav-link-active' : ''
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={
              menuOpen ? 'Close menu' : 'Open menu'
            }
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',

              padding: 8,

              display: 'flex',
              flexDirection: 'column',
              gap: 5,
            }}
          >
            <motion.div
              animate={
                menuOpen
                  ? { rotate: 45, y: 7 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                width: 26,
                height: 2.5,
                background: '#8B6B2A',
                borderRadius: 10,
              }}
            />

            <motion.div
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              style={{
                width: 26,
                height: 2.5,
                background: '#8B6B2A',
                borderRadius: 10,
              }}
            />

            <motion.div
              animate={
                menuOpen
                  ? { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0 }
              }
              style={{
                width: 26,
                height: 2.5,
                background: '#8B6B2A',
                borderRadius: 10,
              }}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              style={{
                overflow: 'hidden',

                background:
                  'rgba(255,251,242,0.98)',

                borderTop:
                  '1px solid rgba(139,107,42,0.14)',
              }}
            >
              <div
                style={{
                  padding: '24px',

                  display: 'flex',
                  flexDirection: 'column',

                  gap: 18,
                }}
              >
                {NAV_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}

                    onClick={closeMenu}

                    className={({ isActive }) =>
                      `nav-link${
                        isActive
                          ? ' nav-link-active'
                          : ''
                      }`
                    }

                    style={{
                      fontSize: '1.1rem',

                      paddingBottom: 12,

                      borderBottom:
                        '1px solid rgba(139,107,42,0.12)',
                    }}
                  >
                    {l.label}
                  </NavLink>
                ))}

                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  className="btn-primary"
                  onClick={closeMenu}
                  style={{
                    textDecoration: 'none',
                    textAlign: 'center',

                    background:
                      'linear-gradient(135deg,#B68B3A,#D4AF37)',

                    padding: '14px 20px',

                    borderRadius: 999,

                    color: '#fff',

                    fontWeight: 700,

                    marginTop: 10,
                  }}
                >
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, Ornament } from '../components/animations';
import {
  VEG_CATEGORIES,
  NONVEG_CATEGORIES,
  WEDDING_PACKAGES,
} from '../data/menu';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// ──────────────────────────────────────────────────────────────────
// PREMIUM MENU CATEGORY CARD
// ──────────────────────────────────────────────────────────────────
const CategoryCard = ({ cat, onView, index }) => (
  <motion.button
    layout
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: 'easeOut' }}
    onClick={() => onView(cat)}
    aria-label={`View ${cat.name} menu`}
    style={{
      position: 'relative',
      background: '#FFFFFF',
      borderRadius: 18,
      overflow: 'hidden',
      border: '1px solid rgba(139,107,42,0.20)',
      boxShadow: '0 10px 28px rgba(139,107,42,0.12)',
      cursor: 'pointer',
      textAlign: 'left',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.5s cubic-bezier(0.2,0.7,0.3,1), box-shadow 0.5s, border-color 0.5s',
      width: '100%',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.borderColor = 'rgba(201,161,74,0.75)';
      e.currentTarget.style.boxShadow =
        '0 22px 50px rgba(139,107,42,0.28), 0 0 0 2px rgba(201,161,74,0.30)';
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'scale(1.10)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'rgba(139,107,42,0.20)';
      e.currentTarget.style.boxShadow = '0 10px 28px rgba(139,107,42,0.12)';
      const img = e.currentTarget.querySelector('img');
      if (img) img.style.transform = 'scale(1)';
    }}
  >
    {/* IMAGE BLOCK */}
    <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3' }}>
      <img
        src={cat.img}
        alt={cat.name}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.7s ease',
          filter: 'saturate(1.10) contrast(1.04)',
        }}
      />
      {/* Warm bottom gradient for legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background:
          'linear-gradient(to top, rgba(59,42,31,0.55) 0%, rgba(59,42,31,0.10) 40%, rgba(255,251,242,0.20) 100%)',
        pointerEvents: 'none',
      }} />
      {/* Top-left icon medallion */}
      <div style={{
        position: 'absolute', top: 16, left: 16,
        width: 52, height: 52, borderRadius: '50%',
        background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.45rem',
        boxShadow: '0 8px 18px rgba(139,107,42,0.40)',
        border: '2px solid rgba(255,251,242,0.85)',
      }}>
        {cat.icon}
      </div>
      {/* Bottom-right item count chip */}
      <div style={{
        position: 'absolute', bottom: 14, right: 14,
        background: 'rgba(255,251,242,0.94)',
        color: '#8B6B2A',
        padding: '5px 14px',
        fontFamily: '"DM Sans", sans-serif',
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        borderRadius: 999,
        border: '1px solid rgba(139,107,42,0.30)',
      }}>
        {cat.items.length} Items
      </div>
    </div>

    {/* CONTENT BLOCK */}
    <div style={{ padding: '24px 26px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
      <h3 style={{
        fontFamily: '"Playfair Display", serif',
        color: '#3B2A1F',
        fontSize: '1.32rem',
        fontWeight: 700,
        marginBottom: 10,
        lineHeight: 1.2,
      }}>
        {cat.name}
      </h3>
      <div style={{
        width: 44, height: 2,
        background: 'linear-gradient(90deg, #C9A14A, transparent)',
        marginBottom: 14,
      }} />
      <p style={{
        fontFamily: '"DM Sans", sans-serif',
        color: '#6B5544',
        fontSize: '0.94rem',
        lineHeight: 1.7,
        marginBottom: 16,
      }}>
        {cat.desc}
      </p>

      {/* Sample item chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
        {cat.items.slice(0, 3).map((it) => (
          <span key={it} style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.74rem',
            color: '#8B6B2A',
            background: 'rgba(201,161,74,0.10)',
            border: '1px solid rgba(201,161,74,0.30)',
            padding: '4px 10px',
            borderRadius: 999,
          }}>
            {it}
          </span>
        ))}
        {cat.items.length > 3 && (
          <span style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.74rem',
            color: '#C0392B',
            padding: '4px 10px',
            fontWeight: 700,
          }}>
            +{cat.items.length - 3} more
          </span>
        )}
      </div>

      <span
        style={{
          marginTop: 'auto',
          fontFamily: '"DM Sans", sans-serif',
          color: '#C0392B',
          fontSize: '0.78rem',
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        View Full Menu <span aria-hidden>→</span>
      </span>
    </div>
  </motion.button>
);

// ──────────────────────────────────────────────────────────────────
// CATEGORY ITEMS MODAL
// ──────────────────────────────────────────────────────────────────
const CategoryModal = ({ cat, onClose }) => {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!cat) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(59,42,31,0.55)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(180deg, #FFFBF2 0%, #FFF7E5 100%)',
          maxWidth: 640, width: '100%',
          maxHeight: '90vh', overflow: 'auto',
          borderRadius: 18,
          border: '1.5px solid rgba(201,161,74,0.45)',
          boxShadow: '0 30px 80px rgba(59,42,31,0.45)',
          position: 'relative',
        }}
      >
        {/* Banner image */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
          <img src={cat.img} alt={cat.name} style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'saturate(1.10) contrast(1.04)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(255,251,242,1) 0%, rgba(255,251,242,0.30) 50%, transparent 100%)',
          }} />
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: 14, right: 14,
              width: 38, height: 38,
              borderRadius: '50%',
              background: 'rgba(255,251,242,0.96)',
              border: '1px solid rgba(139,107,42,0.30)',
              color: '#8B6B2A',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 700,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.20)',
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ padding: '0 36px 32px', marginTop: -40, position: 'relative' }}>
          {/* Icon medallion */}
          <div style={{
            width: 76, height: 76, borderRadius: '50%',
            background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem',
            boxShadow: '0 12px 26px rgba(139,107,42,0.35)',
            border: '4px solid #FFFBF2',
            margin: '0 auto 16px',
          }}>
            {cat.icon}
          </div>

          <h2 style={{
            fontFamily: '"Playfair Display", serif',
            color: '#3B2A1F',
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: 10,
          }}>
            {cat.name}
          </h2>

          <div className="ornament-divider" style={{ maxWidth: 200 }}>
            <span className="ornament-symbol">✦ ❀ ✦</span>
          </div>

          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            color: '#6B5544',
            fontSize: '1rem',
            lineHeight: 1.78,
            textAlign: 'center',
            marginBottom: 26,
          }}>
            {cat.desc}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 10,
          }}>
            {cat.items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(201,161,74,0.25)',
                  borderRadius: 8,
                }}
              >
                <span style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E5C77F, #C9A14A)',
                  color: '#3B2A1F',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  ✦
                </span>
                <span style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: '#3B2A1F',
                  fontSize: '0.94rem',
                  fontWeight: 600,
                }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/contact" onClick={onClose} className="btn-gold" style={{ textDecoration: 'none' }}>
              <span>Customise This Menu</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ──────────────────────────────────────────────────────────────────
// WEDDING PACKAGE CARD
// ──────────────────────────────────────────────────────────────────
const PackageCard = ({ pkg, index }) => {
  const isPopular = pkg.popular;

  // Tier-specific gold accent
  const accents = {
    Silver: { from: '#E8E2D2', mid: '#C9C4B6', to: '#9C9685', text: '#3B2A1F' },
    Gold:   { from: '#E5C77F', mid: '#C9A14A', to: '#8B6B2A', text: '#3B2A1F' },
    Royal:  { from: '#F2D795', mid: '#B8923D', to: '#6B1F1F', text: '#FFFBF2' },
  };
  const a = accents[pkg.tier] || accents.Gold;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      style={{
        position: 'relative',
        background: '#FFFFFF',
        borderRadius: 20,
        overflow: 'hidden',
        border: isPopular
          ? '2px solid rgba(201,161,74,0.65)'
          : '1px solid rgba(139,107,42,0.20)',
        boxShadow: isPopular
          ? '0 24px 56px rgba(201,161,74,0.30), 0 0 0 1px rgba(201,161,74,0.30)'
          : '0 14px 36px rgba(139,107,42,0.15)',
        transform: isPopular ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'transform 0.4s, box-shadow 0.4s',
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* "MOST POPULAR" ribbon */}
      {isPopular && (
        <div style={{
          position: 'absolute', top: 16, right: -36,
          background: 'linear-gradient(135deg, #C0392B, #962E22)',
          color: '#FFFBF2',
          padding: '6px 44px',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.68rem',
          fontWeight: 700,
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          transform: 'rotate(40deg)',
          boxShadow: '0 6px 14px rgba(192,57,43,0.40)',
          zIndex: 3,
        }}>
          ★ Most Loved
        </div>
      )}

      {/* Image header */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <img
          src={pkg.img}
          alt={pkg.label}
          loading="lazy"
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
            filter: 'saturate(1.10) contrast(1.04)',
          }}
        />
        {/* Tier-coloured gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(180deg, transparent 0%, ${a.to}55 60%, ${a.to}DD 100%)`,
        }} />
        {/* Tier badge */}
        <div style={{
          position: 'absolute', bottom: 14, left: 18,
          padding: '8px 18px',
          background: `linear-gradient(135deg, ${a.from} 0%, ${a.mid} 50%, ${a.to} 100%)`,
          color: a.text,
          fontFamily: '"Playfair Display", serif',
          fontSize: '0.92rem',
          fontWeight: 700,
          letterSpacing: '0.20em',
          textTransform: 'uppercase',
          borderRadius: 6,
          border: '1px solid rgba(255,251,242,0.45)',
          boxShadow: '0 6px 14px rgba(0,0,0,0.18)',
        }}>
          {pkg.tier}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 30px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          color: '#3B2A1F',
          fontSize: '1.6rem',
          fontWeight: 700,
          marginBottom: 6,
          lineHeight: 1.15,
        }}>
          {pkg.label}
        </h3>
        <p style={{
          fontFamily: '"Playfair Display", serif',
          fontStyle: 'italic',
          color: '#C0392B',
          fontSize: '0.95rem',
          fontWeight: 500,
          marginBottom: 14,
        }}>
          {pkg.tagline}
        </p>

        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'linear-gradient(135deg, rgba(201,161,74,0.12), rgba(229,199,127,0.18))',
          border: '1px solid rgba(201,161,74,0.35)',
          borderRadius: 8,
          marginBottom: 18,
          alignSelf: 'flex-start',
        }}>
          <span style={{
            fontFamily: '"DM Sans", sans-serif',
            color: '#8B6B2A',
            fontSize: '0.92rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}>
            {pkg.pricing}
          </span>
        </div>

        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          color: '#6B5544',
          fontSize: '0.94rem',
          lineHeight: 1.78,
          marginBottom: 22,
        }}>
          {pkg.description}
        </p>

        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(201,161,74,0.40), transparent)',
          marginBottom: 20,
        }} />

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 26px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {pkg.features.map((f) => (
            <li key={f} style={{
              display: 'flex', gap: 12, alignItems: 'flex-start',
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.92rem',
              color: '#3B2A1F',
              lineHeight: 1.55,
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: 'linear-gradient(135deg, #E5C77F, #C9A14A, #8B6B2A)',
                color: '#FFFBF2',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700,
                flexShrink: 0, marginTop: 1,
                boxShadow: '0 4px 8px rgba(139,107,42,0.25)',
              }}>
                ✓
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 10, marginTop: 'auto', flexWrap: 'wrap' }}>
          <Link
            to="/contact"
            className={isPopular ? 'btn-gold' : 'btn-outline-gold'}
            style={{
              textDecoration: 'none',
              flex: '1 1 auto',
              minWidth: 130,
              fontSize: '0.74rem',
              padding: isPopular ? '13px 22px' : '12px 22px',
              textAlign: 'center',
            }}
          >
            Book This Plan
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
            style={{
              textDecoration: 'none',
              minWidth: 60,
              fontSize: '0.74rem',
              padding: '12px 18px',
              textAlign: 'center',
            }}
            aria-label="Enquire on WhatsApp"
          >
            💬
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ──────────────────────────────────────────────────────────────────
// MAIN MENU PAGE
// ──────────────────────────────────────────────────────────────────
export default function Menu() {
  const [activeTab, setActiveTab] = useState('veg'); // 'veg' | 'nonveg'
  const [openCat, setOpenCat]     = useState(null);

  const categories = useMemo(
    () => (activeTab === 'veg' ? VEG_CATEGORIES : NONVEG_CATEGORIES),
    [activeTab]
  );

  const handleViewCategory = useCallback((cat) => setOpenCat(cat), []);
  const handleCloseModal   = useCallback(() => setOpenCat(null), []);

  return (
    <>
      <PageBanner
        tagline="Premium Wedding Catering"
        title="Our Wedding Catering Plans"
        subtitle="Carefully curated vegetarian and non-vegetarian menus crafted for unforgettable celebrations across Hyderabad."
        image="/img7.jpg"
        height={460}
      />

      {/* ── INTRO + STATS (cream) ─────────────────────────────────── */}
      <section className="cream-section" style={{ padding: '90px 0 30px', position: 'relative' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <FadeUp>
            <p className="section-kicker">A Royal Catering Experience</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.95rem, 3.6vw, 2.9rem)', marginTop: 4 }}>
              Premium Menus &amp; <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Wedding Plans</span>
            </h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 740, margin: '14px auto 0', fontSize: '1.12rem' }}>
              Carefully curated vegetarian and non-vegetarian menus, multi-cuisine spreads and live counter showcases — designed with the elegance of a royal Hyderabadi wedding feast.
            </p>
          </FadeUp>

          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 16,
            marginTop: 50,
            maxWidth: 880,
            marginInline: 'auto',
          }}>
            {[
              ['100+', 'Menu Items'],
              ['17',   'Categories'],
              ['3',    'Wedding Tiers'],
              ['100%', 'Custom Menus'],
            ].map(([num, label]) => (
              <div key={label} className="cream-card" style={{
                textAlign: 'center', padding: '22px 20px',
                background: 'linear-gradient(180deg, #FFFBF2, #FFFFFF)',
              }}>
                <div className="stat-number" style={{ fontSize: '2.05rem', marginBottom: 6 }}>{num}</div>
                <p style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: '#6B5544',
                  fontSize: '0.74rem',
                  letterSpacing: '0.20em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VEG / NON-VEG TAB SWITCHER (sticky) ───────────────────── */}
      <div style={{
        position: 'sticky',
        top: 76,
        zIndex: 60,
        background: 'rgba(255, 251, 242, 0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderTop: '1px solid rgba(201,161,74,0.18)',
        borderBottom: '1px solid rgba(201,161,74,0.30)',
        padding: '20px 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'center' }}>
          <div
            role="tablist"
            aria-label="Menu type"
            style={{
              position: 'relative',
              display: 'inline-flex',
              padding: 6,
              background: 'linear-gradient(135deg, #FFFBF2, #FBEFD6)',
              border: '1.5px solid rgba(201,161,74,0.40)',
              borderRadius: 999,
              boxShadow: '0 10px 24px rgba(139,107,42,0.18)',
            }}
          >
            {/* Sliding gold indicator */}
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              style={{
                position: 'absolute',
                top: 6, bottom: 6,
                left: activeTab === 'veg' ? 6 : '50%',
                width: 'calc(50% - 6px)',
                background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
                borderRadius: 999,
                boxShadow:
                  '0 8px 18px rgba(201,161,74,0.55), inset 0 1px 0 rgba(255,251,242,0.50)',
                zIndex: 0,
              }}
            />
            {[
              { id: 'veg',    label: 'Veg Menu',     icon: '🌿' },
              { id: 'nonveg', label: 'Non-Veg Menu', icon: '🍗' },
            ].map((t) => {
              const active = t.id === activeTab;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '13px 32px',
                    background: 'transparent',
                    border: 'none',
                    borderRadius: 999,
                    cursor: 'pointer',
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.86rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: active ? '#3B2A1F' : '#6B5544',
                    transition: 'color 0.4s',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    minWidth: 160,
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.05rem' }}>{t.icon}</span>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── CATEGORY CARDS (beige) ────────────────────────────────── */}
      <section className="section-pad beige-section" style={{ paddingTop: 60 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              style={{ textAlign: 'center', marginBottom: 50 }}
            >
              <p className="section-kicker">{activeTab === 'veg' ? 'Vegetarian Selections' : 'Non-Vegetarian Selections'}</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', marginTop: 4 }}>
                {activeTab === 'veg' ? 'Veg Menu ' : 'Non-Veg Menu '}
                <span style={{
                  background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                  WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                }}>Categories</span>
              </h2>
              <div className="ornament-divider" style={{ maxWidth: 200 }}>
                <span className="ornament-symbol">✦</span>
              </div>
              <p style={{
                fontFamily: '"DM Sans", sans-serif',
                color: '#6B5544',
                fontSize: '1.04rem',
                maxWidth: 660,
                margin: '12px auto 0',
                lineHeight: 1.78,
              }}>
                Tap any category to see the full curated list of dishes — every menu can be customised to your wedding theme and guest count.
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`grid-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="premium-cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: 26,
              }}
            >
              {categories.map((cat, i) => (
                <CategoryCard
                  key={`${activeTab}-${cat.name}`}
                  cat={cat}
                  onView={handleViewCategory}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <FadeUp style={{ textAlign: 'center', marginTop: 56 }}>
            <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none', marginRight: 10 }}>
              Request Custom Menu
            </Link>
            <a
              href="/menu.pdf"
              className="btn-outline-gold"
              style={{ textDecoration: 'none' }}
              download
            >
              Download Full Menu
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ── WEDDING PACKAGES (cream) ──────────────────────────────── */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="section-kicker">Crafted For Every Celebration</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.95rem, 3.6vw, 2.9rem)', marginTop: 4 }}>
              Popular Wedding <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Packages</span>
            </h2>
            <Ornament />
            <p className="section-subtitle" style={{ maxWidth: 720, margin: '14px auto 0', fontSize: '1.1rem' }}>
              Three carefully crafted wedding catering tiers — each with a complete experience, customisable to your event scale and theme.
            </p>
          </FadeUp>

          <div
            className="premium-cards-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: 30,
              alignItems: 'stretch',
            }}
          >
            {WEDDING_PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.tier} pkg={pkg} index={i} />
            ))}
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: 56 }}>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              color: '#6B5544',
              fontSize: '1rem',
              maxWidth: 640,
              margin: '0 auto 24px',
              lineHeight: 1.7,
            }}>
              Need a fully personalised package? Our team will craft a bespoke catering plan around your venue, theme and budget.
            </p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${PHONE_PRIMARY}`} className="btn-primary" style={{ textDecoration: 'none' }}>
                <span>📞 &nbsp;Speak to Our Team</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none' }}>
                Chat on WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection
        title="Let's Curate Your Dream Wedding Menu"
        subtitle="From welcome drinks to grand desserts — every dish, every detail, designed around your celebration."
      />

      {/* ── CATEGORY ITEMS MODAL ──────────────────────────────────── */}
      <AnimatePresence>
        {openCat && <CategoryModal cat={openCat} onClose={handleCloseModal} />}
      </AnimatePresence>

      {/* ── MOBILE: convert grid to horizontal carousel ───────────── */}
      <style>{`
        @media (max-width: 700px) {
          .premium-cards-grid {
            grid-auto-flow: column !important;
            grid-auto-columns: 80% !important;
            grid-template-columns: unset !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            padding-bottom: 18px;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            margin: 0 -24px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .premium-cards-grid::-webkit-scrollbar { display: none; }
          .premium-cards-grid > * { scroll-snap-align: start; }
        }
      `}</style>
    </>
  );
}

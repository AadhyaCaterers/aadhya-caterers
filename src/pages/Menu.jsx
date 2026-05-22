import React, { useState, useMemo } from 'react';
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

// Anchor-friendly slug for category navigation
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// ──────────────────────────────────────────────────────────────────
// CATEGORY SECTION — typography only (NO food images).
// Elegant header + centered gold ornament + italic description
// + 2-column item list with dashed gold separators.
// ──────────────────────────────────────────────────────────────────
const CategorySection = ({ cat, index }) => (
  <motion.section
    id={`cat-${slug(cat.name)}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.25), ease: 'easeOut' }}
    style={{ marginBottom: 64, scrollMarginTop: 200 }}
  >
    {/* HEADER ROW — small gold icon + title + counter */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 16,
    }}>
      <div style={{
        width: 52, height: 52,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.4rem',
        boxShadow: '0 8px 18px rgba(139,107,42,0.30)',
        border: '2px solid #FFFBF2',
        flexShrink: 0,
      }}>
        {cat.icon}
      </div>
      <div style={{ flex: '1 1 200px', minWidth: 0 }}>
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          color: '#3B2A1F',
          fontSize: 'clamp(1.5rem, 2.6vw, 1.95rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.005em',
          marginBottom: 4,
        }}>
          {cat.name}
        </h3>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          color: '#8C7763',
          fontSize: '0.72rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          fontWeight: 700,
        }}>
          {cat.items.length} Curated Selections
        </p>
      </div>
    </div>

    {/* CENTERED GOLD RULE WITH ✦ */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 18,
    }}>
      <div style={{
        flex: 1, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(139,107,42,0.55) 30%, rgba(139,107,42,0.55) 70%, transparent)',
      }} />
      <span style={{
        color: '#8B6B2A',
        fontSize: '0.95rem',
        letterSpacing: '0.4em',
        fontFamily: '"Playfair Display", serif',
      }}>
        ✦
      </span>
      <div style={{
        flex: 1, height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(139,107,42,0.55) 30%, rgba(139,107,42,0.55) 70%, transparent)',
      }} />
    </div>

    {/* ITALIC DESCRIPTION */}
    <p style={{
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      color: '#6B5544',
      fontSize: 'clamp(1rem, 1.5vw, 1.10rem)',
      lineHeight: 1.7,
      marginBottom: 32,
      textAlign: 'center',
      maxWidth: 760,
      marginInline: 'auto',
    }}>
      {cat.desc}
    </p>

    {/* ITEMS — 2-column elegant list with dashed gold separators */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      columnGap: 56,
      rowGap: 0,
      maxWidth: 920,
      marginInline: 'auto',
    }}>
      {cat.items.map((item) => (
        <div
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '13px 4px',
            borderBottom: '1px dashed rgba(139,107,42,0.28)',
          }}
        >
          <span style={{
            color: '#C9A14A',
            fontSize: '0.85rem',
            flexShrink: 0,
            fontFamily: '"Playfair Display", serif',
          }}>
            ✦
          </span>
          <span style={{
            fontFamily: '"DM Sans", sans-serif',
            color: '#3B2A1F',
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.005em',
          }}>
            {item}
          </span>
        </div>
      ))}
    </div>
  </motion.section>
);

// ──────────────────────────────────────────────────────────────────
// WEDDING PACKAGE CARD — kept (tier visuals, not food spam).
// Replaced food image header with a gold gradient tier band.
// ──────────────────────────────────────────────────────────────────
const PackageCard = ({ pkg, index }) => {
  const isPopular = pkg.popular;

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
          : '1px solid rgba(139,107,42,0.22)',
        boxShadow: isPopular
          ? '0 24px 56px rgba(201,161,74,0.30), 0 0 0 1px rgba(201,161,74,0.30)'
          : '0 14px 36px rgba(139,107,42,0.15)',
        transform: isPopular ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'transform 0.4s, box-shadow 0.4s',
        display: 'flex', flexDirection: 'column',
      }}
    >
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

      {/* Tier-coloured header band — decorative pattern, not a food image */}
      <div style={{
        height: 110,
        position: 'relative',
        background: `linear-gradient(135deg, ${a.from} 0%, ${a.mid} 50%, ${a.to} 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 18px, rgba(255,251,242,0.10) 18px, rgba(255,251,242,0.10) 36px)',
        }} />
        <div style={{
          position: 'relative', zIndex: 1,
          padding: '8px 22px',
          background: 'rgba(255,251,242,0.94)',
          color: a.to,
          fontFamily: '"Playfair Display", serif',
          fontSize: '0.95rem',
          fontWeight: 700,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          borderRadius: 4,
          border: '1px solid rgba(139,107,42,0.30)',
          boxShadow: '0 6px 14px rgba(0,0,0,0.10)',
        }}>
          {pkg.tier} Tier
        </div>
      </div>

      <div style={{ padding: '32px 30px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{
          fontFamily: '"Playfair Display", serif',
          color: '#3B2A1F',
          fontSize: '1.65rem',
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
          fontSize: '0.98rem',
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

  const categories = useMemo(
    () => (activeTab === 'veg' ? VEG_CATEGORIES : NONVEG_CATEGORIES),
    [activeTab]
  );

  // Smooth-scroll a category section into view
  const jumpTo = (name) => {
    const el = document.getElementById(`cat-${slug(name)}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

      {/* ── VEG / NON-VEG STICKY TAB SWITCHER ─────────────────────── */}
      <div style={{
        position: 'sticky',
        top: 76,
        zIndex: 60,
        background: 'rgba(255, 251, 242, 0.94)',
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
                boxShadow: '0 8px 18px rgba(201,161,74,0.55), inset 0 1px 0 rgba(255,251,242,0.50)',
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

      {/* ── MENU BOOKLET (cream) — typography-driven, no images ──── */}
      <section className="cream-section" style={{ padding: '60px 0 100px', position: 'relative' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'linear-gradient(180deg, #FFFBF2 0%, #FFFFFF 70%, #FFFBF2 100%)',
                border: '1.5px solid rgba(139,107,42,0.30)',
                borderRadius: 20,
                padding: 'clamp(40px, 6vw, 80px) clamp(28px, 5vw, 64px)',
                boxShadow: '0 24px 60px rgba(139,107,42,0.18)',
                position: 'relative',
              }}
            >
              {/* Decorative gold corners */}
              <div style={{ position: 'absolute', top: 18, left: 18, width: 26, height: 26, borderTop: '1.5px solid #8B6B2A', borderLeft: '1.5px solid #8B6B2A', opacity: 0.55, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', top: 18, right: 18, width: 26, height: 26, borderTop: '1.5px solid #8B6B2A', borderRight: '1.5px solid #8B6B2A', opacity: 0.55, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 18, left: 18, width: 26, height: 26, borderBottom: '1.5px solid #8B6B2A', borderLeft: '1.5px solid #8B6B2A', opacity: 0.55, pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: 18, right: 18, width: 26, height: 26, borderBottom: '1.5px solid #8B6B2A', borderRight: '1.5px solid #8B6B2A', opacity: 0.55, pointerEvents: 'none' }} />

              {/* MENU TITLE */}
              <header style={{ textAlign: 'center', marginBottom: 36 }}>
                <p style={{
                  fontFamily: '"DM Sans", sans-serif',
                  color: '#C0392B',
                  fontSize: '0.74rem',
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: 10,
                }}>
                  {activeTab === 'veg' ? 'Pure Vegetarian Selection' : 'Non-Vegetarian Selection'}
                </p>
                <h2 style={{
                  fontFamily: '"Playfair Display", serif',
                  color: '#3B2A1F',
                  fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  marginBottom: 12,
                }}>
                  {activeTab === 'veg' ? 'Veg Menu' : 'Non-Veg Menu'}
                </h2>
                <Ornament />
                <p style={{
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  color: '#6B5544',
                  fontSize: 'clamp(1rem, 1.5vw, 1.12rem)',
                  marginTop: 10,
                  maxWidth: 640,
                  marginInline: 'auto',
                  lineHeight: 1.7,
                }}>
                  {activeTab === 'veg'
                    ? 'A graceful spread of authentic Telugu, North Indian and South Indian vegetarian classics.'
                    : 'Royal Hyderabadi & Mughlai non-veg specialties with signature live counters and BBQ.'}
                </p>
              </header>

              {/* QUICK-JUMP CHIPS — table of contents */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 8,
                margin: '0 auto 50px',
                paddingBottom: 28,
                borderBottom: '1px dashed rgba(139,107,42,0.30)',
                maxWidth: 880,
              }}>
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => jumpTo(cat.name)}
                    style={{
                      padding: '7px 16px',
                      background: 'rgba(201,161,74,0.06)',
                      border: '1px solid rgba(139,107,42,0.30)',
                      color: '#8B6B2A',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      borderRadius: 999,
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #E5C77F, #C9A14A)';
                      e.currentTarget.style.color = '#3B2A1F';
                      e.currentTarget.style.borderColor = '#8B6B2A';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(201,161,74,0.06)';
                      e.currentTarget.style.color = '#8B6B2A';
                      e.currentTarget.style.borderColor = 'rgba(139,107,42,0.30)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ fontSize: '0.86rem' }}>{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* CATEGORY SECTIONS — typography only */}
              <div>
                {categories.map((cat, i) => (
                  <CategorySection key={`${activeTab}-${cat.name}`} cat={cat} index={i} />
                ))}
              </div>

              {/* BOOKLET FOOTER */}
              <div style={{
                textAlign: 'center',
                paddingTop: 38,
                marginTop: 20,
                borderTop: '1px dashed rgba(139,107,42,0.30)',
              }}>
                <p style={{
                  fontFamily: '"Playfair Display", serif',
                  fontStyle: 'italic',
                  color: '#6B5544',
                  fontSize: '1rem',
                  marginBottom: 24,
                  maxWidth: 580,
                  marginInline: 'auto',
                  lineHeight: 1.7,
                }}>
                  Every menu is fully customisable to your wedding theme, guest count and dietary preferences.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                  <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>Request Custom Menu</Link>
                  <a href="/menu.pdf" className="btn-outline-gold" style={{ textDecoration: 'none' }} download>Download Full Menu</a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── WEDDING PACKAGES (beige) ──────────────────────────────── */}
      <section className="section-pad beige-section">
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

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: 30,
            alignItems: 'stretch',
          }}>
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
    </>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, Ornament } from '../components/animations';
import { MENU_CATEGORIES } from '../data/menu';

// Menu page — bright cream/beige palette, category tabs + animated grid
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const cat = MENU_CATEGORIES[activeCategory];

  return (
    <>
      <PageBanner
        tagline="Signature Catering Experience"
        title="Our Premium Menu"
        subtitle="Customized catering menus crafted with authentic flavors, premium ingredients and elegant presentation for every occasion."
        image="/img7.jpg"
        height={420}
      />

      {/* ── HEADING + STATS (cream) ───────────────────────────────── */}
      <section className="cream-section" style={{ padding: '90px 0 30px', position: 'relative' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="section-kicker">Culinary Delights</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.7rem)', marginTop: 4 }}>
              Explore Our <span style={{
                background: 'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
                fontStyle: 'italic',
              }}>Menu</span> Categories
            </h2>
            <Ornament />
            <p style={{ marginTop: 16, fontFamily: '"DM Sans"', fontSize: '1.1rem', maxWidth: 720, marginInline: 'auto', lineHeight: 1.78, color: '#6B5544' }}>
              From traditional Telugu meals to grand buffet experiences — every dish is prepared with perfection and served with elegance.
            </p>
          </FadeUp>

          {/* Stats row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            {[
              ['50+', 'Menu Items'],
              ['10', 'Categories'],
              ['100%', 'Fresh Ingredients'],
              ['500+', 'Events Served'],
            ].map(([num, text]) => (
              <div
                key={text}
                className="cream-card"
                style={{ textAlign: 'center', padding: '22px 30px', minWidth: 170 }}
              >
                <h3 className="stat-number" style={{ fontSize: '1.95rem', marginBottom: 8 }}>{num}</h3>
                <p style={{ color: '#6B5544', fontSize: '0.82rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: '"DM Sans"', fontWeight: 700 }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY TABS + GRID (beige) ──────────────────────────── */}
      <section className="section-pad beige-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Category tabs */}
          <div style={{
            display: 'flex', gap: 10, overflowX: 'auto',
            paddingBottom: 16, marginBottom: 12,
            scrollbarWidth: 'none',
            justifyContent: 'flex-start',
          }}>
            {MENU_CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(i)}
                className={`menu-tab${activeCategory === i ? ' active' : ''}`}
              >
                {c.icon} {c.name}
              </button>
            ))}
          </div>

          {/* Active category description */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`desc-${activeCategory}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ textAlign: 'center', margin: '28px 0 36px' }}
            >
              <h3 style={{
                fontFamily: '"Playfair Display"',
                color: '#3B2A1F',
                fontSize: '1.85rem',
                marginBottom: 10,
                fontWeight: 700,
              }}>
                {cat.icon} {cat.name}
              </h3>
              <div className="ornament-divider" style={{ maxWidth: 220 }}>
                <span className="ornament-symbol">✦</span>
              </div>
              <p style={{
                fontFamily: '"DM Sans"',
                color: '#6B5544',
                fontSize: '1.08rem',
                maxWidth: 720,
                margin: '0 auto',
                lineHeight: 1.78,
              }}>
                {cat.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Menu items grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`grid-${activeCategory}`}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}
            >
              {cat.items.map((item) => (
                <div
                  key={item}
                  className="cream-card"
                  style={{ padding: 22, cursor: 'default' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: '50%',
                      background: 'linear-gradient(135deg, #E5C77F, #C9A14A, #8B6B2A)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.05rem', color: '#3B2A1F', fontWeight: 700, flexShrink: 0,
                      boxShadow: '0 6px 14px rgba(139,107,42,0.30)',
                      border: '2px solid #FFFFFF',
                    }}>
                      ✦
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: '#3B2A1F', fontSize: '1.04rem', marginBottom: 3, fontFamily: '"DM Sans"', fontWeight: 700 }}>
                        {item}
                      </h4>
                      <p style={{ color: '#8C7763', fontSize: '0.78rem', fontFamily: '"DM Sans"' }}>
                        Premium quality preparation
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 70 }}>
            <p style={{ fontFamily: '"DM Sans"', color: '#6B5544', fontSize: '1.1rem', marginBottom: 26, maxWidth: 700, margin: '0 auto 26px', lineHeight: 1.78 }}>
              Need a customized menu for your event? We craft personalised catering experiences for every occasion.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-gold" style={{ textDecoration: 'none' }}>Request Custom Menu</Link>
              <a href="/menu.pdf" className="btn-outline-gold" style={{ textDecoration: 'none' }} download>Download Full Menu</a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Hungry Yet?"
        subtitle="Let's design your event menu — call us for a free consultation and sample tasting session."
      />
    </>
  );
}

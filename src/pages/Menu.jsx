import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, GoldDivider } from '../components/animations';
import { MENU_CATEGORIES } from '../data/menu';

// Menu page — category tabs + animated grid (data-driven from src/data/menu.js)
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
        height={400}
      />

      <section className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #1a0e02, #2d1a06)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

          {/* Heading */}
          <FadeUp style={{ textAlign: 'center', marginBottom: 30 }}>
            <p style={{ fontFamily: '"Great Vibes"', fontSize: '2rem', color: '#d4a017' }}>Culinary Delights</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', marginBottom: 12 }}>Explore Our Menu Categories</h2>
            <GoldDivider />
            <p className="section-subtitle" style={{ marginTop: 16, fontFamily: '"Cormorant Garamond"', fontSize: '1.1rem', maxWidth: '720px', marginInline: 'auto' }}>
              From traditional Telugu meals to grand buffet experiences — every dish is prepared with perfection and served with elegance.
            </p>
          </FadeUp>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginBottom: 50 }}>
            {[
              ['50+', 'Menu Items'],
              ['10', 'Categories'],
              ['100%', 'Fresh Ingredients'],
              ['500+', 'Events Served'],
            ].map(([num, text]) => (
              <div key={text} style={{ textAlign: 'center', padding: '16px 26px', borderRadius: 18, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,160,23,0.15)', backdropFilter: 'blur(10px)', minWidth: 160 }}>
                <h3 style={{ color: '#d4a017', fontSize: '1.8rem', marginBottom: 4, fontFamily: '"Playfair Display"' }}>{num}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Category tabs */}
          <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 16, marginBottom: 12, scrollbarWidth: 'none' }}>
            {MENU_CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(i)}
                style={{
                  padding: '12px 22px',
                  borderRadius: 999,
                  border: activeCategory === i ? '1px solid #d4a017' : '1px solid rgba(212,160,23,0.2)',
                  background: activeCategory === i ? 'linear-gradient(135deg,#d4a017,#f2cd25)' : 'rgba(255,255,255,0.05)',
                  color: activeCategory === i ? '#1a0e02' : 'rgba(255,255,255,0.85)',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  flexShrink: 0,
                }}
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
              style={{ textAlign: 'center', margin: '20px 0 36px' }}
            >
              <h3 style={{ fontFamily: '"Playfair Display"', color: '#d4a017', fontSize: '1.6rem', marginBottom: 8 }}>
                {cat.icon} {cat.name}
              </h3>
              <p style={{ fontFamily: '"Cormorant Garamond"', color: 'rgba(253,246,227,0.8)', fontSize: '1.05rem', maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
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
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}
            >
              {cat.items.map((item) => (
                <div
                  key={item}
                  style={{ padding: 22, borderRadius: 16, border: '1px solid rgba(212,160,23,0.15)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(14px)', transition: 'all 0.35s ease', boxShadow: '0 10px 30px rgba(0,0,0,0.25)', cursor: 'pointer' }}
                  onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.45)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(212,160,23,0.15)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 42, height: 42, borderRadius: '50%', background: 'linear-gradient(135deg,#d4a017,#f2cd25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem', color: '#1a0e02', fontWeight: 'bold', flexShrink: 0 }}>✦</div>
                    <div>
                      <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: 2, fontFamily: '"Cormorant Garamond"' }}>{item}</h4>
                      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.78rem' }}>Premium quality preparation</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <p style={{ fontFamily: '"Cormorant Garamond"', color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: 24, maxWidth: 700, margin: '0 auto 24px' }}>
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

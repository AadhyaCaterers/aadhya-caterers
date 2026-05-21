import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import { FadeUp, Ornament } from '../components/animations';
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

      <section className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #221F1F, #1A1717 60%, #221F1F)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>

          {/* Heading */}
          <FadeUp style={{ textAlign: 'center', marginBottom: 30 }}>
            <p className="section-kicker">Culinary Delights</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem,3.2vw,2.6rem)', marginTop: 4, marginBottom: 4 }}>Explore Our Menu Categories</h2>
            <Ornament />
            <p className="section-subtitle" style={{ marginTop: 16, fontFamily: '"DM Sans"', fontSize: '1.1rem', maxWidth: 720, marginInline: 'auto', lineHeight: 1.7 }}>
              From traditional Telugu meals to grand buffet experiences — every dish is prepared with perfection and served with elegance.
            </p>
          </FadeUp>

          {/* Stats — replaces glassmorphism with proper gold-card aesthetic */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
            {[
              ['50+', 'Menu Items'],
              ['10', 'Categories'],
              ['100%', 'Fresh Ingredients'],
              ['500+', 'Events Served'],
            ].map(([num, text]) => (
              <div
                key={text}
                className="gold-card"
                style={{ textAlign: 'center', padding: '20px 28px', borderRadius: 4, minWidth: 170 }}
              >
                <h3 style={{ color: '#C9A857', fontSize: '1.9rem', marginBottom: 6, fontFamily: '"Playfair Display"', fontWeight: 700 }}>{num}</h3>
                <p style={{ color: 'rgba(255,247,229,0.75)', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: '"DM Sans"' }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Category tabs — proper gold pills, no glassmorphism */}
          <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 16, marginBottom: 12, scrollbarWidth: 'none', justifyContent: 'flex-start' }}>
            {MENU_CATEGORIES.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(i)}
                className={`menu-tab${activeCategory === i ? ' active' : ''}`}
                style={{ borderRadius: 999, padding: '11px 22px', fontSize: '0.82rem' }}
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
              style={{ textAlign: 'center', margin: '24px 0 36px' }}
            >
              <h3 style={{ fontFamily: '"Playfair Display"', color: '#C9A857', fontSize: '1.7rem', marginBottom: 10 }}>
                {cat.icon} {cat.name}
              </h3>
              <div className="ornament-divider" style={{ maxWidth: 200 }}>
                <span className="ornament-symbol">✦</span>
              </div>
              <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.82)', fontSize: '1.08rem', maxWidth: 720, margin: '0 auto', lineHeight: 1.7 }}>
                {cat.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Menu items grid — proper gold cards, no glassmorphism */}
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
                  className="gold-card"
                  style={{ padding: 22, borderRadius: 4, cursor: 'default' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: 'linear-gradient(135deg,#B8923D,#C9A857,#E0C68A)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', color: '#221F1F', fontWeight: 700, flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(201,168,87,0.3)',
                    }}>
                      ✦
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: '#FFF7E5', fontSize: '1.02rem', marginBottom: 3, fontFamily: '"DM Sans"', fontWeight: 600 }}>{item}</h4>
                      <p style={{ color: 'rgba(255,247,229,0.6)', fontSize: '0.78rem', fontFamily: '"DM Sans"' }}>Premium quality preparation</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: 70 }}>
            <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.85)', fontSize: '1.1rem', marginBottom: 26, maxWidth: 700, margin: '0 auto 26px', lineHeight: 1.7 }}>
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

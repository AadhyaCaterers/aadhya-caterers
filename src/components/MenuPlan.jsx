import React from 'react';
import { motion } from 'framer-motion';

// ──────────────────────────────────────────────────────────────────
// MenuPlan — renders ONE catering plan (e.g. "Vegetarian Standard
// Menu") with its title, item count badge, and a responsive grid
// of category cards (each category lists its items).
//
// Fully data-driven: pass a `plan` object from data/menuData.js
// shaped as { id, title, tagline, description, categories: [...] }.
// ──────────────────────────────────────────────────────────────────

// Single category card — title row + dashed-separator item list
const CategoryCard = ({ category }) => (
  <div
    style={{
      background: 'linear-gradient(180deg, #FFFBF2 0%, #FFFFFF 100%)',
      border: '1px solid rgba(139,107,42,0.22)',
      borderRadius: 14,
      padding: '22px 22px 20px',
      boxShadow: '0 8px 22px rgba(139,107,42,0.10)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      transition: 'transform 0.35s, box-shadow 0.35s, border-color 0.35s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 14px 30px rgba(139,107,42,0.18)';
      e.currentTarget.style.borderColor = 'rgba(201,161,74,0.55)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 22px rgba(139,107,42,0.10)';
      e.currentTarget.style.borderColor = 'rgba(139,107,42,0.22)';
    }}
  >
    {/* Category header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background:
            'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
          boxShadow: '0 6px 14px rgba(139,107,42,0.30)',
          border: '2px solid #FFFBF2',
          flexShrink: 0,
        }}
      >
        {category.icon || '✦'}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4
          style={{
            fontFamily: '"Playfair Display", serif',
            color: '#3B2A1F',
            fontSize: '1.15rem',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: 2,
          }}
        >
          {category.name}
        </h4>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            color: '#8C7763',
            fontSize: '0.66rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          {category.items.length}{' '}
          {category.items.length === 1 ? 'Item' : 'Items'}
        </p>
      </div>
    </div>

    {/* Gold rule */}
    <div
      style={{
        height: 1,
        background:
          'linear-gradient(90deg, transparent, rgba(139,107,42,0.40), transparent)',
        marginBottom: 12,
      }}
    />

    {/* Items list */}
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {category.items.map((item, i) => (
        <li
          key={item}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            padding: '9px 0',
            borderBottom:
              i === category.items.length - 1
                ? 'none'
                : '1px dashed rgba(139,107,42,0.22)',
          }}
        >
          <span
            style={{
              color: '#C9A14A',
              fontSize: '0.78rem',
              flexShrink: 0,
              fontFamily: '"Playfair Display", serif',
              marginTop: 2,
            }}
          >
            ✦
          </span>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              color: '#3B2A1F',
              fontSize: '0.94rem',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default function MenuPlan({ plan, index = 0 }) {
  const totalItems = plan.categories.reduce(
    (sum, cat) => sum + cat.items.length,
    0
  );

  return (
    <motion.section
      id={plan.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      style={{
        background:
          'linear-gradient(180deg, #FFFBF2 0%, #FFFFFF 60%, #FFFBF2 100%)',
        border: '1.5px solid rgba(139,107,42,0.30)',
        borderRadius: 20,
        padding: 'clamp(28px, 5vw, 56px) clamp(20px, 4vw, 48px)',
        boxShadow: '0 20px 50px rgba(139,107,42,0.14)',
        position: 'relative',
        marginBottom: 50,
        scrollMarginTop: 200,
      }}
    >
      {/* Gold corner ornaments */}
      {[
        { top: 14, left: 14, borders: { borderTop: '1.5px solid #8B6B2A', borderLeft: '1.5px solid #8B6B2A' } },
        { top: 14, right: 14, borders: { borderTop: '1.5px solid #8B6B2A', borderRight: '1.5px solid #8B6B2A' } },
        { bottom: 14, left: 14, borders: { borderBottom: '1.5px solid #8B6B2A', borderLeft: '1.5px solid #8B6B2A' } },
        { bottom: 14, right: 14, borders: { borderBottom: '1.5px solid #8B6B2A', borderRight: '1.5px solid #8B6B2A' } },
      ].map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            ...c,
            ...c.borders,
            width: 22,
            height: 22,
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Plan header */}
      <header style={{ textAlign: 'center', marginBottom: 36 }}>
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            color: '#C0392B',
            fontSize: '0.7rem',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          {plan.tagline}
        </p>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            color: '#3B2A1F',
            fontSize: 'clamp(1.65rem, 3.4vw, 2.4rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: 1.15,
            marginBottom: 14,
          }}
        >
          {plan.title}
        </h2>

        {/* Item count badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            background:
              'linear-gradient(135deg, #E5C77F 0%, #C9A14A 50%, #8B6B2A 100%)',
            borderRadius: 999,
            boxShadow: '0 6px 14px rgba(139,107,42,0.30)',
            marginBottom: 16,
          }}
        >
          <span style={{ color: '#FFFBF2', fontSize: '0.9rem' }}>✦</span>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              color: '#3B2A1F',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            {totalItems} Items &nbsp;·&nbsp; {plan.categories.length} Categories
          </span>
          <span style={{ color: '#FFFBF2', fontSize: '0.9rem' }}>✦</span>
        </div>

        {plan.description && (
          <p
            style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              color: '#6B5544',
              fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)',
              maxWidth: 640,
              margin: '6px auto 0',
              lineHeight: 1.7,
            }}
          >
            {plan.description}
          </p>
        )}
      </header>

      {/* Responsive category grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 22,
        }}
      >
        {plan.categories.map((cat) => (
          <CategoryCard key={cat.name} category={cat} />
        ))}
      </div>
    </motion.section>
  );
}

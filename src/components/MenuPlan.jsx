import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ category }) => (
  <div
    style={{
      background:
        'linear-gradient(180deg, #FFFBF2 0%, #FFFFFF 100%)',
      border: '1px solid rgba(139,107,42,0.22)',
      borderRadius: 18,
      padding: '24px',
      boxShadow: '0 10px 24px rgba(139,107,42,0.10)',
      height: '100%',
      transition: 'all .35s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform =
        'translateY(-4px)';
      e.currentTarget.style.boxShadow =
        '0 16px 34px rgba(139,107,42,0.16)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform =
        'translateY(0)';
      e.currentTarget.style.boxShadow =
        '0 10px 24px rgba(139,107,42,0.10)';
    }}
  >
    {/* Category Header */}
    <div style={{ marginBottom: 16 }}>
      <h4
        style={{
          fontFamily:
            '"Playfair Display", serif',
          color: '#3B2A1F',
          fontSize: '1.15rem',
          fontWeight: 700,
          marginBottom: 10,
          lineHeight: 1.3,
        }}
      >
        {category.icon || '✦'} {category.name}
      </h4>

      {category.choose && (
        <div
          style={{
            display: 'inline-block',
            padding: '7px 14px',
            borderRadius: 999,
            background:
              'linear-gradient(135deg,#E5C77F,#C9A14A,#8B6B2A)',
            color: '#3B2A1F',
            fontSize: '0.70rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          {category.choose}
        </div>
      )}
    </div>

    {/* Divider */}
    <div
      style={{
        height: 1,
        background:
          'linear-gradient(90deg, transparent, rgba(139,107,42,0.30), transparent)',
        marginBottom: 14,
      }}
    />

    {/* Items */}
    <ul
      style={{
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}
    >
      {category.items?.map((item, i) => (
        <li
          key={i}
          style={{
            padding: '10px 0',
            borderBottom:
              i === category.items.length - 1
                ? 'none'
                : '1px dashed rgba(139,107,42,0.18)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
          }}
        >
          <span
            style={{
              color: '#C9A14A',
              fontSize: '0.9rem',
              marginTop: 2,
            }}
          >
            ✦
          </span>

          <span
            style={{
              fontFamily:
                '"DM Sans", sans-serif',
              color: '#3B2A1F',
              lineHeight: 1.6,
              fontSize: '0.95rem',
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default function MenuPlan({
  plan,
  index = 0,
}) {
  return (
    <motion.section
      id={plan.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      style={{
        background:
          'linear-gradient(180deg, #FFFBF2 0%, #FFFFFF 60%, #FFFBF2 100%)',
        border:
          '1px solid rgba(139,107,42,0.25)',
        borderRadius: 24,
        padding: 'clamp(28px,5vw,56px)',
        marginBottom: 56,
        boxShadow:
          '0 20px 50px rgba(139,107,42,0.12)',
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 44,
        }}
      >
        <p
          style={{
            color: '#C0392B',
            fontSize: '0.74rem',
            letterSpacing: '0.30em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: 12,
          }}
        >
          {plan.tagline}
        </p>

        <h2
          style={{
            fontFamily:
              '"Playfair Display", serif',
            color: '#3B2A1F',
            fontSize:
              'clamp(1.9rem,3vw,2.8rem)',
            marginBottom: 18,
            lineHeight: 1.2,
          }}
        >
          {plan.title}
        </h2>

        {/* Item Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 22px',
            borderRadius: 999,
            background:
              'linear-gradient(135deg,#E5C77F,#C9A14A,#8B6B2A)',
            color: '#3B2A1F',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontSize: '0.76rem',
            marginBottom: 20,
          }}
        >
          ✦ {plan.itemsCount} ✦
        </div>

        {plan.description && (
          <p
            style={{
              maxWidth: 760,
              margin: '0 auto',
              lineHeight: 1.8,
              color: '#6B5544',
              fontStyle: 'italic',
              fontSize: '1rem',
            }}
          >
            {plan.description}
          </p>
        )}
      </div>

      {/* Category Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 34,
        }}
      >
        {plan.categories.map((cat, i) => (
          <CategoryCard
            key={i}
            category={cat}
          />
        ))}
      </div>

      {/* Common Items */}
      {plan.commonItems && (
        <div
          style={{
            background:
              'linear-gradient(180deg, #FFF8E7 0%, #FFFFFF 100%)',
            border:
              '1px solid rgba(201,161,74,0.25)',
            borderRadius: 20,
            padding: '30px',
            marginTop: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 14,
              marginBottom: 24,
            }}
          >
            <h3
              style={{
                fontFamily:
                  '"Playfair Display", serif',
                color: '#3B2A1F',
                fontSize: '1.45rem',
                margin: 0,
              }}
            >
              Common Items Included
            </h3>

            <div
              style={{
                background:
                  'linear-gradient(135deg,#E5C77F,#C9A14A,#8B6B2A)',
                color: '#3B2A1F',
                padding: '8px 18px',
                borderRadius: 999,
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Included
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 14,
            }}
          >
            {plan.commonItems.map(
              (item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '12px 14px',
                    borderRadius: 12,
                    background: '#FFFBF2',
                    border:
                      '1px dashed rgba(139,107,42,0.18)',
                  }}
                >
                  <span
                    style={{
                      color: '#C9A14A',
                      fontSize: '0.9rem',
                    }}
                  >
                    ✦
                  </span>

                  <span
                    style={{
                      fontFamily:
                        '"DM Sans", sans-serif',
                      color: '#3B2A1F',
                      fontSize: '0.92rem',
                    }}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </motion.section>
  );
}
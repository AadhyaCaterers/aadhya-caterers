import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import MenuChoiceCards from '../components/MenuChoiceCards';
import { FadeUp, Ornament } from '../components/animations';
import { WHATSAPP_URL, PHONE_PRIMARY } from '../data/constants';

// ──────────────────────────────────────────────────────────────────
// MENU HUB PAGE  (/menu)
// Lightweight entry point — lets visitors choose Veg or Non-Veg
// and routes them to the dedicated menu page. The full menus
// live at /veg-menu and /non-veg-menu.
// ──────────────────────────────────────────────────────────────────

export default function Menu() {
  return (
    <>
      <PageBanner
        tagline="Premium Wedding Catering"
        title="Our Menu"
        subtitle="Explore our complete Veg & Non-Veg catering menu for every celebration — Standard and Silver plans crafted for weddings, receptions and family gatherings."
        image="/img7.jpg"
        height={460}
      />

      {/* Choice section */}
      <section
        className="cream-section"
        style={{
          padding: '90px 0 100px',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: '0 24px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <FadeUp
            style={{
              textAlign: 'center',
              marginBottom: 56,
            }}
          >
            <p className="section-kicker">
              Premium Vegetarian Catering
            </p>

            <h2
              className="section-title"
              style={{
                fontSize: 'clamp(1.95rem, 3.6vw, 2.9rem)',
                marginTop: 4,
                lineHeight: 1.2,
              }}
            >
              <span
                style={{
                  color: '#234B2C',
                  fontWeight: 800,
                }}
              >
                Veg
              </span>

              <span
                style={{
                  margin: '0 10px',
                  color: '#5C4634',
                }}
              >
                &
              </span>

              <span
                style={{
                  background:
                    'linear-gradient(135deg, #B8923D, #C9A14A, #8B6B2A)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontStyle: 'italic',
                  fontSize: '0.82em',
                  fontWeight: 500,
                }}
              >
                Non-Veg Menus
              </span>
            </h2>

            <Ornament />

            <p
              className="section-subtitle"
              style={{
                maxWidth: 720,
                margin: '14px auto 0',
                fontSize: '1.1rem',
              }}
            >
              Specialists in pure vegetarian wedding feasts —
              with elegant Non-Veg catering options for every
              celebration.
            </p>
          </FadeUp>

          <MenuChoiceCards />

          <FadeUp
            style={{
              textAlign: 'center',
              marginTop: 56,
            }}
          >
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                color: '#6B5544',
                fontSize: '1rem',
                maxWidth: 640,
                margin: '0 auto 22px',
                lineHeight: 1.7,
              }}
            >
              Need a fully personalised menu? Our team will
              craft a bespoke catering plan around your venue,
              theme and budget.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 14,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href={`tel:${PHONE_PRIMARY}`}
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>📞 &nbsp;Speak to Our Team</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
                style={{ textDecoration: 'none' }}
              >
                Chat on WhatsApp
              </a>

              <Link
                to="/contact"
                className="btn-outline-gold"
                style={{ textDecoration: 'none' }}
              >
                Request Custom Menu
              </Link>
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
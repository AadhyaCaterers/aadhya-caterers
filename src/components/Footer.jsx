import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/navLinks';
import { SERVICES } from '../data/services';
import {
  WHATSAPP_URL, YOUTUBE_URL, INSTAGRAM_URL, FACEBOOK_URL,
  PHONE_PRIMARY, PHONE_SECONDARY, EMAIL_PRIMARY,
} from '../data/constants';

const IconWhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);
const IconInstagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);
const IconFacebook = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);

const SocialBtn = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    style={{
      width: 42, height: 42,
      background: 'rgba(229,199,127,0.10)',
      border: '1px solid rgba(229,199,127,0.40)',
      borderRadius: 8,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textDecoration: 'none', color: '#E5C77F',
      transition: 'all 0.35s',
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.background = 'linear-gradient(135deg, #E5C77F, #C9A14A)';
      e.currentTarget.style.color = '#3B2A1F';
      e.currentTarget.style.borderColor = '#E5C77F';
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 18px rgba(229,199,127,0.30)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.background = 'rgba(229,199,127,0.10)';
      e.currentTarget.style.color = '#E5C77F';
      e.currentTarget.style.borderColor = 'rgba(229,199,127,0.40)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {icon}
  </a>
);

// Premium luxury footer — deep maroon gradient with gold typography
// (NOT black; warm wedding-invitation feel)
export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #6B1F1F 0%, #4A1414 50%, #6B1F1F 100%)',
      borderTop: '1px solid rgba(229,199,127,0.30)',
      paddingBottom: 80,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top gold accent line */}
      <div style={{
        height: 4,
        background: 'linear-gradient(90deg, transparent, #E5C77F 30%, #C9A14A 50%, #E5C77F 70%, transparent)',
      }} />

      {/* Soft decorative pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(229,199,127,0.04) 60px, rgba(229,199,127,0.04) 120px)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1240,
        margin: '0 auto',
        padding: '70px 24px 40px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 44,
          marginBottom: 50,
        }}>
          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Aadhya Caterers" style={{
              height: 80,
              marginBottom: 18,
              filter: 'drop-shadow(0 4px 14px rgba(229,199,127,0.30))',
            }} />
            <p style={{
              fontFamily: '"Playfair Display", serif',
              fontStyle: 'italic',
              color: '#E5C77F',
              fontSize: '1.5rem',
              lineHeight: 1,
              marginBottom: 14,
              fontWeight: 600,
            }}>
              Aadhya Caterers
            </p>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              color: 'rgba(255,251,242,0.82)',
              lineHeight: 1.85,
              fontSize: '0.95rem',
              marginBottom: 24,
            }}>
              Deliciously Crafted &middot; Royally Served &middot; Memorably Celebrated. Premium catering for weddings, corporate events and traditional Telugu feasts across Hyderabad.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <SocialBtn href={WHATSAPP_URL}  icon={<IconWhatsApp />}  label="WhatsApp" />
              <SocialBtn href={YOUTUBE_URL}   icon={<IconYouTube />}   label="YouTube" />
              <SocialBtn href={INSTAGRAM_URL} icon={<IconInstagram />} label="Instagram" />
              <SocialBtn href={FACEBOOK_URL}  icon={<IconFacebook />}  label="Facebook" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: '"Playfair Display", serif',
              color: '#E5C77F',
              marginBottom: 8,
              fontSize: '1.12rem',
              letterSpacing: '0.04em',
              fontWeight: 700,
            }}>
              Quick Links
            </h4>
            <div style={{
              width: 44, height: 2,
              background: 'linear-gradient(90deg, #E5C77F, transparent)',
              marginBottom: 20,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    color: 'rgba(255,251,242,0.70)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s, padding 0.3s',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = '#E5C77F'; e.currentTarget.style.paddingLeft = '8px'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,251,242,0.70)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  ✦ {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: '"Playfair Display", serif',
              color: '#E5C77F',
              marginBottom: 8,
              fontSize: '1.12rem',
              letterSpacing: '0.04em',
              fontWeight: 700,
            }}>
              Our Services
            </h4>
            <div style={{
              width: 44, height: 2,
              background: 'linear-gradient(90deg, #E5C77F, transparent)',
              marginBottom: 20,
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.slice(0, 6).map((s) => (
                <Link
                  key={s.title}
                  to="/services"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    color: 'rgba(255,251,242,0.70)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.3s, padding 0.3s',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = '#E5C77F'; e.currentTarget.style.paddingLeft = '8px'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,251,242,0.70)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  ✦ {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: '"Playfair Display", serif',
              color: '#E5C77F',
              marginBottom: 8,
              fontSize: '1.12rem',
              letterSpacing: '0.04em',
              fontWeight: 700,
            }}>
              Get in Touch
            </h4>
            <div style={{
              width: 44, height: 2,
              background: 'linear-gradient(90deg, #E5C77F, transparent)',
              marginBottom: 20,
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href={`tel:${PHONE_PRIMARY}`} style={{ color: 'rgba(255,251,242,0.85)', textDecoration: 'none', fontFamily: '"DM Sans"', fontSize: '0.92rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#E5C77F' }}>📞</span> +91 94940 55353
              </a>
              <a href={`tel:${PHONE_SECONDARY}`} style={{ color: 'rgba(255,251,242,0.85)', textDecoration: 'none', fontFamily: '"DM Sans"', fontSize: '0.92rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#E5C77F' }}>📞</span> +91 93981 83197
              </a>
              <a href={`mailto:${EMAIL_PRIMARY}`} style={{ color: 'rgba(255,251,242,0.85)', textDecoration: 'none', fontFamily: '"DM Sans"', fontSize: '0.85rem', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#E5C77F' }}>✉️</span> {EMAIL_PRIMARY}
              </a>
              <p style={{ color: 'rgba(255,251,242,0.78)', fontFamily: '"DM Sans"', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#E5C77F' }}>📍</span>
                <span>Balajinagar, Kukatpally,<br />Hyderabad - 500072</span>
              </p>
              <p style={{ color: 'rgba(255,251,242,0.78)', fontFamily: '"DM Sans"', fontSize: '0.92rem', lineHeight: 1.7, display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: '#E5C77F' }}>📍</span>
                <span>Chilkanagar, Uppal,<br />Hyderabad</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(229,199,127,0.20)',
          paddingTop: 28,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgba(255,251,242,0.55)',
            fontSize: '0.84rem',
            letterSpacing: '0.04em',
          }}>
            © {new Date().getFullYear()} Aadhya Caterers. All Rights Reserved.
          </p>
          <p style={{
            fontFamily: '"DM Sans", sans-serif',
            color: 'rgba(255,251,242,0.60)',
            fontSize: '0.84rem',
            letterSpacing: '0.04em',
          }}>
            Developed by <a href="#" style={{ color: '#E5C77F', textDecoration: 'none', fontWeight: 700, letterSpacing: '0.06em' }}>StaffArc</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

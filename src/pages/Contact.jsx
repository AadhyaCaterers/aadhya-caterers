import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { FadeUp, FadeIn, Ornament } from '../components/animations';
import {
  WHATSAPP_URL, YOUTUBE_URL, PHONE_PRIMARY, PHONE_SECONDARY, EMAIL_PRIMARY,
  USE_FORMSPREE, FORMSPREE_ENDPOINT,
  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY,
} from '../data/constants';

// Dedicated Contact page — form, both addresses, map, WhatsApp, call, email
export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', event: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      if (USE_FORMSPREE) {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Formspree error');
      } else {
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          { from_name: form.name, phone: form.phone, email: form.email, event_type: form.event, message: form.message },
          EMAILJS_PUBLIC_KEY,
        );
      }
      setStatus('success');
      setForm({ name: '', phone: '', email: '', event: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <>
      <PageBanner
        tagline="Get in Touch"
        title="Contact Aadhya Caterers"
        subtitle="Call, WhatsApp, email or fill the form — we typically respond within an hour during business hours."
        image="/img6.jpg"
      />

      {/* Quick action buttons row */}
      <section style={{ background: '#221F1F', padding: '70px 0 30px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            {[
              { icon: '📞', label: 'Call Now',     val: '+91 94940 55353',          href: `tel:${PHONE_PRIMARY}`,   color: '#C9A857' },
              { icon: '💬', label: 'WhatsApp Chat', val: 'Chat with us instantly',  href: WHATSAPP_URL,             color: '#25D366', external: true },
              { icon: '✉️', label: 'Email Us',     val: EMAIL_PRIMARY,             href: `mailto:${EMAIL_PRIMARY}`, color: '#C9A857' },
              { icon: '▶',  label: 'YouTube',      val: 'Watch our reels',         href: YOUTUBE_URL,              color: '#FF0000', external: true },
            ].map((a, i) => (
              <FadeUp key={a.label} delay={i * 0.06}>
                <a
                  href={a.href}
                  target={a.external ? '_blank' : undefined}
                  rel={a.external ? 'noopener noreferrer' : undefined}
                  className="gold-card"
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '20px 22px', borderRadius: 4, textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ width: 46, height: 46, borderRadius: '50%', background: a.color, color: '#221F1F', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', flexShrink: 0 }}>
                    {a.icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: '"DM Sans"', color: 'rgba(255,247,229,0.55)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{a.label}</p>
                    <p style={{ fontFamily: '"DM Sans"', color: '#FFF7E5', fontSize: '0.98rem' }}>{a.val}</p>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-pad pattern-overlay" style={{ background: 'linear-gradient(to bottom, #221F1F, #1A1717)', paddingTop: 30 }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 50 }}>
            {/* Left — info + map */}
            <FadeIn x={-30}>
              <p className="section-kicker">Reach Us</p>
              <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#C9A857', fontSize: '1.7rem', marginTop: 4, marginBottom: 8 }}>Contact Information</h3>
              <div className="gold-divider-left" style={{ marginBottom: 26 }} />

              {[
                { icon: '📞', label: 'Phone', lines: [
                  <a key="p1" href={`tel:${PHONE_PRIMARY}`}   style={{ color: '#C9A857', textDecoration: 'none' }}>+91 94940 55353</a>,
                  <a key="p2" href={`tel:${PHONE_SECONDARY}`} style={{ color: 'rgba(255,247,229,0.8)', textDecoration: 'none' }}>+91 93981 83197</a>,
                ]},
                { icon: '✉️', label: 'Email', lines: [
                  <a key="e" href={`mailto:${EMAIL_PRIMARY}`} style={{ color: '#C9A857', textDecoration: 'none', fontSize: '0.95rem' }}>{EMAIL_PRIMARY}</a>,
                ]},
                { icon: '📍', label: 'Kukatpally Branch', lines: ['Balajinagar, Kukatpally', 'Hyderabad, Telangana - 500072'] },
                { icon: '📍', label: 'Uppal Branch',      lines: ['Chilkanagar, Uppal', 'Hyderabad, Telangana'] },
                { icon: '🕒', label: 'Working Hours',     lines: ['Monday – Sunday', '08:00 AM – 09:00 PM'] },
              ].map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 16, marginBottom: 22 }}>
                  <div style={{ width: 46, height: 46, border: '1px solid rgba(201,168,87,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem', flexShrink: 0, borderRadius: 2 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', letterSpacing: '0.18em', color: 'rgba(255,247,229,0.55)', textTransform: 'uppercase', marginBottom: 4 }}>{c.label}</p>
                    {c.lines.map((line, i) => (
                      <p key={i} style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', color: 'rgba(255,247,229,0.88)' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 22px', background: '#25D366', color: 'white', textDecoration: 'none', fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  💬 WhatsApp
                </a>
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '11px 22px', background: '#FF0000', color: 'white', textDecoration: 'none', fontFamily: '"DM Sans", sans-serif', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  ▶ YouTube
                </a>
              </div>

              {/* Map — Kukatpally */}
              <div style={{ marginTop: 30, border: '1px solid rgba(201,168,87,0.35)', borderRadius: 2, overflow: 'hidden' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.4721278748!2d78.40601!3d17.4946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e5b1f59e63%3A0x5d86a7da8c7c4e9f!2sBalajinagar%2C+Kukatpally%2C+Hyderabad%2C+Telangana+500072!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aadhya Caterers Kukatpally Location"
                />
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn x={30} delay={0.15}>
              <p className="section-kicker">Quick Enquiry</p>
              <h3 style={{ fontFamily: '"Playfair Display",serif', color: '#C9A857', fontSize: '1.7rem', marginTop: 4, marginBottom: 8 }}>Send Us a Message</h3>
              <div className="gold-divider-left" style={{ marginBottom: 26 }} />

              {status === 'success' && (
                <div style={{ background: 'rgba(201,168,87,0.12)', border: '1px solid #C9A857', padding: '14px 20px', marginBottom: 24, fontFamily: '"DM Sans", sans-serif', color: '#C9A857', fontSize: '1rem' }}>
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {status === 'error' && (
                <div style={{ background: 'rgba(180,40,40,0.12)', border: '1px solid #c0392b', padding: '14px 20px', marginBottom: 24, fontFamily: '"DM Sans", sans-serif', color: '#e74c3c', fontSize: '1rem' }}>
                  ✗ Something went wrong. Please call us directly at +91 94940 55353.
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <input className="form-input" name="name"  placeholder="Your Full Name *" value={form.name}  onChange={handleChange} required />
                <input className="form-input" name="phone" placeholder="Phone Number *"   value={form.phone} onChange={handleChange} required />
                <input className="form-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
                <select className="form-input" name="event" value={form.event} onChange={handleChange} required style={{ cursor: 'pointer' }}>
                  <option value="">Select Event Type *</option>
                  <option>Wedding</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                  <option>House Warming</option>
                  <option>Outdoor Event</option>
                  <option>Other</option>
                </select>
                <textarea className="form-input" name="message" placeholder="Tell us about your event — date, guest count, requirements…" value={form.message} onChange={handleChange} rows={5} style={{ resize: 'vertical' }} />
                <button type="submit" className="btn-gold" disabled={status === 'sending'} style={{ cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontSize: '0.82rem', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending…' : 'Submit Enquiry'}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Both branches block — cream section for variety */}
      <section className="section-pad cream-section">
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <FadeUp style={{ textAlign: 'center', marginBottom: 44 }}>
            <p className="section-kicker">Find Us Here</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem,3vw,2.4rem)', marginTop: 4, marginBottom: 4 }}>Our Two Hyderabad Branches</h2>
            <Ornament />
          </FadeUp>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {[
              { name: 'Kukatpally Branch', lines: ['Balajinagar, Kukatpally', 'Hyderabad, Telangana - 500072'], img: '/img2.jpg' },
              { name: 'Uppal Branch',      lines: ['Chilkanagar, Uppal',      'Hyderabad, Telangana'],          img: '/img4.jpg' },
            ].map((b) => (
              <FadeUp key={b.name}>
                <div className="cream-card" style={{ borderRadius: 4, overflow: 'hidden' }}>
                  <img src={b.img} alt={b.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                  <div style={{ padding: '26px 28px' }}>
                    <h3 style={{ fontFamily: '"Playfair Display"', color: '#8B6B2A', fontSize: '1.3rem', marginBottom: 8 }}>📍 {b.name}</h3>
                    <div style={{ width: 36, height: 1, background: 'rgba(139,107,42,0.4)', marginBottom: 12 }} />
                    {b.lines.map((l) => (
                      <p key={l} style={{ fontFamily: '"DM Sans"', color: 'rgba(42,36,36,0.85)', fontSize: '1.02rem', lineHeight: 1.7 }}>{l}</p>
                    ))}
                    <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: 'wrap' }}>
                      <a href={`tel:${PHONE_PRIMARY}`} className="btn-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '11px 20px' }}>Call</a>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-gold" style={{ textDecoration: 'none', fontSize: '0.72rem', padding: '10px 18px' }}>WhatsApp</a>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

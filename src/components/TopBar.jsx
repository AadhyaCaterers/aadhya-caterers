import React from 'react';
import {
  PHONE_PRIMARY, PHONE_SECONDARY, EMAIL_PRIMARY,
  WHATSAPP_URL, YOUTUBE_URL, INSTAGRAM_URL, FACEBOOK_URL,
} from '../data/constants';

// Tiny inline icons
const Phone = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24c1.16.39 2.41.6 3.69.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.27.21 2.51.6 3.68a1 1 0 0 1-.25 1.05l-2.23 2.06z"/></svg>
);
const Mail = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
);
const Clock = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconWA = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2A10 10 0 0 0 3.5 17.34L2 22l4.78-1.45A10 10 0 1 0 12.04 2zm5.34 14.13c-.23.64-1.36 1.22-1.88 1.27-.5.05-1.16.07-1.87-.12-.43-.13-.99-.32-1.71-.62-3.01-1.3-4.97-4.34-5.12-4.54-.15-.2-1.23-1.64-1.23-3.13 0-1.49.78-2.22 1.06-2.52.28-.3.61-.38.81-.38h.58c.18 0 .43-.07.67.51.25.6.83 2.07.9 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.32.4-.45.53-.15.15-.31.32-.13.62.18.3.79 1.31 1.69 2.12 1.16 1.04 2.14 1.36 2.44 1.51.3.15.48.13.66-.08.18-.2.76-.88.96-1.18.2-.3.4-.25.67-.15.27.1 1.74.82 2.04.97.3.15.5.22.57.35.07.13.07.74-.16 1.45z"/></svg>
);
const IconYT = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
);
const IconIG = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.07 3.3.15 4.8 1.7 4.9 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.22-1.66 4.77-4.9 4.92-1.26.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.15-3.22 1.66-4.77 4.92-4.92C8.42 2.2 8.8 2.2 12 2.2zm0 1.8c-3.16 0-3.55.01-4.78.07-2.36.1-3.6 1.36-3.7 3.7C3.46 8.99 3.45 9.37 3.45 12s.01 3.01.07 4.23c.1 2.36 1.36 3.6 3.7 3.7 1.23.06 1.62.07 4.78.07s3.55-.01 4.78-.07c2.36-.1 3.6-1.36 3.7-3.7.06-1.22.07-1.6.07-4.23s-.01-3.01-.07-4.23c-.1-2.36-1.36-3.6-3.7-3.7C15.55 4.01 15.16 4 12 4zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zm5.2-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>
);
const IconFB = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>
);

// Soft warm-gold gradient strip — desktop only
export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="tb-info">
          <a href={`tel:${PHONE_PRIMARY}`}><Phone /> +91 93981 83297</a>
          <a href={`tel:${PHONE_SECONDARY}`}><Phone /> +91 90908 09026</a>
          <a href={`mailto:${EMAIL_PRIMARY}`}><Mail /> {EMAIL_PRIMARY}</a>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#6B5544' }}>
            <Clock /> Mon – Sun · 8:00 AM – 9:00 PM
          </span>
        </div>
        <div className="tb-social">
          <a href={WHATSAPP_URL}  target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWA /></a>
          <a href={YOUTUBE_URL}   target="_blank" rel="noopener noreferrer" aria-label="YouTube"><IconYT /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconIG /></a>
          <a href={FACEBOOK_URL}  target="_blank" rel="noopener noreferrer" aria-label="Facebook"><IconFB /></a>
        </div>
      </div>
    </div>
  );
}

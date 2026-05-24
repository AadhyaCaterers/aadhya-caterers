// ─── EMAILJS CONFIG ──────────────────────────────────────────────────────────
// Sign up at https://emailjs.com → create a service + template → paste IDs below

export const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
export const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
export const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
export const LOGO_SRC = `${process.env.PUBLIC_URL}/logo.png`;
// ─── FORMSPREE FALLBACK ──────────────────────────────────────────────────────

export const USE_FORMSPREE = false;

export const FORMSPREE_ENDPOINT =
  'https://formspree.io/f/YOUR_FORM_ID';

// ─── CONTACT INFO ────────────────────────────────────────────────────────────

// PRIMARY = call number (used for all tel: links)
export const PHONE_PRIMARY = '9090809026';

// SECONDARY = WhatsApp number (displayed alongside; its links open WhatsApp, not the dialer)
export const PHONE_SECONDARY = '9398183297';

export const EMAIL_PRIMARY =
  'aadhyacaterers01@gmail.com';

// ─── WHATSAPP ────────────────────────────────────────────────────────────────

const WHATSAPP_MSG = encodeURIComponent(
  'Hi, I want to book catering for my event. Please share details about your packages and availability.'
);

// WhatsApp opens chat with the dedicated WhatsApp number (PHONE_SECONDARY)

export const WHATSAPP_URL =
  `https://wa.me/919398183297?text=${WHATSAPP_MSG}`;

// ─── SOCIAL LINKS ────────────────────────────────────────────────────────────

export const YOUTUBE_URL =
  'https://youtube.com/@aadhyacaterers?si=DPTGpWcFBa9mVFtC';

export const INSTAGRAM_URL =
  'https://instagram.com/aadhyacaterers';

export const FACEBOOK_URL =
  'https://facebook.com/aadhyacaterers';
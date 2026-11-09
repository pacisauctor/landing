/** Confirmed contact channels already published on this landing. */
export const CONTACT_EMAIL = 'agarciadarce@gmail.com';
export const WHATSAPP_URL = 'https://wa.me/50588360570';

/** File generated from landing copy. Served from /public. */
export const CV_PATH = '/cv/Axel-Garcia-CV.pdf';

/** Public booking page for every schedule / call-to-book control. */
export const CALENDAR_URL = 'https://calendar.app.google/prgzVh2q3h4Yp2TU7';

/**
 * TODO(Axel): replace buyMeACoffee with a public URL before sharing.
 * An empty value stays off screen and does not navigate.
 */
export const EXTERNAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/agarciadarce/',
  github: 'https://github.com/pacisauctor',
  calendar: CALENDAR_URL,
  buyMeACoffee: '',
} as const;

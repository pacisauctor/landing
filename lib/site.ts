import { CONTACT_EMAIL } from '@/lib/external-links';

/** Production site: https://agarciadarce.com */
export const SITE_URL = 'https://agarciadarce.com';

export const SITE_NAME = 'Axel García';

export const SITE_TITLE = 'Axel García | Head of Technology en tizo';

export const SITE_DESCRIPTION =
  'Axel García es Head of Technology en tizo. Convierte problemas de negocio en sistemas de ingeniería, producto, datos e IA. Agenda una llamada.';

export const PROFILE_IMAGE_PATH = '/images/axel-garcia.webp';
export const OG_IMAGE_PATH = '/og/axel-garcia.jpg';

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: 'Head of Technology',
  email: CONTACT_EMAIL,
  telephone: '+50588360570',
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE_IMAGE_PATH}`,
  worksFor: {
    '@type': 'Organization',
    name: 'tizo',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NI',
  },
};

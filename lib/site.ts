import { CONTACT_EMAIL } from '@/lib/external-links';

/**
 * PLACEHOLDER — dominio de producción.
 *
 * No hay un dominio verificable en el repositorio: no existe CNAME,
 * vercel.json, variable de entorno, README ni host de deploy.
 * `https://axelgarcia.dev` solo aparecía en la metadata de Open Graph
 * y no está confirmado.
 *
 * Reemplaza este valor antes de publicar. robots.txt y sitemap.xml
 * salen de esta constante.
 */
export const SITE_URL = 'https://pendiente-dominio.example';

export const SITE_NAME = 'Axel García';

export const SITE_TITLE =
  'Axel García | Head of Delivery & Engineering Operations en Tizo';

export const SITE_DESCRIPTION =
  'Axel García lidera Delivery y Engineering Operations en Tizo. Proyectos y equipos de software desde Nicaragua. Agenda una llamada.';

export const PROFILE_IMAGE_PATH = '/images/axel-garcia.webp';
export const OG_IMAGE_PATH = '/og/axel-garcia.jpg';

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  jobTitle: 'Head of Delivery & Engineering Operations',
  email: CONTACT_EMAIL,
  telephone: '+50588360570',
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE_IMAGE_PATH}`,
  worksFor: {
    '@type': 'Organization',
    name: 'Tizo',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NI',
  },
};

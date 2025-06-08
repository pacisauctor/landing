
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Axel García - Project Manager & Lead Developer',
  description: 'Portfolio profesional de Axel García, Project Manager y Lead Developer con más de 5 años de experiencia en gestión de proyectos y desarrollo de software.',
  keywords: 'Project Manager, Lead Developer, Software Development, Nicaragua, Axel García, Portfolio',
  authors: [{ name: 'Axel García' }],
  creator: 'Axel García',
  openGraph: {
    title: 'Axel García - Project Manager & Lead Developer',
    description: 'Portfolio profesional de Axel García, especializado en gestión de proyectos y desarrollo de software.',
    url: 'https://axelgarcia.dev',
    siteName: 'Axel García Portfolio',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axel García - Project Manager & Lead Developer',
    description: 'Portfolio profesional de Axel García, especializado en gestión de proyectos y desarrollo de software.',
    creator: '@axelgarcia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

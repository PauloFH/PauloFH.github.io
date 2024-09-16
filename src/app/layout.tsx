import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'Paulo Holanda Developer',
  description: 'Desenvolvedor Paulo Holanda, especializado em software.',
  openGraph: {
    locale: 'en',
    type: 'website',
    title: 'Paulo Holanda Developer',
    description: 'Desenvolvedor Paulo Holanda, especializado em software.',
    siteName: 'Paulo Holanda Developer',
  },
  twitter: {
    title: 'Paulo Holanda Developer',
    description: 'Desenvolvedor Paulo Holanda, especializado em software.',
  },
  keywords: ['Paulo Holanda', 'Paulo Holanda Developer'],
  icons: {
    apple: '/apple-touch-icon.png',
    icon: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
    ],
    maskIcon: { url: '/safari-pinned-tab.svg', color: '#5bbad5' },
  },
  manifest: '/site.webmanifest',
  msapplication: {
    TileColor: '#2d89ef',
  },
  themeColor: '#121212',
};
export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Paulo Holanda',
  description: 'Portfólio de Paulo Holanda',
  icons: {
    icon: [
      { url: './favicon.ico' },
      { url: './favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: './favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: './apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: './safari-pinned-tab.svg',
      },
    ],
  },
  
}
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
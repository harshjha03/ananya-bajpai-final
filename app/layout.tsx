import type {Metadata} from 'next';
import { DM_Sans, Cormorant_Garamond, DM_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  title: 'Ananya | Portfolio',
  description: 'Portfolio website of Ananya',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorantGaramond.variable} ${dmMono.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-[#050505] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

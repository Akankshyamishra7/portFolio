import type { Metadata, Viewport } from 'next';
import { Inter, Space_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0c',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Akankshya Mishra | Full-Stack Developer & Software Engineer',
  description:
    'Full-stack developer portfolio of Akankshya Mishra. Building scalable web applications, clean APIs, modern user experiences, and innovative digital solutions.',
  keywords: [
    'Akankshya Mishra',
    'Full Stack Developer',
    'Next.js Portfolio',
    'React',
    'TypeScript',
    'GSAP Animation',
    'Software Engineer India',
    'Web Development',
  ],
  authors: [{ name: 'Akankshya Mishra' }],
  creator: 'Akankshya Mishra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/Akankshyamishra7/portFolio',
    title: 'Akankshya Mishra | Full-Stack Developer & Software Engineer',
    description:
      'Full-stack developer portfolio showcasing modern web engineering, clean code, and interactive experiences.',
    siteName: 'Akankshya Mishra Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akankshya Mishra | Full-Stack Developer',
    description:
      'Full-stack developer crafting scalable web applications, clean code, and interactive experiences.',
    creator: '@akankshyamishra',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} ${playfair.variable}`}>
      <body className="bg-[#0E0E0D] text-[#F4F3EF] selection:bg-[#F4F3EF] selection:text-black antialiased overflow-x-hidden">
        {/* Subtle organic film grain texture overlay */}
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

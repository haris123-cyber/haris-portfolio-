import { Outfit } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-primary' });

export const metadata = {
  title: 'Haris Portfolio',
  description: 'Professional Web Developer Portfolio',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23FF6B00"/><text x="50%" y="55%" font-family="Arial, sans-serif" font-size="50" font-weight="bold" fill="%23000" text-anchor="middle" dominant-baseline="middle">HM</text></svg>',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

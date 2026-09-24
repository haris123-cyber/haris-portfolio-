"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // starts dark (hero is black)

  // Detect the background brightness under the navbar
  useEffect(() => {
    const checkBg = () => {
      // Sample 3 points across the navbar row at y=1 (just below the nav)
      const points = [
        document.elementFromPoint(window.innerWidth * 0.25, 70),
        document.elementFromPoint(window.innerWidth * 0.5, 70),
        document.elementFromPoint(window.innerWidth * 0.75, 70),
      ].filter(Boolean);

      const lightCount = points.filter(el => {
        const bg = window.getComputedStyle(el).backgroundColor;
        const match = bg.match(/\d+/g);
        if (!match) return false;
        const [r, g, b] = match.map(Number);
        // Perceived luminance
        return (0.299 * r + 0.587 * g + 0.114 * b) > 160;
      }).length;

      setIsDark(lightCount < 2); // dark text needed when mostly light bg
    };

    checkBg();
    window.addEventListener('scroll', checkBg, { passive: true });
    return () => window.removeEventListener('scroll', checkBg);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const activeColor = 'text-[#FF6B00]';
  const inactiveColor = isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-black';

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
        animate={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        <div className="max-w-7xl mx-auto flex justify-end items-center">
          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 relative group
                  ${pathname === link.href ? activeColor : inactiveColor}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5  bg-gradient-to-r from-orange-500 to-amber-400 
                  rounded-full transition-all duration-300
                  ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className={`md:hidden ${isDark ? 'text-white' : 'text-black'} hover:text-[#FF6B00] transition-colors relative z-50`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <motion.line
                y1="6" y2="6"
                animate={{ x1: menuOpen ? 2 : 10, x2: menuOpen ? 13 : 21 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: menuOpen ? 0 : 0.15 }}
              />
              <line x1="6" y1="12" x2="17" y2="12" />
              <motion.line
                y1="18" y2="18"
                animate={{ x1: menuOpen ? 10 : 2, x2: menuOpen ? 21 : 13 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: menuOpen ? 0.15 : 0 }}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer (Full Screen Overlay) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center overflow-hidden"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative background text */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black leading-none text-white/[0.02] select-none pointer-events-none uppercase">
              MENU
            </span>

            <div className="flex flex-col items-center gap-10 z-10">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="relative group flex items-center justify-center"
                  >
                    <span className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-300 
                      ${pathname === link.href ? 'text-[#FF6B00]' : 'text-white group-hover:text-white/60'}`}
                    >
                      {link.label}
                    </span>
                    {/* Small orange dot indicator */}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -right-6 md:-right-8 w-3 h-3 bg-[#FF6B00] rounded-full"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="absolute bottom-12 flex items-center gap-4 md:gap-6 text-white/40 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span>Built with Logic</span>
              <span className="text-[#FF6B00]">+</span>
              <span>Driven by Chaos</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

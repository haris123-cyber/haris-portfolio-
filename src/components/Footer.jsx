"use client";
import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 relative z-10 flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <p className="text-[#FF6B00] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6">What's Next?</p>
          <h3 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
            Let's <span className="font-['Playfair_Display'] italic font-normal text-white/60">Connect</span>
          </h3>
          <p className="text-white/50 text-sm md:text-base font-medium max-w-sm mx-auto md:mx-0">
            Available for freelance opportunities. Bring your chaotic ideas, and let's build something logical together.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center md:items-end gap-10">
          <div className="flex gap-4">
            {[
              { href: 'https://github.com', icon: <FaXTwitter size={20} /> },
              { href: 'https://twitter.com', icon: <FaWhatsapp size={20} /> },
              { href: 'https://linkedin.com', icon: <FaLinkedinIn size={20} /> },
              { href: 'mailto:hello@example.com', icon: <FaFacebookF size={20} /> },
            ].map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#FF6B00] hover:border-[#FF6B00]/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-white/[0.02]"
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 text-white/30 text-[10px] md:text-xs font-mono uppercase tracking-widest">
            <span>© {new Date().getFullYear()} Haris</span>
            <span className="text-[#FF6B00]/50">|</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>

      {/* Huge Background text */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden z-0">
        <span className="text-[18vw] font-black uppercase text-white/[0.02] tracking-tighter whitespace-nowrap leading-none">
          PORTFOLIO
        </span>
      </div>
    </footer>
  );
};

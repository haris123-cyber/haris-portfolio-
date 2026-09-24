"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Generate sunburst rays as SVG paths
const RAYS = 24;

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for reaching out, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="relative w-full bg-black text-white overflow-hidden selection:bg-[#D3FF36] selection:text-black">

      {/* ── GIANT ROTATING SUNBURST WHEEL ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[30%] w-[70vw] h-[70vw] md:w-[55vw] md:h-[55vw] pointer-events-none select-none z-0">
        <motion.svg
          viewBox="-1 -1 2 2"
          className="w-full h-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: RAYS }).map((_, i) => {
            const angle = (i / RAYS) * Math.PI * 2;
            const nextAngle = ((i + 0.5) / RAYS) * Math.PI * 2;
            const x1 = Math.cos(angle).toFixed(5);
            const y1 = Math.sin(angle).toFixed(5);
            const x2 = Math.cos(nextAngle).toFixed(5);
            const y2 = Math.sin(nextAngle).toFixed(5);
            return (
              <path
                key={i}
                d={`M 0 0 L ${x1} ${y1} L ${x2} ${y2} Z`}
                fill={i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)'}
              />
            );
          })}
          {/* Center circle */}
          <circle cx="0" cy="0" r="0.12" fill="rgba(255,255,255,0.06)" />
        </motion.svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 py-24 md:py-40">

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-12"
        >
          04 / Let's make something good
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-16 items-start">

          {/* ── LEFT: Headline ── */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Playfair_Display'] leading-[1.05] tracking-tight mb-10"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)' }}
            >
              Have a wild idea?<br />
              <em className="text-[#FF6B00] font-sans not-italic">I'm listening.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm"
            >
              Whether it's a startup product, freelance project, or just a great conversation — drop me a message.
            </motion.p>
          </div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} suppressHydrationWarning className="flex flex-col gap-6">

              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-[9px] uppercase tracking-[0.2em] text-white/40">Your name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="bg-transparent border-b border-white/15 text-white placeholder-white/20 text-base py-3 focus:outline-none focus:border-white/50 transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-[9px] uppercase tracking-[0.2em] text-white/40">Email address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="jane@studio.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    suppressHydrationWarning
                    className="bg-transparent border-b border-white/15 text-white placeholder-white/20 text-base py-3 focus:outline-none focus:border-white/50 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="text-[9px] uppercase tracking-[0.2em] text-white/40">Tell me what you have in mind</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="A little about your idea, timeline, and ambition..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-b border-white/15 text-white placeholder-white/20 text-base py-3 focus:outline-none focus:border-white/50 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group flex items-center justify-between gap-4 w-full bg-[#FF6B00] text-black font-bold text-sm uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors duration-300"
                >
                  <span>Send it my way</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

            </form>
          </motion.div>

        </div>

        {/* Footer bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[10px] text-white/30 uppercase tracking-widest"
        >
          <span>© 2025 Haris. All rights reserved.</span>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
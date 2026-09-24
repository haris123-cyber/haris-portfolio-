"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-black text-white pt-32 pb-20 md:pt-48 selection:bg-[#FF6B00] selection:text-black">

      {/* ── BACKGROUND IMAGE WITH FADE TO BLACK ── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          className="absolute inset-20 -mb-20 md:-inset-10 md:left-auto md:right-[10%] lg:right-[18%] w-full md:w-[70%] lg:w-[60%] bg-[url('/images/my/image.png')] bg-contain md:bg-cover bg-no-repeat bg-[position:right_80%] md:bg-top opacity-100 scale-[1.3] md:scale-100 origin-[80%_80%] md:origin-center"
        />
        {/* Gradients to fade edges into black */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        {/* Stronger fade from the left */}
        <div className="absolute inset-y-0 left-0 w-[60%] md:w-[60%] bg-gradient-to-r from-black via-black/100 md:via-black/100 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent" />
        <div className="absolute inset-0 hidden md:block" style={{ background: 'radial-gradient(circle at center, transparent 20%, black 80%)' }} />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 mb-24 md:mb-40">

        {/* Top category label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[9px] uppercase tracking-[0.3em] text-white/40 mb-12 flex items-center gap-4"
        >
          <span>Developer</span> <span className="text-white/20">/</span>
          <span>Designer</span> <span className="text-white/20">/</span>
          <span>Creative Thinker</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="relative">
            {/* Huge Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-[90px] xl:text-[110px] leading-[1] tracking-tight mb-16"
            >
              Not a pixel<br />
              pusher. <span className="block italic text-[#FF6B00] mt-2">A possibility</span>
              pusher.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 -mt-10 ml-10 sm:mt-0  sm:ml-0"
            >
              <div className="w-8 h-px bg-[#FF6B00] "></div>
              <span className="text-[9px] uppercase tracking-[0.25em] text-white/40 font-medium">Turning ideas into digital experiences</span>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="flex flex-col gap-10 md:ml-auto max-w-sm sm:pt-4 pt-0 md:pt-10">
            {/* Top Right text */}
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Playfair_Display'] text-2xl md:text-3xl lg:text-4xl text-white leading-snug"
            >
              A generalist by choice.<br />
              A perfectionist by nature.
            </motion.h3>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <p className="text-zinc-400 text-[13px] leading-loose">
                I am a Full-Stack Developer specializing in frontend and backend development. I enjoy building modern, responsive, and user-friendly web applications with a focus on clean code and simple solutions. <br /> Feel free to <span className='text-[#FF6B00]'>explore</span> my projects and get in touch if you'd like to collaborate.              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-[#D3FF36] uppercase group w-fit pb-1 border-b border-[#D3FF36]/30 hover:border-[#D3FF36] transition-colors"
              >
                <span>Read Resume</span>
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </motion.div>

            {/* Based In section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 md:mt-20 flex justify-between items-end border-t border-white/10 pt-6 "
            >
              <div className="flex flex-col gap-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">Based In</span>
                <span className="text-sm font-medium flex items-center gap-2">Kozhikode, India <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span></span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/40 mt-1">Open to Opportunities</span>
              </div>

              {/* Spinning Badge */}
              <div className="relative w-16 h-16 flex items-center justify-center">
                <motion.svg
                  viewBox="0 0 100 100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 w-full h-full text-white/30"
                >
                  <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fontSize="11" fill="currentColor" letterSpacing="2.5">
                    <textPath href="#textPath" startOffset="0%">
                      LET'S BUILD LET'S BUILD LET'S BUILD
                    </textPath>
                  </text>
                </motion.svg>
                <span className="text-[#FF6B00] text-sm">&rarr;</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>


    </section>
  );
};


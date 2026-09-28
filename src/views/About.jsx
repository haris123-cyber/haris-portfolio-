"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-black text-white h-[200vh] md:h-[250vh] selection:bg-[#FF6B00] selection:text-black">
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center">
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20">

          {/* Top category label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:text-[9px] text-[7px] uppercase tracking-[0.3em] text-white/40 sm:mb-12 mb-6 flex items-center gap-1 sm:gap-4"
          >
            <span>Developer</span> <span className="text-white/20">/</span>
            <span>Designer</span> <span className="text-white/20">/</span>
            <span>Creative Thinker</span>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 md:gap-8 items-start">

            {/* ── LEFT COLUMN ── */}
            <div className="relative z-10 pointer-events-none [&>*]:pointer-events-auto">
              {/* Huge Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white font-bold leading-[0.9] tracking-[-0.04em] mb-8 md:mb-16"
              >
                {/* Desktop Headline */}
                <div className="hidden md:block text-[80px] lg:text-[100px] xl:text-[110px]">
                  <span className="block">Build.</span>
                  <span className="block text-[#FF6B00]"> Learn.</span>
                  <span className="block">Create.</span>
                </div>
                {/* Mobile Headline */}
                <div className="md:hidden text-[40px] sm:text-[50px] mt-0 -mb-20">
                  <span className="block">Build.</span>
                  <span className="block text-[#FF6B00]">Learn.</span>
                  <span className="block">Create.</span>
                </div>
              </motion.h2>


            </div>

            {/* ── CENTER IMAGE (Mobile inline, Desktop absolute center, Tablet bottom-left) ── */}
            <div className="relative md:absolute md:top-[75%] lg:top-1/2 md:left-[25%] lg:left-[40%] md:-translate-x-1/2 md:-translate-y-1/2 w-full flex justify-center md:max-w-[280px] lg:max-w-[450px] z-0 pointer-events-none mt-2 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-full overflow-hidden shadow-2xl sm:mb-0 -mb-12"
              >
                <img
                  src="/images/my/image_copy.png"
                  alt="Haris M"
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
                {/* Bottom dark shade */}
                <div className="absolute bottom-0 left-0 w-full h-1/6  bg-gradient-to-t from-black to-transparent"></div>
              </motion.div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="flex flex-col gap-6 md:gap-10 md:ml-auto w-full md:max-w-md lg:max-w-lg sm:pt-4 pt-0 md:pt-10 relative z-10 pointer-events-none [&>*]:pointer-events-auto">
              {/* Top Right text */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[20px] sm:text-[30px] md:text-[30px] lg:text-[40px] font-bold leading-[1] tracking-[0.03em]"
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
                className="flex flex-col gap-6 ]"
              >
                <RevealText progress={scrollYProgress}  >
                  I am a Full-Stack Developer specializing in frontend and backend development. I enjoy building modern, responsive, and user-friendly web applications with a focus on clean code and simple solutions. Feel free to explore my projects and get in touch if you'd like to collaborate.
                </RevealText>

                <a
                  href="/images/Haris_M_Resume.pdf" 
                  download
                  className="inline-flex items-center gap-2 text-[8px] sm:text-[10px] tracking-[0.2em] font-bold text-[#D3FF36] uppercase group w-fit sm:pb-1 pb-0 border-b border-[#D3FF36]/30 hover:border-[#D3FF36] transition-colors sm:mb-0 -mb-12 sm:mt-0 -mt-5"
                >
                  Read Resume<i className="fas fa-download" style={{ marginLeft: '8px' }}></i>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              </motion.div>

              {/* Based In section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 md:mt-20 flex justify-between items-end border-none sm:border-t border-white/10 pt-0 sm:pt-6 sm:mt-0  "
              >
                <div className="flex flex-col sm:gap-2 gap-0  ">
                  <span className="sm:text-[8px] text-[7px] uppercase tracking-[0.2em] text-white/40">Based In</span>
                  <span className="sm:text-sm text-[12px] font-medium flex items-center gap-2">Kozhikode, India <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span></span>
                  <span className="sm:text-[8px] text-[7px] uppercase tracking-[0.2em] text-white/40 mt-1">Open to Opportunities</span>
                </div>

                {/* Spinning Badge */}
                <div className="relative w-16 h-16  flex items-center justify-center">
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
      </div>
    </section>
  );
};

const RevealText = ({ children, progress }) => {
  const words = children.split(" ");
  return (
    <p className="text-sm md:text-xl  lg:text-2xl font-medium leading-relaxed">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        // Map the word's start/end to a tighter portion of the overall scroll, e.g. from 20% to 80%
        const mappedStart = 0.2 + (start * 0.6);
        const mappedEnd = 0.2 + (end * 0.6);
        return (
          <span key={i}>
            <Word progress={progress} range={[mappedStart, mappedEnd]} word={word} />
            {i < words.length - 1 && " "}
          </span>
        );
      })}
    </p>
  );
};

const Word = ({ word, progress, range }) => {
  const characters = word.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;
  const isHighlight = word.includes("explore");

  return (
    <span className="relative inline-block">
      {characters.map((char, i) => {
        const start = range[0] + (step * i);
        const end = range[0] + (step * (i + 1));
        return <Char key={i} progress={progress} range={[start, end]} isHighlight={isHighlight}>{char}</Char>
      })}
    </span>
  );
};

const Char = ({ children, progress, range, isHighlight }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }} className={isHighlight ? "text-[#FF6B00]" : "text-white"}>{children}</motion.span>
    </span>
  );
};

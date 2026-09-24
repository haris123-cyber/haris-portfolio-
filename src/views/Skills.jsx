"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skillsList = [
  { id: "01", name: "React / Next.js", value: 85 },
  { id: "02", name: "JavaScript / TypeScript", value: 75 },
  { id: "03", name: "Python", value: 80 },
  { id: "04", name: "Django / DRF", value: 80 },
  { id: "05", name: "Tailwind CSS", value: 85 },
  { id: "06", name: "UI/UX & Creative Development", value: 80 },
  { id: "07", name: "SQL / Django ORM", value: 75 },
  { id: "08", name: "Git / GitHub", value: 80 },
  { id: "09", name: "REST API Integration", value: 75 },
];
export const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateValue = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} id="skills" className="w-full bg-black text-white relative selection:bg-[#D3FF36] selection:text-black pb-24 md:pb-40">
      <style>{`
        .skill-card {
          top: calc(360px + var(--index) * 30px);
        }
        @media (min-width: 768px) {
          .skill-card {
            top: calc(160px + var(--index) * 30px);
          }
        }
      `}</style>

      {/* Background grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-20 md:gap-12 items-start">

          {/* ── LEFT COLUMN: sticky heading ── */}
          <div className="sticky top-0 md:top-40 pt-16 md:pt-4 pb-8 z-20 bg-black">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="absolute top-6 md:top-24 left-0"
            >

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-0"
            >
              <span className="text-[9px] font-medium uppercase tracking-[0.3em] mb-6 block text-white/70">My Theory Is</span>
              <h2 className="font-['Playfair_Display']  text-6xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tight">
                LOGIC<br />
                <span className="font-sans font-light text-4xl md:text-6xl lg:text-8xl align-top text-white/50 mr-4">+</span>
                CHAOS
              </h2>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Playfair_Display'] text-2xl md:text-3xl text-white/80 leading-snug mt-8 max-w-xs"
            >
              Deep where it matters.<br />
              <span className="text-[#FF6B00]">Curious</span> everywhere else.
            </motion.h3>
          </div>

          {/* ── RIGHT COLUMN: stacking skill cards ── */}
          <div className="flex flex-col md:pl-8 xl:pl-16 pt-32 md:pt-48">
            {skillsList.map((skill, index) => (
              <div
                key={skill.id}
                className="skill-card sticky bg-black border-t border-white/[0.12]"
                style={{ '--index': index, zIndex: index + 1 }}
              >
                <motion.div
                  className="py-10 md:py-16"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-5">
                      <span className="text-[10px] font-mono text-white/40">{skill.id}</span>
                      <span className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">{skill.name}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#FF6B00]">{skill.value}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-[3px] bg-white/10 relative overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      className="absolute top-0 left-0 h-full bg-[#FF6B00]"
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";


import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

const frames = [
  "frame_001.png", "frame_002.png", "frame_003.png", "frame_004.png", "frame_005.png",
  "frame_006.png", "frame_007.png", "frame_008.png", "frame_009.png", "frame_011.png",
  "frame_012.png", "frame_013.png", "frame_014.png", "frame_015.png", "frame_016.png",
  "frame_017.png", "frame_018.png", "frame_019.png", "frame_020.png", "frame_021.png",
  "frame_022.png", "frame_023.png", "frame_024.png", "frame_025.png", "frame_026.png",
  "frame_027.png", "frame_028.png", "frame_029.png", "frame_030.png", "frame_031.png",
  "frame_032.png", "frame_033.png", "frame_034.png", "frame_035.png", "frame_036.png",
  "frame_037.png", "frame_038.png", "frame_039.png", "frame_040.png", "frame_041.png",
  "frame_042.png", "frame_043.png", "frame_044.png", "frame_045.png", "frame_046.png",
  "frame_047.png", "frame_048.png", "frame_050.png", "frame_051.png", "frame_052.png",
  "frame_053.png", "frame_054.png", "frame_055.png", "frame_060.png", "frame_061.png",
  "frame_062.png", "frame_063.png", "frame_064.png", "frame_065.png", "frame_066.png",
  "frame_067.png", "frame_068.png", "frame_069.png", "frame_070.png", "frame_071.png",
  "frame_072.png", "frame_073.png", "frame_074.png", "frame_075.png", "frame_076.png",
  "frame_077.png", "frame_078.png", "frame_079.png", "frame_080.png", "frame_081.png",
  "frame_082.png", "frame_083.png", "frame_084.png", "frame_085.png", "frame_086.png",
  "frame_087.png", "frame_088.png", "frame_089.png", "frame_090.png", "frame_091.png",
  "frame_092.png", "frame_093.png", "frame_094.png", "frame_095.png", "frame_096.png",
  "frame_097.png", "frame_098.png", "frame_099.png", "frame_100.png", "frame_101.png",
  "frame_102.png", "frame_103.png", "frame_104.png", "frame_105.png", "frame_106.png",
  "frame_107.png", "frame_108.png", "frame_109.png", "frame_110.png", "frame_111.png",
  "frame_112.png", "frame_113.png", "frame_114.png", "frame_115.png", "frame_116.png",
  "frame_117.png", "frame_118.png", "frame_119.png", "frame_120.png", "frame_121.png",
  "frame_122.png", "frame_123.png", "frame_124.png", "frame_125.png", "frame_126.png",
  "frame_127.png", "frame_128.png", "frame_129.png", "frame_130.png", "frame_131.png",
  "frame_132.png", "frame_133.png", "frame_134.png", "frame_135.png", "frame_136.png",
  "frame_137.png", "frame_138.png", "frame_139.png", "frame_140.png", "frame_141.png",
  "frame_142.png", "frame_143.png", "frame_144.png", "frame_145.png", "frame_146.png",
  "frame_147.png", "frame_148.png", "frame_149.png", "frame_150.png", "frame_151.png",
  "frame_152.png", "frame_153.png", "frame_154.png", "frame_155.png", "frame_156.png",
  "frame_157.png", "frame_158.png", "frame_159.png", "frame_160.png", "frame_161.png",
  "frame_162.png", "frame_163.png", "frame_164.png", "frame_165.png", "frame_166.png",
  "frame_167.png", "frame_168.png", "frame_169.png", "frame_170.png", "frame_171.png",
  "frame_172.png", "frame_173.png", "frame_174.png", "frame_175.png", "frame_176.png",
  "frame_177.png", "frame_178.png", "frame_179.png", "frame_180.png", "frame_181.png",
  "frame_182.png", "frame_183.png", "frame_184.png", "frame_185.png", "frame_186.png",
  "frame_187.png", "frame_188.png", "frame_189.png", "frame_190.png", "frame_191.png",

];

const totalFrames = frames.length;

export const Home = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const roles = ["Full-Stack Developer", "Freelancer", "UI/UX Designer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeText, setActiveText] = useState('left');

  // Typewriter effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const delay = currentText === roles[currentRoleIndex] && !isDeleting ? 2000 :
      currentText === "" && isDeleting ? 500 : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === roles[currentRoleIndex]) {
        setIsDeleting(true);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? roles[currentRoleIndex].substring(0, currentText.length - 1)
          : roles[currentRoleIndex].substring(0, currentText.length + 1);
        setCurrentText(nextText);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frame98Index = frames.indexOf("frame_098.png");

  // Preload images
  useEffect(() => {
    let settledCount = 0;
    const loadedImages = new Array(frames.length);
    const threshold = Math.floor(frames.length * 0.7); // show after 70% loaded

    const onSettle = () => {
      settledCount++;
      if (settledCount >= threshold && !isLoaded) setIsLoaded(true);
    };

    const CLOUDINARY_CDN = 'https://res.cloudinary.com/zuvsmr0q/image/upload/portfolio-hero/';

    frames.forEach((src, index) => {
      const img = new Image();
      // Load from Cloudinary CDN (works on Vercel — no Git LFS dependency)
      img.src = `${CLOUDINARY_CDN}${src}`;
      img.onload = onSettle;
      img.onerror = onSettle;
      loadedImages[index] = img;
    });
    setImages(loadedImages);

    // Safety fallback — always show after 8s no matter what
    const timeout = setTimeout(() => setIsLoaded(true), 8000);
    return () => clearTimeout(timeout);
  }, []);

  const drawImage = (index) => {
    if (!canvasRef.current || !images[index]) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = images[index];
    if (img.complete && img.naturalWidth > 0) {
      const canvasAspect = canvas.width / canvas.height;
      const imgAspect = img.width / img.height;
      let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
      if (imgAspect > canvasAspect) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgAspect;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgAspect;
      }
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = (canvas.height - drawHeight) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    let frameIndex = Math.min(Math.floor(latest * totalFrames), totalFrames - 1);
    frameIndex = isNaN(frameIndex) ? 0 : frameIndex;
    drawImage(frameIndex);

    if (frameIndex >= frame98Index && activeText !== 'right') {
      setActiveText('right');
    } else if (frameIndex < frame98Index && activeText !== 'left') {
      setActiveText('left');
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        const currentProgress = scrollYProgress.get();
        let frameIndex = Math.min(Math.floor(currentProgress * totalFrames), totalFrames - 1);
        frameIndex = isNaN(frameIndex) ? 0 : frameIndex;
        drawImage(frameIndex);
      }
    };
    if (isLoaded) handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, scrollYProgress]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section ref={containerRef} className="relative bg-black" style={{ height: '500vh' }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          {/* Canvas */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[1]">
            <div className="absolute inset-0 hero-inner-shadow pointer-events-none z-10" />
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 z-[2] pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.95) 100%)' }} />





          {isLoaded && (
            <AnimatePresence mode="wait">
              {activeText === 'left' ? (
                <motion.div
                  key="left"
                  className="absolute inset-0 pointer-events-none z-[4]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute left-4 sm:left-10 xl:left-40 bottom-10 sm:top-2/5 -translate-y-1/2 flex flex-col gap-5 items-start max-w-[340px] pointer-events-auto">
                    <p className="text-amber-400 text-sm font-bold tracking-[0.3em] uppercase">Hi there!</p>

                    <div>
                      <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-2">I am</p>
                      <h1 className="text-white text-6xl md:text-7xl font-extrabold leading-none border-b-4 border-white pb-2">
                        Haris
                      </h1>
                    </div>

                    <h2 className="text-white text-base font-light flex flex-wrap items-center gap-1">
                      <span className="font-bold text-[#FF6B00] text-base uppercase tracking-wide">{currentText}</span>
                      <span className="animate-blink font-light text-white">|</span>
                    </h2>

                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                      Passionate about creating exceptional digital experiences that blend
                      innovative design with functional development.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="right"
                  className="absolute inset-0 pointer-events-none z-[4]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute right-6 sm:right-4 md:right-10 xl:right-40 sm:top-3/4  top-2/3 -translate-y-1/2 flex flex-col items-center max-w-[340px] pointer-events-auto">

                    {/* Heading */}


                    {/* Social Links */}
                    <div className="flex flex-col gap-4">

                      {[
                        {
                          href: "https://instagram.com/",
                          label: "Instagram",
                          icon: <FaInstagram size={16} />,
                        },
                        {
                          href: "https://facebook.com/",
                          label: "Facebook",
                          icon: <FaFacebookF size={16} />,
                        },
                        {
                          href: "https://wa.me/",
                          label: "WhatsApp",
                          icon: <FaWhatsapp size={16} />,
                        },
                        {
                          href: "https://linkedin.com/",
                          label: "LinkedIn",
                          icon: <FaLinkedinIn size={16} />,
                        },
                        {
                          href: "https://x.com/",
                          label: "Twitter",
                          icon: <FaXTwitter size={16} />,
                        },
                      ].map(({ href, label, icon }, index) => (
                        <motion.a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                          }}
                          className="group flex items-center justify-end gap-4 text-white/50 hover:text-white transition-colors duration-300"
                        >


                          {/* Circular Icon */}
                          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.02] transition-all duration-300 group-hover:border-[#FF6B00] group-hover:text-[#FF6B00] group-hover:scale-110 group-hover:bg-[#FF6B00]/10">
                            {icon}
                          </div>
                        </motion.a>
                      ))}

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}

          {/* Scroll Indicator */}


          {/* Loading */}
          {!isLoaded && (
            <div className="absolute z-[5] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              text-white text-lg font-semibold tracking-widest animate-pulse">
              Loading Experience...
            </div>
          )}
        </div>
      </section>

      <About />
      <Skills />
      <Projects />

      {/* ── MOTIVATIONAL QUOTE BREAK ── */}
      <section
        className="relative w-full h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #ffffff 50%, #080808 50%)",
        }}
      >
        {/* Decorative quotation mark */}


        {/* Decorative CREATE — top left (white half) */}
        <span
          className="absolute top-[-40px] md:top-[-70px]
    left-[-10px] text-[7rem] md:text-[13rem]
    font-black leading-none text-black/[0.04]
    select-none pointer-events-none"
        >
          CREATE
        </span>

        {/* Decorative CREATE — bottom right (black half) */}
        <span
          className="absolute bottom-[-30px] md:bottom-[-65px]
    right-[-10px] text-[7rem] md:text-[13rem]
    font-black leading-none text-white/[0.025]
    select-none pointer-events-none"
        >
          CREATE
        </span>

        {/* Quote content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}

          className="relative z-10 w-full max-w-5xl mx-auto px-5 md:px-8 sm:mt-10 mt-5 text-center"
        >
          {/* First line */}
          <p
            className="font-['Playfair_Display'] text-2xl sm:text-3xl
      md:text-5xl lg:text-6xl font-bold leading-tight
      tracking-tight text-black "
          >
            "The best way to predict the future
          </p>

          {/* Second line */}
          <p
            className="font-['Playfair_Display'] text-2xl sm:text-3xl
      md:text-5xl lg:text-6xl font-bold leading-tight
      tracking-tight text-white mt-2"
          >
            is to{" "}
            <em className="not-italic text-[#FF6B00]">create</em>
            {" "}it."
          </p>

          {/* Author */}
          <p
            className="mt-7 md:mt-9 text-[10px] md:text-sm
      uppercase tracking-[0.35em] font-semibold text-white/50"
          >
            — PETER DRUCKER
          </p>
        </motion.div>
      </section>

      <Contact />
    </div>
  );
};

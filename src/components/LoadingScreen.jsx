"use client";

import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome-screen"
          className="fixed inset-0 z-[9999] bg-[#0d1113] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Ambient glow */}
          <motion.div
            className="absolute w-[280px] h-[280px] rounded-full bg-purple-500/10 blur-[100px]"
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Main animation */}
          <div className="relative w-[180px] h-[120px]">

            <svg
              viewBox="0 0 180 120"
              className="absolute inset-0 w-full h-full overflow-visible"
            >
              <defs>

                {/* Main rainbow gradient */}
                <linearGradient
                  id="welcomeGradient"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#fab115ff" />
                  <stop offset="20%" stopColor="#f97316" />
                  <stop offset="45%" stopColor="#cf820dff" />
                  <stop offset="70%" stopColor="#e26e38ff" />
                  <stop offset="100%" stopColor="#a83e00ff" />
                </linearGradient>

                {/* Glow */}
                <filter
                  id="welcomeGlow"
                  x="-100%"
                  y="-100%"
                  width="300%"
                  height="300%"
                >
                  <feGaussianBlur
                    stdDeviation="5"
                    result="blur"
                  />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

              </defs>

              {/* Glow trail */}
              <motion.path
                d="
                  M 20 75
                  C 40 95, 55 90, 72 68
                  C 88 48, 100 25, 125 28
                  C 138 30, 145 25, 158 22
                "
                fill="none"
                stroke="url(#welcomeGradient)"
                strokeWidth="18"
                strokeLinecap="round"
                opacity="0.18"
                filter="url(#welcomeGlow)"
                animate={{
                  pathLength: [0.15, 1],
                  pathOffset: [0, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main flowing shape */}
              <motion.path
                d="
                  M 20 75
                  C 40 95, 55 90, 72 68
                  C 88 48, 100 25, 125 28
                  C 138 30, 145 25, 158 22
                "
                fill="none"
                stroke="url(#welcomeGradient)"
                strokeWidth="10"
                strokeLinecap="round"
                filter="url(#welcomeGlow)"
                animate={{
                  pathLength: [0.15, 1, 0.15],
                  pathOffset: [0, 0.8, 1],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Moving particle */}
              <motion.circle
                r="5"
                fill="#ee7422ff"
                filter="url(#welcomeGlow)"
                animate={{
                  cx: [20, 40, 72, 100, 125, 158],
                  cy: [75, 92, 68, 32, 28, 22],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

            </svg>
          </div>

          {/* WELCOME */}
          <motion.div
            className="mt-2 text-white text-[13px] sm:text-[15px] tracking-[0.65em] font-medium"
            initial={{
              opacity: 0,
              y: 15,
              letterSpacing: "0.2em",
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
              y: 0,
              letterSpacing: "0.65em",
            }}
            transition={{
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              },
              letterSpacing: {
                duration: 1,
                ease: "easeOut",
              },
            }}
          >
            WELCOME
          </motion.div>

          {/* Small subtitle */}
          <motion.div
            className="mt-4 text-[8px] uppercase tracking-[0.4em] text-white/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            My Portfolio
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
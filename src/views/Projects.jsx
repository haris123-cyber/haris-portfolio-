"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const allProjects = [
  {
    id: "woxly",
    number: "01",
    title: "WOXLY — Grocery E-commerce Platform",

    category: "Client Project / E-commerce / Frontend Development",

    description:
      "Developed a modern grocery e-commerce storefront for Woxly, a real-world business. Focused on building a responsive shopping experience, implementing reusable UI components, integrating product data, and creating an intuitive interface for online shopping.",

    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

    projectType: "Client Project",
    status: "Live",

    github: "#",
    live: "YOUR_ACTUAL_WOXLY_WEBSITE_URL",
    image: null,
  },

  {
    id: "zento",
    number: "07",
    title: "Zento — Smart Ride Booking Platform",
    category: "Ride-Hailing / Full-Stack Development / Mobility",

    description:
      "An Uber-inspired ride-booking platform designed to simplify urban transportation. The platform focuses on seamless ride booking, convenient pickup and drop-off selection, ride management, and an intuitive user experience connecting passengers with drivers.",

    tech: ["React", "Python", "Django", "Tailwind CSS", "REST API"],

    projectType: null,
    status: null,


    github: "#",
    live: "#",
    image: "/images/projects/zento.png",
  },

  {
    id: "forjobs",
    number: "03",
    title: "ForJobs — Job Recruitment Platform",
    category: "Full-Stack Development / Job Portal",

    description:
      "A job recruitment web application designed to connect job seekers with employment opportunities. Includes job listings, application forms, CV uploads, user authentication, and application status tracking, with Django handling the backend functionality.",

    tech: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "Bootstrap",
      "SQLite",
    ],

    github: "#",
    live: "#",
    image: "/images/projects/job project.png",
  },

  {
    id: "leaskart",
    number: "04",
    title: "Leaskart — E-commerce Platform",
    category: "E-commerce / Web Development",

    description:
      "An e-commerce platform concept focused on creating a smooth online shopping experience. Designed around intuitive navigation, product discovery, responsive layouts, and an organized product presentation.",

    tech: ["React", "JavaScript", "Tailwind CSS", "REST API"],

    github: "#",
    live: "#",
    image: "/images/projects/leasekart.png",
  },

  {
    id: "property-management",
    number: "05",
    title: "Property Management Portal",
    category: "Web Application / Property Management",

    description:
      "A property management web application designed to organize property information and simplify day-to-day management tasks. The platform can provide structured property listings, tenant information, and management workflows through an accessible interface.",

    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "SQLite"],

    github: "#",
    live: "#",
    image: null,
  },
];

export const Projects = () => {
  return (
    <section className="bg-white text-[#111827] py-20 md:py-32">
      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF6B00] mb-4 block">Selected Work</span>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-4">
            Projects that bring <span className="text-[#FF6B00]">ideas</span> to life.
          </h2>
          <p className="text-[#4B5563] text-lg leading-relaxed max-w-2xl">
            A collection of my recent work, showcasing my skills in web development, UI/UX, and creative problem-solving.
          </p>
        </motion.div>

        {/* Project Cards List */}
        <div className="flex flex-col pb-16 md:pb-36 mt-10">
          {allProjects.map((project, index) => {
            const titleParts = project.title.split(' — ');

            return (
              <div
                key={project.id}
                className="sticky top-0 w-full bg-white pt-12 pb-16 md:pt-32 md:pb-32 shadow-[0_-20px_40px_rgba(0,0,0,0.02)]"
                style={{ zIndex: index }}
              >
                <motion.div
                  className="max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 md:gap-16 lg:gap-20 xl:gap-32 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Content (Left) */}
                  <div className="flex flex-col justify-center order-last md:order-first">
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#FF6B00] mb-4 md:mb-8">
                      {project.category}
                    </span>

                    <h3 className="text-4xl md:text-5xl lg:text-[70px] xl:text-[85px] font-black uppercase leading-[0.9] tracking-tighter mb-4 md:mb-8 text-[#111]">
                      {titleParts[0]}
                      {titleParts[1] && (
                        <>
                          <br />
                          <span className="text-zinc-400/80 text-3xl md:text-[40px] lg:text-[60px] xl:text-[70px]">{titleParts[1]}</span>
                        </>
                      )}
                    </h3>

                    <p className="text-zinc-500 text-xs md:text-base leading-relaxed max-w-sm mb-4 md:mb-4 font-medium text-justify">
                      {project.description}
                    </p>
                    <div className="flex flex-col gap-1 mb-5 md:mb-5">
                      {project.projectType && (
                        <p className="flex items-center gap-2 text-[#FF6B00] text-sm md:text-base leading-relaxed max-w-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" /> {project.projectType}
                        </p>
                      )}
                      {project.status && (
                        <p className="flex items-center gap-2 text-[#FF6B00] text-sm md:text-base leading-relaxed max-w-sm font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" /> {project.status}
                        </p>
                      )}
                    </div>
                    <a href={project.live} className="flex items-center gap-4 group w-fit">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full border border-black/10 group-hover:border-[#FF6B00]/50 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#111] group-hover:text-[#FF6B00] transition-colors">View Project</span>
                    </a>
                  </div>

                  {/* Image Mockup (Right) */}
                  <div className="relative w-full aspect-[16/10] md:aspect-[16/11] rounded-2xl md:rounded-3xl bg-zinc-100 shadow-[0_30px_60px_rgba(0,0,0,0.08)] overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/60 to-zinc-300/60 transition-transform duration-700 group-hover:scale-105" />

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-black text-3xl md:text-5xl tracking-tight opacity-40 mix-blend-overlay uppercase transition-transform duration-700 group-hover:scale-105">
                        {project.id} render
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

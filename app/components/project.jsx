"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function Project() {
  const [activeTab, setActiveTab] = useState("tab1");

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={
        id === activeTab
          ? "text-[#f05b27]"
          : "text-gray-400 hover:text-[#f05b27]"
      }
    >
      {children}
    </button>
  );

  const ProjectCard = ({ src }) => (
    <motion.div variants={fadeUp}>
      <div>
        <img src={src} alt="Project" />
      </div>
      <div className="mt-10">
        <h3 className="text-[32px] mb-2 text-[#f05b27]">Amara Aanya</h3>
        <h4 className="text-2xl text-[#f05b27]">
          St. Mary's Road, <br />
          Alwarpet
        </h4>
        <p className="mt-4 leading-relaxed">
          <strong>1,92,000 sq. ft. </strong> of ultra luxury
          <br />
          <strong>17</strong> spectacular levels
          <br />
          <strong>38</strong> signature residences
        </p>
      </div>
    </motion.div>
  );

  const ongoing = [
    "/images/projects/complete/proj-1.jpg",
    "/images/projects/complete/proj-2.jpg",
    "/images/projects/complete/proj-3.jpg",
    "/images/projects/complete/proj-4.jpg",
  ];

  const completed = [
    "/images/projects/complete/proj-4.jpg",
    "/images/projects/complete/proj-3.jpg",
    "/images/projects/complete/proj-2.jpg",
    "/images/projects/complete/proj-1.jpg",
  ];

  return (
    <div className="py-20">
      <div className="relative">
        <span className="absolute top-3 -left-16 block text-[rgba(132,132,132,0.5)] tracking-[0.15rem] uppercase transform rotate-90 origin-top-left">
          Projects
        </span>
        <h2 className="text-5xl font-semibold">Our Project.</h2>
      </div>

      <div className="mt-10 flex gap-x-10 text-lg">
        <TabButton id="tab1">Ongoing</TabButton>
        <TabButton id="tab2">Completed</TabButton>
      </div>

      <div className="mt-10 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10"
          >
            {(activeTab === "tab1" ? ongoing : completed).map((img, idx) => (
              <ProjectCard key={idx} src={img} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

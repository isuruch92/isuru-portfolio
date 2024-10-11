"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import useSectionInView from "@/hooks/useSectionInView";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[48rem] text-center leading-8 sm:mb-40 scroll-mt-32"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        Hello! I&apos;m a dedicated software engineer with over 8 years of
        experience in frontend development and full-stack solutions. I love
        working with <span className="underline">React</span>,&nbsp;
        <span className="underline">Angular</span>,&nbsp;
        <span className="underline">JavaScript </span>,&nbsp;
        <span className="underline">TypeScript</span>&nbsp; and{" "}
        <span className="underline">HTML/CSS</span> to craft intuitive and
        user-friendly web interfaces.
      </p>
      <p className="mb-3 text-justify">
        I find incredible satisfaction in seeing my creations come to life,
        fueling my passion for frontend development. Beyond coding, I enjoy
        conducting code reviews, mentoring newcomers, and communicating with
        stakeholders. My adaptability, organizational skills, and reliability
        help me tackle issues and contribute effectively to projects.
      </p>
      <p className="mb-3 text-justify">
        I thrive on solving complex challenges, learning new technologies, and
        building strong relationships. Teamwork and clear communication are
        central to my approach, whether collaborating within my team or with
        other departments.
      </p>
      <p className="text-justify">
        Outside of work, I&apos;m passionate about traveling. Exploring new
        destinations, immersing in different cultures, and drawing inspiration
        from my journeys broaden my perspective and recharge my creativity.
        Additionally, I enjoy building LEGO vehicle models and diving into video
        games during my downtime.
      </p>
    </motion.section>
  );
}

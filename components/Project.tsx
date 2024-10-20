"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";
import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import ProjectCTA from "./ProjectCTA";

type ProjectProps = {
  project: (typeof projectsData)[number];
};

export default function Project({ project }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const { title, description, tags, imageUrl, demoLink, githubLink } = project;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-50 max-w-[45rem] borderBlack rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:shadow-2xl transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pt-6 sm:pl-6 sm:pr-2 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[21rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>

          <div className="sm:hidden my-4 h-[160px] overflow-hidden rounded-lg relative">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="hover:-translate-y-3 transition"
            />
            <ProjectCTA
              demoLink={demoLink}
              githubLink={githubLink}
              positionClasses="top-[60px] left-1/2 -translate-x-[70px]"
            />
          </div>

          <p className="my-2 leading-relaxed text-slate-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block
          absolute top-8 -right-52 w-[35rem] rounded-t-lg shadow-2xl transition
          group-even:-right-[initial] 
          group-even:-left-52  
          group-hover:scale-[1.04]

          group-hover:-translate-x-3
          group-hover:-translate-y-3
          group-hover:-rotate-2
          
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2"
        ></Image>

        <div className="hidden sm:block">
          <ProjectCTA
            demoLink={demoLink}
            githubLink={githubLink}
            positionClasses="top-1/2 right-24 transform -translate-y-1/2 group-even:left-24"
          />
        </div>
      </section>
    </motion.div>
  );
}

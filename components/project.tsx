"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "@/lib/data";

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

  const { title, description, tags, imageUrl } = project;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-50 max-w-[43rem] rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:shadow-2xl transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pt-8 sm:pl-8 sm:pr-2 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-slate-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
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
          absolute top-8 -right-52 w-[33rem] rounded-t-lg shadow-2xl transition
        group-even:-right-[initial] 
        group-even:-left-52  
        group-hover:scale-[1.04]

        group-hover:-translate-x-3
        group-hover:-translate-y-3
        group-hover:-rotate-2
        
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}

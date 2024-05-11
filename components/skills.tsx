"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import useSectionInView from "@/hooks/useSectionInView";
import { skillsData } from "@/lib/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[48rem] scroll-mt-32 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <Tooltip
        className="transition duration-100"
        id="my-tooltip"
        opacity={1}
        border="2px solid #aaaaaa"
        style={{
          backgroundColor: "rgb(57, 222, 248)",
          color: "#000",
          fontWeight: 600,
          fontSize: "18px",
          borderRadius: "12px",
        }}
      />
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-slate-800 mt-12">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <li
              className="bg-slate-50 shadow-lg rounded-xl m-auto w-16 h-16 flex justify-center items-center 
              hover:shadow-2xlhover:bg-slate-100 hover:scale-[1.15] hover:rotate-2 
              cursor-pointer border border-slate-300 transition duration-300"
              data-tooltip-id="my-tooltip"
              data-tooltip-content={skill.name}
              data-tooltip-place="top"
            >
              <Image
                src={`/logos/${skill.id}.${skill.ext}`}
                object-fit="cover"
                alt="product logo"
                quality={99}
                priority={true}
                className="rounded-xl"
                width={64}
                height={64}
              />
            </li>
          </motion.div>
        ))}
      </ul>
    </section>
  );
}

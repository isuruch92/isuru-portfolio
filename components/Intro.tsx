"use client";

import React from "react";
import { motion } from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import Avatar from "./Avatar";
import HeroCTA from "./HeroCTA";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.4);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-20 max-w-[62rem] sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col smx1:flex-row gap-4 sm:gap-6 smx1:gap-6">
        <div className="flex smx1:hidden items-center justify-center">
          <Avatar />
        </div>

        <div className="flex flex-col justify-start items-center xsx1:items-start">
          <motion.h1
            className="mb-6 mt-0  smx1:mt-6 sm:px-4 text-lg font-medium sm:!leading-[2] sm:tracking-wide 
            text-justify sm:text-start sm:text-xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">
              <span className="text-xl sm:text-3xl ">Hello,</span>{" "}
              <span className="text-2xl sm:text-4xl text-amber-600">
                I&apos;m Isuru,
              </span>
            </span>
            <div className="sm:h-2"></div>A seasoned{" "}
            <span className="font-bold text-[#00a7ff]">
              full-stack developer
            </span>{" "}
            with&nbsp;
            <span className="font-bold text-amber-600">8+ years</span> of
            experience building{" "}
            <span className="italic text-[#1c948d] dark:text-[#00fff7]">
              intuitive & responsive
            </span>{" "}
            web platforms. Proficient in{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Angular</span>,{" "}
            <span className="font-bold">JavaScript</span>, &{" "}
            <span className="font-bold">TypeScript</span>
          </motion.h1>

          {/* This will be shown below 850px */}
          {/* should be hidden between 700px-800px */}
          {/* <div className="hidden justify-start smx4:flex smx2:!hidden transition-all">
            <HeroCTA />
          </div>           */}
          <div className="justify-start transition-all">
            <HeroCTA />
          </div>
        </div>

        <div className="hidden smx1:flex items-start justify-center">
          <Avatar />
        </div>
      </div>

      {/* This will be shown from 850px onwards */}
      {/* as well as 700px-800px */}
      {/* <div className="hidden smx2:flex smx2:mt-6 mdx1:flex justify-start mdx2:max-w-[425px] mdx2:mt-[-80px] mdx3:mt-[-80px] lg:mt-[-80px] transition-all">
        <HeroCTA />
      </div> */}
    </section>
  );
}

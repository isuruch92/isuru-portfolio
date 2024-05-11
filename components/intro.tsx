"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useSectionInView from "@/hooks/useSectionInView";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.4);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="h-40 w-40 rounded-full relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            fill={true}
            src="/avatar.png"
            alt="Isuru avatar"
            quality={95}
            priority={true}
            className="h-50 w-50 rounded-full relative border-[0.35rem] border-blue-300 shadow-xl"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.8] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          <span className="text-xl sm:text-3xl ">Hello,</span>{" "}
          <span className="text-2xl sm:text-4xl text-amber-600">
            I&apos;m Isuru,
          </span>
        </span>
        <br></br>
        your seasoned{" "}
        <span className="font-bold text-cyan-600">
          full-stack developer
        </span>{" "}
        with a robust{" "}
        <span className="font-bold text-indigo-700">7+ years</span> crafting
        <span className="text-teal-500 font-semibold"> full-stack</span>{" "}
        solutions. Fluent in{" "}
        <span className="text-blue-500">
          React (Next.js), <span className="text-red-600">Angular</span>
        </span>
        , and <span className="text-orange-600">JavaScript</span>, I build
        intuitive,{" "}
        <span className="italic text-cyan-700">responsive web platforms</span>.
        Beyond code, I mentor, review, and innovate—driving projects to success
        with <span className="font-bold text-purple-600">efficiency</span> and{" "}
        <span className="font-bold text-fuchsia-600">collaboration</span>.
        {/* Let&apos;s make your digital vision a reality. */}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group bg-slate-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-slate-950 active:scale-105 transition shadow-lg"
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none shadow-lg 
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-70 group-hover:opacity-100 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-[#0077B5] p-4 flex items-center gap-2 rounded-full 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/isuruc/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white text-slate-700 text-[1.35rem] p-4 flex items-center gap-2 rounded-full 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/isuruch92"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

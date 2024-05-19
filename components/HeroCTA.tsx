"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function HeroCTA() {
  return (
    <motion.div
      className="flex flex-wrap flex-col xsx1:flex-row items-center justify-center gap-4 smx3:gap-2 px-4 smx3:px-0 text-lg font-medium"
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

      <div className="flex flex-row gap-4">
        <a
          className="w-[54px] h-[54px] flex items-center justify-center bg-white text-[#0077B5] p-4 gap-2 rounded-full shadow-lg
focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/isuruc/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="w-[54px] h-[54px] flex items-center bg-white text-slate-700 text-[1.35rem] p-4 gap-2 rounded-full shadow-lg 
focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/isuruch92"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </motion.div>
  );
}

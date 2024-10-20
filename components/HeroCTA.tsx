"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSection } from "@/context/active-section-context";
import useScreenSize from "@/hooks/userScreenSize";

export default function HeroCTA() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();
  const screenSize = useScreenSize();
  const screenWidth = screenSize.width;

  return (
    <motion.div
      className="flex flex-wrap flex-row items-center justify-center 
      gap-4 smx3:gap-2 xsx1:px-4 smx3:px-0 text-lg font-medium"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Link
        href="#contact"
        className="group bg-slate-800 text-white px-3 py-1.5 xsx1:px-7 xsx1:py-3 flex items-center gap-2 rounded-full outline-none 
        buttonInteractive hover:bg-slate-950 transition shadow-lg"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
      >
        {screenWidth > 420 ? "Contact me" : "Contact"}
        <BsArrowRight className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition" />
      </Link>

      <a
        className="group bg-white px-3 py-1.5 xsx1:px-7 xsx1:py-3 flex items-center gap-2 rounded-full outline-none shadow-lg 
        buttonInteractive transition cursor-pointer borderBlack dark:bg-white/20"
        href="/CV.pdf"
        download={true}
      >
        {screenWidth > 420 ? "Download CV" : "CV"}
        <HiDownload className="opacity-70 group-hover:opacity-100 group-hover:translate-y-1 transition" />
      </a>

      <div className="flex flex-row gap-4">
        <a
          className="w-[44px] h-[44px] xsx1:w-[54px] xsx1:h-[54px] flex items-center justify-center bg-white text-[#0077B5] 
          p-0 xsx1:p-4 gap-2 rounded-full shadow-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20 dark:text-white/90"
          href="https://www.linkedin.com/in/isuruc/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="w-[44px] h-[44px] xsx1:w-[54px] xsx1:h-[54px] flex items-center justify-center bg-white text-slate-700 text-[1.35rem] 
          p-0 xsx1:p-4 gap-2 rounded-full shadow-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/20 dark:text-white/90"
          href="https://github.com/isuruch92"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </div>
    </motion.div>
  );
}

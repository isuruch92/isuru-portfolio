"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

import { links } from "@/lib/data";
import { useActiveSection } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.03] 
      backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-slate-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ x: "-50%", y: -100, opacity: 0 }}
        animate={{ x: "-50%", y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.6,
          stiffness: 180,
        }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.6,
                stiffness: 180,
              }}
            >
              {/* clsx library allows us to apply conditional tailwind styles, like below
                all we need to do is to wrap the styles with {} and add clsx function
                and we can add conditional styles based on some variable after a comma to base styles and inside new {}
                eg: { "text-slate-950": activeSection === link.name }
              */}
              <Link
                className={clsx(
                  "w-full flex items-center justify-center px-3 py-3 hover:text-slate-950 transition duration-300 dark:text-slate-300 dark:hover:text-slate-50",
                  {
                    "text-slate-950 dark:text-slate-50":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  /* to animate this active blob of the nav item, framer motion uses the same layoutId to track the change of 
                  the active link and animates the transition */
                  <motion.span
                    className="bg-slate-200 rounded-full absolute inset-0 -z-10 dark:bg-slate-700"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

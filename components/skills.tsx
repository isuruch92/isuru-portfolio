"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import ReactFlipCard from "reactjs-flip-card";
import Image from "next/image";
import useSectionInView from "@/hooks/useSectionInView";
import { categorizedSkillsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

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
  const { ref } = useSectionInView("Skills", 0.45);
  const { theme } = useTheme();

  let styles = {
    card: {
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[52rem] scroll-mt-32 text-center sm:mb-40"
    >
      <SectionHeading>My skills & Technologies I have mastered</SectionHeading>

      {categorizedSkillsData.map((category, idx) => (
        <div key={category.category}>
          <motion.h3
            className="text-lg font-bold max-[500px]:text-left text-slate-700 dark:text-white/70"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={idx}
          >
            {category.category}
          </motion.h3>
          <ul className="flex flex-wrap max-[500px]:justify-start justify-center gap-4 text-lg text-slate-800 mt-6 mb-6">
            {category.skills.map((skill, index) => (
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
                <ReactFlipCard
                  containerStyle={{ width: 100, height: 100 }}
                  frontStyle={{
                    ...styles.card,
                    background:
                      theme === "light"
                        ? "#fefefe"
                        : "rgba(150, 150, 150, 0.2)",
                    color: theme === "light" ? "#1b1b1b" : "#FFF",
                  }}
                  backStyle={{
                    ...styles.card,
                    background:
                      theme === "light"
                        ? "#fefefe"
                        : "rgba(150, 150, 150, 0.2)",
                    color: theme === "light" ? "#1b1b1b" : "#FFF",
                  }}
                  frontComponent={
                    <Image
                      src={
                        skill.isLocalAsset ||
                        (theme === "dark" && skill.isDarkModeLocalAsset)
                          ? `/logos/${skill.id}.${skill.ext}`
                          : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${
                              skill.id
                            }/${skill.id}-${
                              theme === "dark" && skill.isDarkModePlain
                                ? "plain-wordmark"
                                : skill.isPlain
                                ? "plain"
                                : skill.isPlainWordmark
                                ? "plain-wordmark"
                                : skill.isOriginalWordMark
                                ? "original-wordmark"
                                : "original"
                            }.svg`
                      }
                      alt={skill.name}
                      width={86}
                      height={86}
                      quality={99}
                      priority={true}
                    />
                  }
                  backComponent={
                    <div className="flex flex-col">
                      <div
                        className={
                          skill.isSmallFont ? "text-xs font-bold" : "font-bold"
                        }
                      >
                        {skill.name}
                      </div>
                      {skill.version && (
                        <div className="text-xs font-bold">{skill.version}</div>
                      )}
                    </div>
                  }
                />
              </motion.div>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

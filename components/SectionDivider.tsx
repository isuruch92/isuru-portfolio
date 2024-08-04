"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const styles: { [key: string]: React.CSSProperties } = {
  mouse: {
    height: "40px",
    width: "22px",
    borderRadius: "10px",
    border: "2px solid black",
    position: "relative",
  },
  wheel: {
    height: "10px",
    width: "3px",
    display: "block",
    margin: "5px auto",
    background: "black",
    position: "relative",
    animation: "mouse-wheel 1.2s ease infinite",
  },
  span: {
    display: "block",
    width: "10px",
    height: "10px",
    transform: "rotate(45deg)",
    borderRight: "2px solid black",
    borderBottom: "2px solid black",
    margin: "0 0 3px 6px",
  },
  unu: {
    marginTop: "6px",
    animation: "mouse-scroll 1s infinite alternate .1s",
  },
  doi: {
    animation: "mouse-scroll 1s infinite alternate .2s",
  },
  trei: {
    animation: "mouse-scroll 1s infinite alternate .3s",
  },
};

export default function SectionDivider() {
  return (
    <motion.div
      className="my-20 hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div>
        <div style={styles.mouse} className="dark:!border-white/80">
          <div style={styles.wheel} className="dark:!bg-white/80"></div>
        </div>
        <div>
          <span
            style={{ ...styles.span, ...styles.unu }}
            className="dark:!border-r-white/80 dark:!border-b-white/80"
          ></span>
          <span
            style={{ ...styles.span, ...styles.doi }}
            className="dark:!border-r-white/80 dark:!border-b-white/80"
          ></span>
          <span
            style={{ ...styles.span, ...styles.trei }}
            className="dark:!border-r-white/80 dark:!border-b-white/80"
          ></span>
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <motion.div
      className="h-64 w-64 
      smx2:h-72 smx2:w-72 
      smx1:h-[22rem] smx1:w-[22rem]
      relative"
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
        className="h-72 w-72 
        smx1:h-[22rem] smx1:w-[22rem]
        relative"
        style={{
          maskImage: "url(/mask.svg)",
          maskSize: "85%",
          maskRepeat: "no-repeat",
          maskPosition: "center",
        }}
      />
    </motion.div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Avatar() {
  return (
    <motion.div
      className="h-60 w-60 
      smx2:h-72 smx2:w-72 
      smx1:h-96 smx1:w-96 
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
        smx1:h-96 smx1:w-96
        relative"
      />
    </motion.div>
  );
}

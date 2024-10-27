"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const GlowText = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      className="select-none fill-transparent"
    >
      <defs>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.5"
        className=" font-bold text-7xl  stroke-neutral-500"
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="3"
        className=" font-bold text-7xl stroke-indigo-500 blur"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth=".75"
        className=" font-bold text-7xl stroke-purple-500"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
    </svg>
  );
};

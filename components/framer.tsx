"use client"
import { motion } from "framer-motion";
import React from "react";

export default function Framer({ children, iniX, duration }: { children: React.ReactNode, iniX: number, duration: number }) {
    return (
        <motion.div
            initial={{ x: iniX, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: duration,
                ease: "easeInOut",
            }}
        >
            {children}
        </motion.div>
    );
}

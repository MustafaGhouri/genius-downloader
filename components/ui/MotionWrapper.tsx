"use client";
import { blogs } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MotionDiv({ children, delay = 0, isWhileInView = false }: { children: React.ReactNode; delay?: number, isWhileInView?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}
            transition={{
                duration: 0.3,
                ease: "easeOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}


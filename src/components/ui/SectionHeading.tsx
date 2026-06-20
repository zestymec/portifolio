"use client";



import { motion } from "framer-motion";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";



interface SectionHeadingProps {

  eyebrow?: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  className?: string;

}



export function SectionHeading({

  eyebrow,

  title,

  description,

  align = "left",

  className,

}: SectionHeadingProps) {

  return (

    <motion.div

      initial={{ opacity: 0, y: 24 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, margin: "-80px" }}

      transition={{ duration: 0.6 }}

      className={cn(

        "mb-12 max-w-2xl",

        align === "center" && "mx-auto text-center",

        className

      )}

    >

      {eyebrow && (

        <span className="sticker-pill sticker-pill-purple mb-4 inline-block text-xs uppercase tracking-wide">

          {eyebrow}

        </span>

      )}

      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">

        {title}

      </h2>

      {description && (

        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">

          {description}

        </p>

      )}

    </motion.div>

  );

}



interface BadgeProps {

  children: ReactNode;

  variant?: "default" | "accent" | "outline" | "green" | "pink";

  className?: string;

}



export function Badge({

  children,

  variant = "default",

  className,

}: BadgeProps) {

  return (

    <span

      className={cn(

        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",

        variant === "default" && "bg-white/5 text-muted border-2 border-white/10",

        variant === "accent" &&

          "bg-[#6366F1]/15 text-[#6366F1] border-2 border-[#6366F1]/25",

        variant === "outline" && "border-2 border-white/20 text-foreground",

        variant === "green" &&

          "bg-[#C4F042]/15 text-[#C4F042] border-2 border-[#C4F042]/30",

        variant === "pink" &&

          "bg-[#FF75A0]/15 text-[#FF75A0] border-2 border-[#FF75A0]/30",

        className

      )}

    >

      {children}

    </span>

  );

}


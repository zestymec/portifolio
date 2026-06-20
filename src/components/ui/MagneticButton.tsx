"use client";



import { motion, useMotionValue, useSpring } from "framer-motion";

import Link from "next/link";

import { useRef, type ReactNode, type MouseEvent } from "react";

import { cn } from "@/lib/utils";



type ButtonVariant = "primary" | "secondary" | "ghost";



interface MagneticButtonProps {

  children: ReactNode;

  className?: string;

  onClick?: () => void;

  href?: string;

  strength?: number;

  type?: "button" | "submit";

  disabled?: boolean;

  variant?: ButtonVariant;

}



const VARIANT_CLASSES: Record<ButtonVariant, string> = {

  primary:

    "bg-[#C4F042] text-[#0B0B1A] shadow-glow hover:brightness-105",

  secondary:

    "bg-white text-[#0B0B1A] shadow-[3px_3px_0_rgba(255,117,160,0.4)] hover:brightness-95",

  ghost:

    "border-2 border-white/20 bg-transparent text-foreground hover:border-white/40 hover:bg-white/5",

};



export function MagneticButton({

  children,

  className,

  onClick,

  href,

  strength = 0.3,

  type = "button",

  disabled = false,

  variant = "primary",

}: MagneticButtonProps) {

  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 14 });

  const springY = useSpring(y, { stiffness: 120, damping: 14 });



  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {

    if (!ref.current || disabled) return;

    const rect = ref.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;

    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * strength);

    y.set((e.clientY - centerY) * strength);

  };



  const handleMouseLeave = () => {

    x.set(0);

    y.set(0);

  };



  const classes = cn(

    "relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors hover:opacity-90",

    "disabled:cursor-not-allowed disabled:opacity-50",

    VARIANT_CLASSES[variant],

    className

  );



  if (href) {

    return (

      <Link href={href} className={classes}>

        {children}

      </Link>

    );

  }



  return (

    <motion.button

      ref={ref}

      type={type}

      disabled={disabled}

      onClick={onClick}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      style={{ x: springX, y: springY }}

      whileTap={{ scale: 0.97 }}

      className={classes}

    >

      {children}

    </motion.button>

  );

}


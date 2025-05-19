"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface NeuroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function NeuroButton({ 
  children, 
  className, 
  icon,
  ...props 
}: NeuroButtonProps) {
  return (
    <button
      className={cn(
        "neumorphism flex items-center justify-center p-4 w-12 h-12",
        "text-white transition-all duration-300 hover:opacity-80 active:scale-95",
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
} 
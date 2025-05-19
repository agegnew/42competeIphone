"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glassmorphism p-6",
        hover && "transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        className
      )}
    >
      {children}
    </div>
  );
} 
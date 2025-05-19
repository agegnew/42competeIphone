"use client";

import { cn } from "@/lib/utils";

interface BlobProps {
  className?: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  delay?: string;
}

export function Blob({ 
  className, 
  color = "from-violet-600/20 to-indigo-700/20", 
  size = "md",
  delay = "0s"
}: BlobProps) {
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  return (
    <div
      className={cn(
        "absolute rounded-full bg-gradient-to-br blur-3xl opacity-40 pulse",
        sizeClasses[size],
        color,
        className
      )}
      style={{ animationDelay: delay }}
    />
  );
} 
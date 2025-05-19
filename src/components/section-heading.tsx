"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        center && "text-center mx-auto",
        className
      )}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight bg-clip-text bg-gradient-to-r from-white to-indigo-200">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-indigo-100/70 max-w-3xl">
          {description}
        </p>
      )}
    </div>
  );
} 
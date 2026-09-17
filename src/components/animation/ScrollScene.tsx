"use client";

import React, { useRef } from "react";

interface ScrollSceneProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollScene: React.FC<ScrollSceneProps> = ({
  id,
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id={id}
      ref={containerRef}
      className={`relative w-full ${className}`}
      data-scroll-scene={id}
    >
      {children}
    </div>
  );
};

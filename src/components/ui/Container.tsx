import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
  gridGuides?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  gridGuides = false,
}) => {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-screen-2xl",
    wide: "max-w-screen-3xl",
    full: "max-w-full",
  }[size];

  return (
    <div className={`relative mx-auto px-4 sm:px-8 lg:px-12 w-full ${sizeClasses} ${className}`}>
      {gridGuides && (
        <div className="absolute inset-0 pointer-events-none px-4 sm:px-8 lg:px-12 flex justify-between z-0">
          <div className="w-[1px] h-full bg-border/40" />
          <div className="w-[1px] h-full bg-border/40 hidden md:block" />
          <div className="w-[1px] h-full bg-border/40 hidden lg:block" />
          <div className="w-[1px] h-full bg-border/40" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

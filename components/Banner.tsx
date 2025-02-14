import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface BannerProps {
  bgImage: string;
  className?: string;
  children: React.ReactNode;
}

export default function Banner({ bgImage, className, children }: BannerProps) {
  return (
    <div className={cn("relative w-full h-fit lg:max-h-[400px]", className)}>
      <div className="absolute w-full h-full bg-cinnabar-600/50 z-[1]" />
      <Image
        src={bgImage}
        alt="banner-image"
        className="absolute w-full"
        fill
      />
      <div className="relative z-[2] max-w-[1280px] mx-auto px-10 h-full py-6 lg:py-16">
        {children}
      </div>
    </div>
  );
}

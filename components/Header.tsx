"use client";

import React from "react";
import MobileHeader from "./MobileHeader";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import Button from "./Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

export default function Header() {
  const [{ y }] = useWindowScroll();
  return (
    <>
      <div className={cn("h-20 sticky top-0 z-10 hidden lg:block overflow-hidden bg-white transition-all", y ? "shadow" : "")}>
        <div className="max-w-[1280px] px-10 mx-auto flex items-center justify-between overflow-hidden h-full">
          <Image
            src={"/apple-touch-icon.png"}
            alt="Logo Perkantas"
            width={84}
            height={84}
            quality={100}
          />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tentang</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pelayanan</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/events"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Kegiatan</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://literatur.perkantasjakarta.org"
                  target="_blank"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Toko Buku</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button
            variant="outline"
            className="py-2.5"
          >
            Beri Donasi
            <HeartHandshake className="w-[22px] h-[22px]" />
          </Button>
        </div>
      </div>
      <MobileHeader className="lg:hidden" />
    </>
  );
}

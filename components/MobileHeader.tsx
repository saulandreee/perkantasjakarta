"use client";

import React from "react";
import { ArrowLeft, HandHeart, Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  // DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  // DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "./Button";
import { useWindowScroll } from "@uidotdev/usehooks";

export default function MobileHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const [{ y }] = useWindowScroll();

  return (
    <div
      className={cn(
        "bg-white h-16 w-full px-2.5 flex items-center justify-between sticky top-0 z-10 overflow-hidden",
        y ? "shadow-sm" : "",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2.5">
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <Button
              size="icon"
              // variant="ghost"
              className={"w-10 h-10"}
            >
              <Menu
                strokeWidth={2.4}
                className="w-6 h-6"
              />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="">
            <DrawerHeader className={"flex items-center justify-between h-16 gap-2.5 sticky top-0 z-[51]"}>
              <div className="flex items-center gap-2">
                <DrawerClose asChild>
                  <Button
                    className="w-10 h-10"
                    size={"icon"}
                    // variant="ghost"
                  >
                    <ArrowLeft
                      className="w-6 h-6"
                      strokeWidth={2.4}
                    />
                  </Button>
                </DrawerClose>

                <DrawerClose asChild>
                  <Link
                    href={"/"}
                    className="relative left-1 -top-0.5 flex justify-center col-span-4"
                  >
                    <Image
                      src={"/apple-touch-icon.png"}
                      alt="Logo Perkantas"
                      width={80}
                      height={80}
                      quality={100}
                    />
                  </Link>
                </DrawerClose>
              </div>
            </DrawerHeader>
            <div className="p-4 font-medium h-[calc(100%-64px)] overflow-y-auto">
              {/* <Accordion type="single">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="">Tentang</AccordionTrigger>
                  <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                </AccordionItem>
              </Accordion> */}
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>
              <div className="grid py-2 pb-2.5 border-b border-b-cinnabar-600/20">
                <p className="py-1.5 text-sm text-cinnabar-600">Tentang</p>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
                <Link
                  href={"/"}
                  className="py-1.5 block"
                >
                  Sejarah
                </Link>
              </div>

              <Button
                variant="outline"
                // size={"sm"}
                className={"w-full mt-4"}
              >
                Beri Donasi
                <HandHeart className="w-6 h-6" />
              </Button>
            </div>
            {/* <DrawerFooter></DrawerFooter> */}
          </DrawerContent>
        </Drawer>

        <Link
          href={"/"}
          className="relative left-1 -top-0.5 flex justify-center col-span-4"
        >
          <Image
            src={"/apple-touch-icon.png"}
            alt="Logo Perkantas"
            width={80}
            height={80}
            quality={100}
          />
        </Link>
      </div>
      <Button
        variant="outline"
        // size={"sm"}
      >
        Beri Donasi
        <HandHeart className="w-6 h-6" />
      </Button>
    </div>
  );
}

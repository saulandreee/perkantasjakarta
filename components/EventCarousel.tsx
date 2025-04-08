"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { EventCard } from "@/types/event";

import type { CarouselApi } from "@/components/ui/carousel";

export default function EventCarousel({ data }: { data: EventCard[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // console.log(data);
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  // const handleResetClick = React.useCallback(() => {
  //   api?.scrollTo(0);
  // }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {data.map((event: EventCard, index: number) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-[88%] md:basis-1/2 lg:basis-2/5 xl:basis-1/3 2xl:basis-1/4"
          >
            <div className="relative aspect-[750/500] md:aspect-[750/400] border rounded-xl lg:rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full top-0 left-0">
                <Image
                  src={event.cover}
                  alt={event.title}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full bottom-0 py-4 px-4 text-white bg-gradient-to-b from-transparent to-black/50">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <p className="text-sm">{event.short_description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

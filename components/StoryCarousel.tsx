"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { Article } from "@/types/article";
import { Story } from "@/types/story";

export default function StoryCarousel({ data }: { data: Array<Story> }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [api]);

  // const handleResetClick = useCallback(() => {
  //   if (api) {
  //     api.scrollTo(0);
  //   }
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
        {data.map((story: Story, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-[70%] md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
          >
            <div className="relative aspect-[280/420] md:aspect-[280/420] border rounded-xl lg:rounded-2xl overflow-hidden">
              <div className="absolute w-full h-full top-0 left-0">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="w-full absolute bottom-0 py-4 px-4 text-white bg-gradient-to-b from-transparent via-black/80 to-black/50">
                <h3 className="text-xl font-bold mb-1 line-clamp-2">{story.title}</h3>
                <div className="flex gap-1.5 items-center">
                  <p className="text-sm">{story.author}</p>
                  <span className="text-xs bg-cinnabar-500 rounded-sm p-1 py-0.5 font-semibold">{story.community}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

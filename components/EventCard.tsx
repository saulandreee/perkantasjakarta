import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { EventCard as EventCardType} from "@/types/event";
import { cn } from "@/lib/utils";

export default function EventCard({ event, className, ...props }: {event: EventCardType, className: string}) {
  return (
    <div className={cn('grid gap-2 lg:gap-4', className)}>
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden ">
        <Image
          src={"https://picsum.photos/300/300?random=1"}
          alt="event"
          fill
          quality={100}
          className="object-cover w-full"
        />
      </div>
      <div className="grid gap-1.5">
        <h4 className="text-sm md:text-base text-cinnabar-500 font-medium">{event.category}</h4>
        <h3 className="text-base lg:text-xl font-semibold">{event.title}</h3>
        <p className="text-sm lg:text-base text-elephant-700/80 line-clamp-4">{event.description}</p>
      </div>
      <Link href={"/events/" + event.slug}>
        <Button
          variant={"link"}
          size={"sm"}
          className={"w-fit"}
        >
          Lihat Detail
        </Button>
      </Link>
    </div>
  );
}

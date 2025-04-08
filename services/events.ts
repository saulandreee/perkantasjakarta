import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { EventCard } from "@/types/event";

const Events = {
  getAllEvents: async (): Promise<EventCard[]> => {
    const events = await client.fetch(`*[_type == "event"]`);
    var data = events.map((event: any) => ({
      id: event._id,
      title: event.title,
      short_description: event.short_description,
      cover: urlFor(event.cover).width(500).url(),
      category: event.category || "",
      slug: event.slug.current || "",
    }));

    return data;
  },
};

export default Events;

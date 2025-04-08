import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Ministry } from "@/types/ministry";

const Ministries = {
  getAllMinistries: async (): Promise<Ministry[]> => {
    const ministries = await client.fetch(`*[_type == "ministries"]`);
    console.log(ministries);
    const data = ministries.map((ministry: any) => ({
      id: ministry._id,
      title: ministry.title,
      description: ministry.description,
      image: urlFor(ministry.image).width(500).url(),
      slug: ministry.slug,
      community: ministry.community,
    }));
    return data;
  },
};

export default Ministries;

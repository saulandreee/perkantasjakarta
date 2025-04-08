import ArticleCard from "@/components/ArticleCard";
import Banner from "@/components/Banner";
import Button from "@/components/Button";
import ChipsFilter from "@/components/ChipsFilter";
import DonationBanner from "@/components/DonationBanner";
import EventCard from "@/components/EventCard";
import EventCarousel from "@/components/EventCarousel";
import StoryCarousel from "@/components/StoryCarousel";
import { Section, SectionHeader, SectionSubtitle, SectionTitle } from "@/components/ui/section";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { faker } from "@faker-js/faker";
import { Calendar } from "lucide-react";
import { MailPlus } from "lucide-react";
import { LucideArrowRight } from "lucide-react";
import { Loader } from "lucide-react";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  // const page = await fetch(
  //   process.env.STRAPI_API_HOST +
  //     "landing-page?populate[meta][fields]=*&populate[header][fields][0]=homeUrl&populate[header][fields][1]=homeIcon&populate[header][populate][ctaButton][fields]=*",
  //   {
  //     headers: {
  //       Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
  //     },
  //   }
  // );

  // var tempEvents = await fetch(
  //   process.env.STRAPI_API_HOST + "events?fields[0]=title&fields[1]=short_description&populate[cover][fields][0]=id&populate[cover][fields][1]=url",
  //   {
  //     headers: {
  //       Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
  //     },
  //   }
  // );
  // var events = await tempEvents.json();

  // var ministries = await fetch(process.env.STRAPI_API_HOST + "ministries?populate[cover][fields][0]=*&fields[0]=*", {
  //   headers: {
  //     Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
  //   },
  // });

  // ministries = await ministries.json();

  // console.log(ministries);

  // var landing = await page.json();

  // console.log(events);

  const ministries = [
    {
      _id: 0,
      abbreviation: "PSKJ",
      highlight: "30 SMA di Jabodetabek",
      cover: "https://picsum.photos/350/200?random=1",
      name: "Persekutuan Siswa Kristen Jakarta",
      slug: "/pskj",
      community: "Siswa",
    },
    {
      _id: 1,
      abbreviation: "PMKJ",
      highlight: "80 universitas di Jabodetabek",
      cover: "https://picsum.photos/350/200?random=2",
      name: "Persekutuan Mahasiswa Kristen Jakarta",
      slug: "/?",
      community: "Mahasiswa",
    },
    {
      _id: 2,
      abbreviation: "Dival",
      highlight: "3.000+ alumni rutin bersekutu",
      cover: "https://picsum.photos/350/200?random=3",
      name: "Divisi Alumni",
      slug: "/?",
      community: "Alumni",
    },
  ];

  const events = [
    {
      _id: 0,
      cover: "https://picsum.photos/600/400?random=1",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
    {
      _id: 1,
      cover: "https://picsum.photos/600/400?random=2",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
    {
      _id: 2,
      cover: "https://picsum.photos/600/400?random=3",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
    {
      _id: 3,
      cover: "https://picsum.photos/600/400?random=4",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
    {
      _id: 4,
      cover: "https://picsum.photos/600/400?random=5",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
    {
      _id: 5,
      cover: "https://picsum.photos/600/400?random=6",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
    {
      _id: 6,
      cover: "https://picsum.photos/600/400?random=7",
      title: faker.lorem.words({ min: 1, max: 4 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      description: faker.lorem.words({ min: 3, max: 7 }),
      slug: "",
      category: "",
    },
  ];

  const stories = [
    {
      image: "https://picsum.photos/300/400?random=1",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=7",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=8",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=2",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=3",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=4",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=5",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
    {
      image: "https://picsum.photos/300/400?random=6",
      title: faker.lorem.words({ min: 2, max: 7 }),
      slug: "#",
      author: faker.person.firstName(),
      community: "siswa",
    },
  ];

  const allEvent = [
    {
      category: "P1 (Penginjilan)",
      title: "KKR Siswa",
      description: faker.lorem.words({ min: 3, max: 7 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      cover: "https://picsum.photos/300/300?random=1",
      slug: "kkr-siswa",
    },
    {
      category: "P2 (Pemuridan)",
      title: "RKKJ",
      description: faker.lorem.words({ min: 3, max: 7 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      cover: "https://picsum.photos/300/300?random=2",
      slug: "kkr-siswa",
    },
    {
      category: "P3 (Pelipatgandaan)",
      title: "Training MC & Pemusik",
      description: faker.lorem.words({ min: 3, max: 7 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      cover: "https://picsum.photos/300/300?random=3",
      slug: "kkr-siswa",
    },
    {
      category: "P4 (Pengutusan)",
      title: "KKR Siswa",
      description: faker.lorem.words({ min: 3, max: 7 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      cover: "https://picsum.photos/300/300?random=4",
      slug: "kkr-siswa",
    },
    {
      category: "P1 (Penginjilan)",
      title: "KKR Siswa",
      description: faker.lorem.words({ min: 3, max: 7 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      cover: "https://picsum.photos/300/300?random=5",
      slug: "kkr-siswa",
    },
    {
      category: "P1 (Penginjilan)",
      title: "KKR Siswa",
      description: faker.lorem.words({ min: 3, max: 7 }),
      short_description: faker.lorem.words({ min: 3, max: 7 }),
      cover: "https://picsum.photos/300/300?random=6",
      slug: "kkr-siswa",
    },
  ];

  const articles = [
    {
      image: "https://picsum.photos/360/200?random=1",
      category: "Kesaksian",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=2",
      category: "Sharing",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=3",
      category: "Testimony",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=4",
      category: "Kesaksian",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=5",
      category: "Oratio",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=6",
      category: "Kesaksian",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=7",
      category: "Kesaksian",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=8",
      category: "Kesaksian",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
    {
      image: "https://picsum.photos/360/200?random=9",
      category: "Kesaksian",
      title: faker.lorem.words({ min: 3, max: 7 }),
      created_at: moment(faker.date.recent()).format("DD MMMM YYYY"),
      author: faker.person.fullName(),
      slug: "",
    },
  ];

  const sanityEvents = await client.fetch(`*[_type == "event"]`);

  console.log(sanityEvents);

  const imageUrl = urlFor(sanityEvents[0].cover).width(500).url();
  console.log(imageUrl);

  const landingPageData = await client.fetch(`*[_type == "page" && slug.current == "/"][0]`);
  console.log(landingPageData);

  return (
    <Suspense fallback={<Loader className="w-5 h-5 animate-spin" />}>
      <main className="">
        <Head>
          <link
            rel="icon"
            href="/favicon.ico"
            sizes="any"
          />
        </Head>
        <Section className="py-16">
          <SectionHeader
            className="max-w-[800px] mx-auto"
            justify={"center"}
          >
            <SectionTitle>Student Today, Leader Tomorrow</SectionTitle>
            <SectionSubtitle>
              Melayani kaum intelektual muda, memperlengkapi mereka menjadi pemimpin masa depan yang perpegang erat pada Kristus.
            </SectionSubtitle>
            <div className="flex gap-2 justify-center">
              <Button size={"lg"}>Lihat Kegiatan</Button>
              <Button
                variant="outline"
                size={"lg"}
              >
                Tentang Kami
              </Button>
            </div>
          </SectionHeader>
        </Section>
        <Section
          variant={"full"}
          className="py-16"
        >
          <Suspense fallback={<Loader className="animate-spin" />}>
            <EventCarousel data={events} />
          </Suspense>
        </Section>
        <Section className="py-16">
          <SectionHeader className={"max-w-[600px] mx-auto"}>
            <SectionTitle>Fokus Pelayanan Kami</SectionTitle>
            <SectionSubtitle>Melayani siswa, mahasiswa, dan alumni di wilayah Jakarta dan sekitarnya.</SectionSubtitle>
          </SectionHeader>

          <div className="grid lg:grid-cols-3 gap-6">
            {ministries.map((ministry) => {
              return (
                <div
                  key={ministry._id}
                  className="grid gap-4 h-fit w-full lg:max-w-[350px]"
                >
                  <div className="relative w-full !aspect-[7/4]">
                    <Image
                      src={ministry.cover}
                      alt={ministry.name}
                      className="object-cover w-full rounded-xl"
                      fill
                      priority
                    />
                  </div>
                  <div className="px-2.5 lg:px-0">
                    <h3 className="font-semibold text-xl lg:text-2xl">{ministry.abbreviation}</h3>
                    <p className="text-base lg:text-lg text-elephant-700/80">{ministry.highlight}</p>
                  </div>
                  <Link href={ministry.slug}>
                    <Button className={"w-fit"}>
                      Pelayanan {ministry.community}
                      <LucideArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </Section>
        <Section
          className="lg:py-16"
          variant={"full"}
        >
          <SectionHeader className={"mx-auto"}>
            <SectionTitle>Apa Kata Mereka?</SectionTitle>
            <SectionSubtitle>Dari yang melayani dan yang dilayani</SectionSubtitle>
          </SectionHeader>
          <StoryCarousel data={stories} />
        </Section>
        <Section className={"py-16"}>
          <SectionHeader
            justify={"left"}
            className={"mb-8"}
          >
            <SectionTitle>Kegiatan Rutin dan Non Rutin</SectionTitle>
            <ChipsFilter
              onChange={async (selected) => {
                "use server";
                console.log(selected);
              }}
              options={[
                { value: "all", label: "Semua", defaultActive: true },
                { value: "siswa", label: "Siswa" },
                { value: "mahasiswa", label: "Mahasiswa" },
                { value: "alumni", label: "Alumni" },
                { value: "misi", label: "Misi" },
              ]}
            />
          </SectionHeader>
          <div className="grid gap-3 grid-cols-2 md:gap-4 md:grid-cols-3 lg:gap-8 lg:grid-cols-5">
            {allEvent.map((event, index) => (
              <EventCard
                key={index}
                event={event}
                className="h-fit"
              />
            ))}
          </div>
        </Section>
        <Section variant={"full"}>
          <Banner bgImage={"https://picsum.photos/1600/400?random=1"}>
            <SectionHeader justify={"left"}>
              <SectionTitle className={"text-white"}>Ingin bergabung di komunitas Perkantas?</SectionTitle>
              <SectionSubtitle className={"text-white"}>Ikuti kegiatan terbaru kami atau hubungi kami untuk mengetahui lebih jauh.</SectionSubtitle>
            </SectionHeader>
            <div className="grid gap-4 lg:gap-8 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-4">
                <div className="pb-2.5 flex gap-2.5 items-center border-b">
                  <Calendar className="w-6 h-6" />
                  <p className="flex-1 lg:text-lg font-bold">Lihat jadwal kegiatan</p>
                </div>
                <div className="py-2.5">
                  <p>Ikuti kegiatan sesuai bagian Anda (siswa, mahasiswa, alumni).</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="pb-2.5 flex gap-2.5 items-center border-b">
                  <MailPlus className="w-6 h-6" />
                  <p className="flex-1 lg:text-lg font-bold">Hubungi kami</p>
                </div>
                <div className="py-2.5">
                  <p>Hubungi kami melalui WhatsApp ataupun email untuk menanyakan tentang kami.</p>
                </div>
              </div>
            </div>
          </Banner>
        </Section>
        <Section className={"py-16"}>
          <SectionHeader
            justify={"left"}
            className={"mb-8"}
          >
            <SectionTitle>Artikel Terbaru</SectionTitle>
            <ChipsFilter
              onChange={async (selected) => {
                "use server";
                console.log(selected);
              }}
              options={[
                { value: "all", label: "Semua", defaultActive: true },
                { value: "kesaksian", label: "Kesaksian" },
                { value: "testimony", label: "Testimoni" },
                { value: "sharing", label: "Sharing" },
                { value: "oratio", label: "Oratio" },
              ]}
            />
          </SectionHeader>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard
                key={article.title}
                article={article}
              />
            ))}
          </div>
        </Section>

        <Section
          className="py-16 bg-elephant-700/20"
          variant={"fullWithMaxContent"}
        >
          <DonationBanner />
        </Section>
        {/* <div>
      <Button>Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="secondary">Click me</Button>

      <Button variant="link">Click me</Button>
    </div>

    <div className="flex gap-2 px-2 items-end mt-6">
      <Button size="lg">
        Click me
        <LucideAArrowDown className="w-5 h-5" />
      </Button>
      <Button>
        <LucideAArrowDown className="w-5 h-5" />
        Click me
      </Button>
      <Button size="icon">
        <LucideMove className="w-4 h-4" />
      </Button>
      <Button size="sm">Click me</Button>
    </div> */}
      </main>
    </Suspense>
  );
}

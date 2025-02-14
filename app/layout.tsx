import { DM_Serif_Text, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import RootLayoutWrapper from "@/components/RootLayoutWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const dm = DM_Serif_Text({ subsets: ["latin"], variable: "--font-dm", weight: ["400"] });

// var data = await fetch(process.env.STRAPI_API_HOST + "landing-page?populate[meta][fields]=*", {
//   headers: {
//     Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
//   },
// });

// data = await data.json();

// export const metadata = {
//   title: data.data.attributes.meta.title,
//   description: data.data.attributes.meta.description,
//   // icons: {
//   //   icon: "favicon.ico",
//   // },
// };
export const metadata = {
  title: "Perkantas Jakarta",
  description: 'Perkantas memperlengkapi siswa, mahasiswa, dan alumni Kristen untuk menjadi garam dan terang bagi keluarga, gereja, masyarakat, dan bangsa.',
  keywords: [
    "Perkantas",
    "Perkantas Jakarta",
    "Persekutuan Siswa Kristen Jakarta",
    "PSKJ",
    "Persekutuan Mahasiswa Kristen Jakarta",
    "PMKJ",
    "Persekutuan Alumni Kristen Jakarta",
    "PAKJ",
    "Divisi Alumni",
  ],
  authors: [
    {
      name: "saulandreee",
      url: "https://caul.dev",
    },
  ],
  creator: "saulandreee",
  // themeColor: [
  //   { media: "(prefers-color-scheme: light)", color: "white" },
  //   { media: "(prefers-color-scheme: dark)", color: "black" },
  // ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og.jpg`],
  //   creator: "@shadcn",
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
}


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="en">
      <body className={cn("bg-cinnabar-50/10 font-inter", inter.variable, dm.variable)}>
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}

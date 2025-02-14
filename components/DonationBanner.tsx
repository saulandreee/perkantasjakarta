"use client";

import React from "react";
import ReactPlayer from "react-player";
import { SectionHeader, SectionSubtitle, SectionTitle } from "./ui/section";
import Button from "./Button";

export default function DonationBanner() {
  return (
    <div className="flex gap-16 max-w-[1280px] mx-auto px-10">
      <div className="w-full max-w-[550px] aspect-[16/9] rounded-2xl overflow-hidden flex items-center justify-center">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=ixEcob9O3dk"}
          style={{ width: "full", objectFit: "cover" }}
          width={550}
          height={309}
        />
      </div>
      <div className="flex-1 w-full">
        <SectionHeader justify={"left"}>
          <SectionTitle>Dukung Pelayanan Kami</SectionTitle>
          <SectionSubtitle>Donasi Anda membantu kami untuk melayani dengan lebih baik di dalam anugerah Tuhan.</SectionSubtitle>
        </SectionHeader>
        <div className="">
          <Button
            size={"lg"}
            className={"mr-4"}
          >
            Beri Donasi
          </Button>
          <Button
            variant={"outline"}
            className={"bg-white"}
            size={"lg"}
          >
            Laporan Keuangan
          </Button>
        </div>
      </div>
    </div>
  );
}

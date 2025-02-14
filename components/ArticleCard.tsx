import { Article } from "@/types/article";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.slug || article.title.toLowerCase().split(" ").join("-")}
      passHref
      className=""
    >
      <div className="grid gap-4">
        <div className="relative aspect-[360/200] w-full rounded-2xl overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="w-full object-cover"
          />
        </div>
        <div className="">
          <p className="text-cinnabar-600 text-base font-bold lg:text-lg">
            {article.category}
          </p>
          <h3 className="text-lg lg:text-xl font-semibold capitalize mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-elephant-700/80 lg:text-base">
            {moment(article.created_at).format("DD MMMM YYYY")} -{" "}
            {article.author}
          </p>
        </div>
      </div>
    </Link>
  );
}

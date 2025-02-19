"use client";
import Image from "next/image";
import { Tags } from "./Tags";
import { Details } from "./Details";
import { useGetAllBlogs } from "@/hooks/useGetAllBlogs";
import Link from "next/link";
import { useState } from "react";

interface CardProps {
  Icon?: React.ComponentType<{ size: number; color: string }>;
  title?: string;
  layout?: "row" | "column";
}

export function Cards({ title, layout, Icon }: CardProps) {
  const [page, setPage] = useState(1);
  const pageSize = 3;
  const { data } = useGetAllBlogs(page, pageSize);
  const blogs = data?.data ?? [];
  const totalPages = data?.meta?.pagination?.pageCount ?? 1;

  const generatePagination = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1, 2, 3);
      if (page > 4) pages.push("...");
      for (let i = Math.max(4, page - 1); i <= Math.min(totalPages - 3, page + 1); i++) {
        pages.push(i);
      }
      if (page < totalPages - 3) pages.push("...");
      pages.push(totalPages - 2, totalPages - 1, totalPages);
    }
    return pages;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {title && <p className="text-2xl font-semibold text-gray-900 mb-4">{title}</p>}
      <div className={`grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        {blogs.map((card: any) => (
          <div key={card.id} className="">
            <Link href={`/blog/${card.slug}`}>
              <Image
                className="cursor-pointer w-full h-auto sm:h-48 object-cover"
                src={card?.coverImg?.[0]?.url || "/images/BlogScreenImages/Card1.png"}
                alt={card.title}
                width={400}
                height={200}
              />
            </Link>
            <div className="p-4">
              <Details
                name={card?.authorName ?? ""}
                title={card?.title ?? ""}
                content={card?.description ?? ""}
                Icon={Icon}
              />
              <Tags tags={card?.tags || []} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10 py-8 border-t border-gray-200">
        <button
          className="bg-white text-gray-500 flex items-center gap-2 px-4 py-2 text-sm font-medium disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          <Image src="/images/BlogScreenImages/paginationPrevious.png" height={20} width={20} alt="Previous" />
          Previous
        </button>

        <div className="mx-2 space-x-2 text-gray-700 font-medium text-center">
          {generatePagination().map((num, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded-md transition-colors duration-200 ${page === num ? "bg-purple-100 text-purple-600" : "bg-white text-gray-500 hover:bg-gray-100"}`}
              onClick={() => typeof num === "number" && setPage(num)}
              disabled={num === "..."}
            >
              {num}
            </button>
          ))}
        </div>

        <button
          className="bg-white text-gray-500 flex items-center gap-2 px-4 py-2 text-sm font-medium disabled:opacity-50"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
          <Image src="/images/BlogScreenImages/paginationNext.png" height={20} width={20} alt="Next" />
        </button>
      </div>
    </div>
  );
}

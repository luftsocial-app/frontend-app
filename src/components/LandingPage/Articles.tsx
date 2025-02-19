"use client";
import { BlogDataType } from "@/app/blog/[slug]/blog.types";
import { useGetRecentBlogs } from "@/hooks/useGetRecentBlogs";
import { formatDate } from "@/utils";
import Image from "next/image";

export function Articles() {
  const { data } = useGetRecentBlogs();
  const blogs = data?.data ?? [];

  return (
    <div className="bg-secondaryPink pt-[6.25rem] pb-5">
      <div className="mx-4 md:mx-20">
        <p className="text-lg text-primaryBlue text-center font-bold leading-[41px]">
          BLOGS
        </p>
        <p className="text-gray-900 text-center text-4xl md:text-5xl font-bold leading-[64px]">
          Check Our Latest Articles
        </p>
        <p className="text-gray-600 text-center text-xl font-normal leading-[37px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br /> sed do
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3.75rem] mx-4 md:mx-20 mb-[40] mt-[3.75rem]">
        {blogs.map((blog: BlogDataType, index: number) => {
          return (
            <div key={index}>
              {blog && (
                <div className="mb-[1.3125rem]">
                  <Image
                    src={blog?.coverImg[0]?.url}
                    alt="Icon"
                    width={353}
                    height={196}
                    className="w-full"
                  />
                </div>
              )}
              <h3 className="text-xs font-medium text-gray-500 mb-[1.3125rem] text-left">
                {formatDate(blog.updatedAt)}
              </h3>
              <p className="text-gray-600 text-left text-xl md:text-2xl font-bold mb-[1.3125rem]">
                {blog.title}
              </p>

              <a
                href={`/blog/${blog.slug}`}
                className="text-primaryBlue text-xs underline font-bold hover:text-primaryPurple transition-colors"
              >
                Continue Reading &rarr;
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

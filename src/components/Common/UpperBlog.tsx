import Image from "next/image";
import { Details } from "./Details";
import { useGetRecentBlogs } from "@/hooks/useGetRecentBlogs";
import { Tags } from "./Tags";
import { ArrowUpRight } from "lucide-react";
import { BlogDataType } from "@/types";

export function UpperBlogs() {
  const { data } = useGetRecentBlogs();
  const blogs = data?.data ?? [];
  if (!blogs?.length) {
    return <p className="text-gray-900">No Blogs Found</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0">
      <div className="col-span-1 flex flex-col items-center w-full">
        {blogs[0] && (
          <div className="col-span-1 flex flex-col w-full">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={blogs[0]?.coverImg[0]?.url}
                alt="Blog"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="mt-4 w-full">
              <Details
                name={
                  blogs[0].authorName +
                  " • " +
                  new Date(blogs[0].publishedAt).toLocaleDateString()
                }
                title={blogs[0].title}
                content={blogs[0].description}
                tags={blogs[0].tags}
                Icon={ArrowUpRight}
              />
            </div>
          </div>
        )}
      </div>

      <div className="h-full flex flex-col gap-[2rem] w-full">
        {blogs.slice(1, 3).map((blog: BlogDataType) => (
          <div key={blog.id} className="flex-1 w-full">
            <div className="w-full">
              <div className="flex flex-col sm:flex-row bg-white gap-4 w-full">
                <div className="flex-shrink-0 w-full sm:w-[320px] relative aspect-[4/3]">
                  <Image
                    className="object-cover w-full h-full"
                    src={blog.coverImg[0]?.url}
                    alt={blog.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <Details
                    name={
                      blog.authorName +
                      " • " +
                      new Date(blog.publishedAt).toLocaleDateString()
                    }
                    title={blog.title}
                    content={blog.description}
                  />
                  <Tags tags={blog.tags} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

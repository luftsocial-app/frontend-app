import Image from "next/image";
import { Details } from "./Details";
import { BlogCard } from "./BlogCard";
import {useGetRecentBlogs} from "@/hooks/useGetRecentBlogs";
import { Tags } from "./Tags";



const cardData = [
  {
    id: 1,
    image: "/images/BlogScreenImages/BlogCard1.png",
    title: "Phoenix Baker • 19 Jan 2022",
    heading: "Migrating to Linear 101",
    content:
     "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    tags: ["Design", "Research"],
  },
  {
    id: 2,
    image: "/images/BlogScreenImages/BlogCard2.png",
    title: "Lana Steiner • 18 Jan 2022",
    heading: "Building your API Stack",
    content:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
      tags: ["Design", "Research"],
  },
];
export function UpperBlogs() {
    const { data } = useGetRecentBlogs();
    const blogs = data?.data ?? [];
    console.log('data===>', data)
    console.log('blogs===>', blogs)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="col-span-1 flex flex-col items-center">
    {blogs[0] && (
    <div className="col-span-1 flex flex-col items-center">
      <div className="flex-1 ">
        {/* Static Image, you can replace with dynamic content */}
        <Image
          src={"/images/BlogScreenImages/Image.png"}
          alt="Blog"
          width={1950}
          height={1300}
          style={{
            width: "100%",
            height: "100%",
          }}
          priority
        />
      </div>
      <div className="mt-4">
        <Details
          name={blogs[0].authorName + " • " + new Date(blogs[0].publishedAt).toLocaleDateString()}
          title={blogs[0].title}
          content={blogs[0].description}
          tags={blogs[0].tags.map((tag) => tag.tags)} // Use the first blog's tags
        />
      </div>
    </div>
  )}
    </div>

    <div className="flex justify-center items-center">
      <div className="space-y-6">
      {blogs.slice(1, 3).map((blog) => (
    <div key={blog.id} className="flex justify-center items-center">
      <div className="space-y-6">
        <div className="flex bg-white gap-4">
          <div className="flex-shrink-0">
            {/* Display cover image */}
            <Image
              className="object-cover"
              src={blog.coverImg[0]?.url} // Using the first cover image's URL
              alt={blog.title}
              width={320}
              height={200}
              style={{
                maxWidth: "320px",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="flex flex-col justify-between">
            <Details
              name={blog.authorName + " • " + new Date(blog.publishedAt).toLocaleDateString()}
              title={blog.title}
              content={blog.description}
            />
            <Tags tags={blog.tags.map((tag) => tag.tags)} /> {/* Map over tags */}
          </div>
        </div>
      </div>
    </div>
  ))}
      </div>
    </div>
  </div>
  );
}

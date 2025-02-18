import Image from "next/image";
import { Tags } from "./Tags";
import { Details } from "./Details";
import { useGetAllBlogs } from "@/hooks/useGetAllBlogs";
import { Link } from "lucide-react";

interface CardProps {
  Icon?: React.ComponentType<{ size: number; color: string }>;
  title?: string;
  layout?: "row" | "column";
}

const cardData = [
  {
    id: 1,
    image: "/images/BlogScreenImages/Card1.png",
    title: "Alec Whitten • 17 Jan 2022",
    heading: "Bill Walsh leadership lessons",
    content:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    id: 2,
    image: "/images/BlogScreenImages/Card2.png",
    title: "Demi WIlkinson • 16 Jan 2022",
    heading: "Card Heading 2",
    content:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 3,
    image: "/images/BlogScreenImages/Card1.png",
    title: "Alec Whitten • 17 Jan 2022",
    heading: "Bill Walsh leadership lessons",
    content:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
  {
    id: 4,
    image: "/images/BlogScreenImages/Card2.png",
    title: "Demi WIlkinson • 16 Jan 2022",
    heading: "Card Heading 2",
    content:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"],
  },
];

export function Cards({ title, layout, Icon }: CardProps) {
  const { data } = useGetAllBlogs();
  const blogs = data?.data ?? [];
  return (
    <div className="">
      {title && (
        <p className="text-2xl font-semiBold text-secondaryBlack3 mb-4">
          {title}
        </p>
      )}
      <div
        className={`gap-8 ${
          layout === "column" ? "grid grid-cols-3" : "flex flex-wrap"
        }`}
      >
        {blogs.map((card: any) => (
          <div
            key={card.id}
            className={`rounded overflow-hidden  ${
              layout === "column" ? "col-span-1" : ""
            }`}
          >
            <div
              className={`flex ${
                layout === "row" ? "flex-row" : "flex-col"
              } cursor-pointer`} // Added cursor-pointer for the clickable effect
            >
              <Link href={`/blog/${card.slug}`}>
              <a>
                  <Image
                    className=""
                    src={
                      card?.coverImg?.[0]?.url ||"/images/BlogScreenImages/Card1.png"
                    }
                    alt={card.title}
                    width={400}
                    height={200}
                    objectFit="cover"
                  />
                  </a>
              </Link>

              <div className="ml-4">
                <Details
                  name={card?.authorName ?? ""}
                  title={card?.title ?? ""}
                  content={card?.description ?? ""}
                  Icon={Icon}
                />
                <Tags tags={card?.tags || []} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

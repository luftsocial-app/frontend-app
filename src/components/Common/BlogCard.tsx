import Image from "next/image";
import { Tags } from "./Tags";
import { Details } from "./Details";

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

export function 
BlogCard() {
  return (
    <div className="space-y-6">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="flex bg-white gap-4"
        >
          <div className="flex-shrink-0">
            <Image
              className="object-cover"
              src={card.image}
              alt={card.title}
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
              name={card.title}
              title={card.heading}
              content={card.content}
            />
            <Tags tags={card.tags} />
          </div>
        </div>
      ))}
    </div>
  );
}

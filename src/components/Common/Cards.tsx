import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GB_COLORS } from "@/fixtures";

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
    content: "Mental models are simple expressions of complex processes or relationships.",
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
    content: "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"],
  },
  {
    id: 5,
    image: "/images/BlogScreenImages/Card1.png",
    title: "Alec Whitten • 17 Jan 2022",
    heading: "Bill Walsh leadership lessons",
    content:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Leadership", "Management"],
  },
];

const getRandomColor = () => {
  const colorKeys = Object.keys(GB_COLORS);
  const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
  return GB_COLORS[randomKey];
};

export function Cards() {
  return (
  <div className="p-20">
        <p className="text-2xl font-semiBold text-secondaryBlack3 mb-4">All blog posts</p>
    <div className=" flex flex-wrap -mx-4 gap-8">
      {cardData.map((card) => (
        <div key={card.id} className="max-w-sm max-h-[24rem] rounded overflow-hidden">
          {/* Image at the top */}
          <Image
            className="w-full"
            src={card.image}
            alt={card.title}
            width={400}
            height={200}
            objectFit="cover"
            style={{
                width:'100%',
            }}
          />

          {/* Card content */}
          <div>
            {/* Title */}
            <h2 className="text-sm font-semibold text-secondaryPurple2 my-4">
              {card.title}
            </h2>
            {/* Heading */}
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semiBold text-secondaryBlack3 ">
                {card.heading}
              </p>
              <ArrowUpRight size={24} color={"#101828"}/>
            </div>
            {/* Content */}
            <p className="text-secondaryGray3 text-base font-normal mb-4 mt-4">
              {card.content}
            </p>
          </div>

          {/* Tags at the bottom */}
          <div className=" ">
            {card.tags.map((tag, index) => {
              const { backgroundColor, textColor } = getRandomColor();
              return (
                <span
                  key={index}
                  className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                  style={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                    border: `1px solid ${textColor}`,
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

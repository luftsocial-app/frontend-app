import Image from "next/image";

export function DataColumn  () {
  // Array of data for the columns
  const columnData = [
    {
      icon: "/images/HomeScreenImages/Icon1.png",
      heading: "Cross-Platform Scheduling & Adaptation",
      paragraph:
        "Posts are scheduled across multiple platforms with auto-adjustments for format, character limits, and best-performing styles, making content look native everywhere.",
    },
    {
        icon: "/images/HomeScreenImages/Icon2.png",
        heading: "Collaborative Approval Workflow",
      paragraph:
        "Teams can draft, schedule, and approve posts in one place. Custom permissions ensure the right people review and edit before content goes live.",
    },
    {
        icon: "/images/HomeScreenImages/Icon3.png",
        heading: "Unified Inbox with Smart Prioritization",
      paragraph:
        "Messages are categorized by urgency and sentiment, with high-priority ones routed to the right team. CRM integration enables instant, personalized responses, improving engagement.",
    },
    {
        icon: "/images/HomeScreenImages/Icon4.png",
        heading: "AI-Driven Content Optimization",
      paragraph:
        "Your tool analyzes engagement trends and suggests real-time improvements for captions, hashtags, and posting times. It also tests variations automatically and ensures brand consistency with sentiment analysis.",
    },
  ];

  return (
    <div className=" bg-secondaryPink mt-20 pt-20 pb-5">
      <div className="mx-20">
        <p className="text-lg text-primaryPurple text-center font-bold leading-[41px]">
          Why We Are The Best
        </p>
        <p className=" text-secondaryDark text-center text-4xl font-bold leading-[64px]">
          Why LuftSocial
        </p>
        <p className=" text-secondaryLightGray text-center text-xl font-normal leading-[37px]">
          We’ve gone over everything you could possibly want to have. You are
          one step closer to success
        </p>
        <div className="flex justify-center mt-4 mb-20">
          <button className="px-6 py-3 bg-primaryBlue text-white transition-colors border border-[#F7BE00]">
            Get Started
          </button>
        </div>
      </div>
      {/* Main row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-20 mb-40">
        {columnData.map((item, index) => (
          <div
            key={index}
            className={`text-center ${
              index % 4 !== 3 ? "border-r-2 border-gray-200" : ""
            }`}
          >
            {item.icon && (
              <div className="mb-4">
                <Image src={item.icon} alt="Icon" width={52} height={45} />
              </div>
            )}
            <h3 className="text-lg font-bold text-primaryPurple mb-2 text-left">
              {item.heading}
            </h3>
            <p className="text-gray-600 text-left text-base font-normal">
              {item.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

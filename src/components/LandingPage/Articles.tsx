import Image from "next/image";

export function Articles ()  {
  const columnData = [
    {
      icon: "/images/HomeScreenImages/Blog1.png",
      label: "April 09, 2025",
      title: "Letter of Intent – Know 5 benefits of using AI",
    },
    {
      icon: "/images/HomeScreenImages/Blog2.png",
      label: "April 09, 2025",
      title: " AI Content Generation : Know 5 Futuristic ways",
    },
    {
      icon: "/images/HomeScreenImages/Blog3.png",
      label: "April 09, 2025",
      title: "Transcription – Impressive ways Audio 2 Text",
    },
  ];

  return (
    <div className=" bg-secondaryPink pt-20 pb-5">
      <div className="mx-20">
        <p className="text-lg  text-primaryBlue text-center font-bold leading-[41px]">
          Blogs
        </p>
        <p className=" text-gray-900 text-center text-5xl font-bold leading-[64px]">
          Check Our Latest Articles
        </p>
        <p className=" text-gray-600 text-center text-xl font-normal leading-[37px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      <div className="flex gap-8 mx-20 mb-40 mt-20">
        {columnData.map((item, index) => (
          <div key={index} className=" ">
            {item.icon && (
              <div className="mb-4">
                <Image src={item.icon} alt="Icon" width={353} height={196} />
              </div>
            )}
            <h3 className="ext-xs font-medium text-gray-500 mb-2 text-left">
              {item.label}
            </h3>
            <p className="text-gray-600 text-left text-2xl font-bold">
              {item.title}
            </p>

            <a
              href="#"
              className="text-primaryBlue text-xs  underline font-bold hover:text-primaryPurple transition-colors"
            >
              Continue Reading &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};



"use client";
import { Cards, FooterWithCTA, UpperBlogs } from "@/components";
import { NewsLetter } from "@/components/BlogScreen/NewsLetter";
import { Header } from "@/components/Common/Header";
import { ArrowUpRight } from "lucide-react";

export default  function BlogScreen() {

  return (
    <div className="flex flex-col ">
      <Header imageHeight={170} />
      <NewsLetter />
      <div className="flex justify-center items-center w-full mt-20">    
        <div className="w-full max-w-screen-xl px-4">
        
          <div className="px-4 sm:px-6 lg:px-1">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Recent blog posts
            </p>
          </div>
          <UpperBlogs/>
          <div className=" mt-40">
            <Cards
              title={"All blog posts "}
              layout="column"
              Icon={ArrowUpRight}
            />
          </div>
          <div className="mt-40">
          <FooterWithCTA/>
          </div>
        </div>
      </div>
    </div>
  );
}

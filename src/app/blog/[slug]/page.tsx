import { FooterWithCTA, Header, MarkdownRenderer } from "@/components";
import { BlogMeta } from "@/components/BlogScreen/BlogMeta";
import { BlogDataType } from "./blog.types";
import { formatDateString } from "@/utils/FormatDate";
import Image from "next/image";
import { Twitter, Linkedin } from "lucide-react";

interface BlogData {
  data: Array<{
    attributes: {
      title: string;
      content: string;
    };
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      total: number;
    };
  };
}

async function getBlogBySlug(slug: string) {
  if (!slug) return null;

  try {
    const response = await fetch(
      `http://192.168.0.210:1337/api/all-blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store", 
      }
    );

    console.log(response, "responseresponseresponse");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: BlogData = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

interface PageProps {
  params: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params }: PageProps) {
  const param = await params;
  const slug = param?.slug as string;

  const blogData = await getBlogBySlug(slug) as any

  const blog = blogData?.data[0] as BlogDataType;
  console.log("blog===>", blog);
  const content = blog?.blogContent ?? "";

  const formattedDate = formatDateString(blog?.updatedAt);

  return (
    <div className="p-6 w-full h-full min-h-screen">
      <div className="flex flex-col">
        <Header imageHeight={170} />
        <div className="mt-28">
          <BlogMeta
            title={blog?.title ?? ""}
            breadcrumb={blog?.breadcrumb ?? ""}
            date={formattedDate ?? ""}
            image={blog?.coverImg[0]?.url}
            tags={blog?.tags[0].tags ?? ""}
          />
        </div>
        <div className="mt-20 flex flex-row justify-center items-start">
          <div className="w-full max-w-3xl">
            <MarkdownRenderer content={content} />
          </div>

          <div className="ml-8 shrink-0 space-y-4">
            <div className="flex flex-col justify-center items-center space-y-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-200">
                <a href="#" className="">
                  <Image
                    src="/images/BlogScreenImages/discord.svg"
                    height={20}
                    width={20}
                    style={{ fill: "black", stroke: "none" }}
                    alt="Discord Image"
                  />
                </a>
              </div>
              <a href="#" className="">
                <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-200">
                  <Twitter
                    width={20}
                    height={20}
                    style={{ fill: "black", stroke: "none" }}
                    alt={"Twitter Image"}
                  />
                </div>
              </a>
              <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-200">
                <a href="#" className="">
                  <Image
                    src="/images/BlogScreenImages/Telegram.svg"
                    height={20}
                    width={20}
                    alt={"Telegram Image"}
                  />
                </a>
              </div>
              <a href="#" className="">
                <div className="h-12 w-12 flex items-center justify-center rounded-full border-2 border-gray-200">
                  <Linkedin
                    width={20}
                    height={20}
                    style={{ fill: "black", stroke: "none" }}
                    alt={"Linkedin Image"}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-40">
          <FooterWithCTA />
        </div>
      </div>
    </div>
  );
}

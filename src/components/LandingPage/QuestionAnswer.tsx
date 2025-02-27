"use client";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { MarkdownRenderer } from "../Common";

interface DropdownProps {
  question: string;
  answer: string;
}

export function QuestionAnswer() {
  return (
    <div className="flex flex-col md:flex-row items-center overflow-hidden bg-white px-6 py-8 md:px-12 md:py-16">
      <div className="w-full md:w-1/2 max-w-[69.25rem] max-h-[40.625rem] flex justify-center">
        <img
          src="/images/HomeScreenImages/QuesAns.png"
          alt="Sample Image"
          className="object-cover w-full max-w-[350px] md:max-w-full"
        />
      </div>

      <div className="flex-1 py-8 px-4 md:px-8 text-center md:text-left">
        <p className="text-lg font-bold text-primaryPurple">FAQs</p>
        <h2 className="text-3xl md:text-4xl font-bold text-secondaryBlack my-4">
          Questions & Answers
        </h2>

        <div className="space-y-4 ">
          <Dropdown
            question="Is LuftSocial Free?"
            answer="Absolutely! LuftSocial is 100% free—forever. We believe in empowering individuals and businesses with seamless social media management without any upfront costs. With our free plan, you can create, schedule, and publish up to 10 posts per month on each of your three connected accounts. Additionally, you can livestream effortlessly on all three accounts, whether in portrait or landscape mode. Our goal is to make social media management simple, efficient, and accessible to everyone. Join LuftSocial today and start managing your content with ease—completely free!"
          />
          <Dropdown
            question="How many platforms are supported on LuftSocial?"
            answer="Currently, LuftSocial supports 8 major social media platforms, providing seamless integration for content creation, scheduling, and livestreaming. However, we understand that every user has unique needs, which is why we’ve included a feature that allows you to request additional platforms that are not yet supported. Our team continuously evaluates user feedback to expand our integrations and enhance your social media management experience. Stay tuned for future updates as we work to bring even more platforms to LuftSocial!"
          />
          <Dropdown
            question="What features are supported for each platform?"
            answer={`LuftSocial is designed to offer a comprehensive suite of features to help users efficiently manage their social media presence. Below is a breakdown of the key features we provide across the 8 major social media platforms we currently support. Our goal is to ensure seamless content scheduling, publishing, and engagement while continuously improving and expanding our capabilities.

- Post scheduling: You can schedule posts to a time of your choice and manage them on our advanced calendar view.
- Auto Publishing and reminders: We send you a reminder before your posts go live to enable any final changes.
- Livestreaming: We are the first out of our competitors to support livestreaming on all major platforms, on both landscape and portrait modes, Free.
- Advanced Analytics: We offer our users AI-powered advanced analytics that will help our users make better decisions on their platforms and save time while growing their accounts.
- Engagement Management: You can manage all your inbox messages, comments, replies, trend analytics, and more, all from within LuftSocial.
- Team Collaboration:You and your team can now work together, assign and manage tasks, and review and approve before any post can go public.

We continuously work on expanding our feature set based on user feedback. If there’s a specific feature or platform you’d like to see on LuftSocial, feel free to reach out to us with your request!`}
          />
        </div>
      </div>
    </div>
  );
}

const Dropdown: React.FC<DropdownProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <details className="group cursor-pointer border-b border-gray-200 pb-2">
      <summary
        className="flex justify-between items-center text-lg md:text-xl font-semibold text-secondaryBlack cursor-pointer"
        onClick={toggleOpen}
      >
        <ChevronDown
          className={`w-5 h-5 text-primaryPurple transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <div className="w-full">
          <span className="text-secondaryBlack font-bold text-left block ml-2">
            {question}
          </span>
        </div>
      </summary>

      <div
        ref={contentRef}
        className="mt-2 ml-2 md:ml-4 text-secondaryLightGray overflow-hidden transition-all duration-300 text-lg font-normal sm: ml-0"
        style={{ maxHeight: "0px" }}
      >
        <MarkdownRenderer content={answer} />
      </div>
    </details>
  );
};

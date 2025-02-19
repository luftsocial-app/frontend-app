"use client";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface DropdownProps {
  question: string;
  answer: string;
}

export function QuestionAnswer() {
  return (
    <div className="flex flex-col md:flex-row items-center overflow-hidden bg-white px-6 py-8 md:px-12 md:py-16">
      <div className="w-full md:w-1/2 flex justify-center">
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
            answer="Bronze plan comes with a trial period, after which you will be charged a nominal fee to use the service."
          />
          <Dropdown
            question="How many platforms are there?"
            answer="We support all major social media platforms. Contact us for more details."
          />
          <Dropdown
            question="Is there comprehensive support?"
            answer="Yes, we provide comprehensive support and features. Contact our team for more information."
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
  <span className="text-secondaryBlack font-bold text-left block ml-2">{question}</span>
</div>

      </summary>

      <div
        ref={contentRef}
        className="mt-2 ml-2 md:ml-4 text-secondaryLightGray overflow-hidden transition-all duration-300 text-lg font-normal sm: ml-0"
        style={{ maxHeight: "0px" }}
      >
        {answer}
      </div>
    </details>
  );
};

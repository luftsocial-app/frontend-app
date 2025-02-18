'use client'
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface DropdownProps {
  question: string;
  answer: string;
}

export function QuestionAnswer ()  {
  return (
    <div className="flex items-center overflow-hidden ">
      <div className="flex-shrink-0 w-64 md:w-1/2">
        <img
          src="/images/HomeScreenImages/QuesAns.png"
          alt="Sample Image"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 py-8 px-4 md:px-8">
        <p className="text-lg font-bold text-primaryPurple">FAQs</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-secondaryBlack my-4">
          Questions & Answers
        </h2>

        <div className="space-y-4">
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
};

const Dropdown: React.FC<DropdownProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      } else {
        contentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <details className="group cursor-pointer">
      <summary
        className="flex items-center text-lg md:text-xl font-semibold text-secondaryBlack relative"
        onClick={toggleOpen}
      >
        <ChevronDown
          className={`w-5 h-5 text-primaryPurple transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} mr-2`}
        />
        <span className="text-secondaryBlack">{question}</span>
      </summary>

      <div
        ref={contentRef}
        className={`mt-2 ml-8 md:ml-10 text-secondaryLightGray overflow-hidden transition-all duration-300`}
        style={{
          maxHeight: '0px',
        }}
      >
        {answer}
      </div>
    </details>
  );
};

import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold leading-tight my-4 text-left">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold leading-snug my-4 text-left">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-semibold leading-snug my-3 text-left">
      {children}
    </h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-base leading-relaxed my-4 text-left">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside my-4 pl-6 text-left">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside my-4 pl-6 text-left">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-base leading-normal my-2 text-left">{children}</li>
  ),
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a href={href} className="text-primaryPurple  text-left">
      {children}
    </a>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4 text-left">
      {children}
    </blockquote>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-bold">{children}</strong>
  ),
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="">{children}</em>
  ),
  hr: () => <hr className="my-8 border-t border-gray-300" />,
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 px-2 py-1 font-mono text-sm">{children}</code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 border-l-[2.5px] border-black  p-4 font-mono text-sm overflow-x-auto">
      {children}
    </pre>
  ),
};

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  return (
    <div className="flex justify-center items-center w-full h-full text-black">
      <div className="container markdown-container">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents as Components}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Button({ href, children, className, onClick }: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-full max-w-[19.25rem] max-h-[2.25rem] inline-flex items-center justify-center px-[1rem] py-[0.375rem] border  border-[#1E31D] rounded-[6px] text-sm font-semibold duration-200   ${className}`}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 border-primaryBlue rounded-[5px] text-lg text-primaryBlue duration-200 font-bold border-[1.5px] ${className}`}
    >
      {children}
    </Link>
  );
}

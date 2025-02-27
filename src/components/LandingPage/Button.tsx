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
      className={`inline-flex items-center justify-center px-4 py-2 rounded-[5px] text-lg text-primaryBlue duration-200 font-bold border-[1.5px] ${className}`}
    >
      {children}
    </Link>
  );
}

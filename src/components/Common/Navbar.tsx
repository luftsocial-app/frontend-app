// components/Navbar.tsx
import Link from "next/link";
import { Button } from "../LandingPage/Button";

export function Navbar() {
  return (
    <nav className="z-10 py-10">
      <div className=" mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex flex-col items-center space-x-2 p-10">
            <span className="text-2xl font-bold text-primaryBlue text-[40px] leading-[30.45px]">
              LS
            </span>
            <span className=" text-primaryBlue text-xs font-normal">
              LuftSocial
            </span>
          </Link>
          <div className="flex ">
            <div className="hidden md:flex items-center space-x-8 mr-20">
              <Link
                href="/"
                className="text-secondaryGray hover:text-gray-900 text-lg font-semibold "
              >
                Home
              </Link>
              <Link
                href="/demo"
                className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
              >
                Demo
              </Link>
              <Link
                href="/contact"
                className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
              >
                Guides
              </Link>
              <Link
                href="/pricing"
                className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
              >
                Blogs
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/signin"
                className="text-primaryBlue text-lg font-semibold"
              >
                Sign In
              </Link>
              <Button href="/get-started">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

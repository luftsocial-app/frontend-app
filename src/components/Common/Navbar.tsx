"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "../LandingPage/Button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { DownArrow } from "@/icons";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export function Navbar() {
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("dropdownMenu");
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const linkClasses = (route: string) =>
    `text-lg font-semibold ${
      pathname === route ? "text-primaryBlue" : "text-secondaryGray"
    } hover:text-purple-600 hover:underline`;

  return (
    <nav className="z-10 px-6 md:px-[8.875rem] xl:pl-[7rem] py-4">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/HomeScreenImages/frame.png"
            width={256}
            height={51}
            alt="luft logo"
            className="my-[0.217rem] mr-[0.989rem]"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about-us" className={linkClasses("/about-us")}>
            About Us
          </Link>
          <div className="relative">
            <button
              className="text-lg font-semibold flex items-center text-secondaryGray hover:text-gray-900"
              onClick={toggleDropdown}
              id="dropdownMenu"
            >
              Features
              <DownArrow height={16} width={15} className="ml-[8px]" />
            </button>
            {isDropdown && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                <ul className="flex items-center justify-center space-x-4 p-2">
                  {[
                    "Feature1",
                    "Feature2",
                    "Feature3",
                    "Feature4",
                    "Feature5",
                  ].map((feature, index) => (
                    <li key={index}>
                      <Link
                        href={`/${feature.toLowerCase()}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdown(false)}
                      >
                        {feature}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link href="/pricing" className={linkClasses("/pricing")}>
            Pricing
          </Link>
          <Link href="/blog" className={linkClasses("/blog")}>
            Blogs
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {isSignedIn ? (
            <>
              <Button
                href="/dashboard"
                className={`text-lg font-semibold border-primaryBlue 
                  hover:bg-primaryBlue hover:text-white transition-colors ${
                    pathname === "/dashboard"
                      ? "text-primaryBlue"
                      : "text-primaryBlue"
                  }`}
              >
                Dashboard
              </Button>
              <SignOutButton>
                <p className="text-primaryBlue text-lg font-semibold cursor-pointer hover:underline">
                  Log Out
                </p>
              </SignOutButton>
            </>
          ) : (
            <>
              <Link href="/login" className={linkClasses("/login")}>
                Sign In
              </Link>
              <Button
                href="/signup"
                className="max-w-[9rem] border border-primaryBlue text-primaryBlue
                 hover:bg-primaryBlue hover:text-white transition-colors"
              >
                Get Started
              </Button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-primaryBlue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg transition-transform duration-300 z-50 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          <button
            className="self-end text-primaryBlue"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          {["Home", "About Us", "Pricing", "Blogs"].map((item) => {
            const route =
              item.toLowerCase() === "home"
                ? "/"
                : item.toLowerCase() === "blogs"
                ? "/blog"
                : `/${item.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <Link
                key={item}
                href={route}
                className={`text-lg font-semibold ${
                  pathname === route ? "text-primaryBlue" : "text-secondaryGray"
                } hover:text-gray-900`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            );
          })}
          {isSignedIn ? (
            <>
              <Link
                href="/dashboard"
                className={`text-lg font-semibold ${
                  pathname === "/dashboard"
                    ? "text-primaryBlue"
                    : "text-secondaryGray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <SignOutButton>Log Out</SignOutButton>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className={`text-lg font-semibold ${
                  pathname === "/signin"
                    ? "text-primaryBlue"
                    : "text-secondaryGray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Button
                href="/get-started"
                className="max-w-[12rem]"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

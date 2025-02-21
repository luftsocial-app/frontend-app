"use client"
import { useState } from "react";
import Link from "next/link";
import { Button } from "../LandingPage/Button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 px-6 md:px-[8.875rem] py-4 ">
      <div className="mx-auto max-w-screen-xl flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-primaryBlue text-[40px] leading-[30.45px]">
            LS
          </span>
          <span className="text-primaryBlue text-xs font-normal">
            LuftSocial
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
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
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/signin" className="text-primaryBlue text-lg font-semibold">
            Sign In
          </Link>
          <Button href="/get-started" className="max-w-[9rem]">
            Get Started
          </Button>
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

          <Link
            href="/"
            className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/demo"
            className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Demo
          </Link>
          <Link
            href="/contact"
            className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Guides
          </Link>
          <Link
            href="/pricing"
            className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-secondaryGray hover:text-gray-900 text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link href="/signin" className="text-primaryBlue text-lg font-semibold" onClick={() => setIsOpen(false)}>
            Sign In
          </Link>
          <Button href="/get-started" className="max-w-[12rem]" onClick={() => setIsOpen(false)}>
            Get Started
          </Button>
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

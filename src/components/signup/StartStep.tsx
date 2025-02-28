"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";
import Link from "next/link";

export function StartStep() {
  return (
    <SignUp.Step
      name="start"
      className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
    >
      <div className="mb-6 flex flex-col items-center justify-center">
        <div className="relative h-12 w-12 mb-2">
          <div className="flex h-full w-full items-center justify-center rounded-md text-white">
            <Image
              src="/images/onBoardingScreen/luft_image.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-8 h-8"
            />
          </div>
        </div>
        <h1 className="text-xl font-bold text-gray-800">LuftSocial</h1>
      </div>

      <h2 className="mb-1 text-center text-2xl font-semibold text-gray-800">
        Sign Up
      </h2>
      <p className="mb-6 text-center text-sm text-gray-600">
        Enter your details to sign up
      </p>

      <Clerk.GlobalError className="block text-sm text-red-500" />

      <Clerk.Field name="name" className="group/field relative mb-4">
        <Clerk.Input
          type="text"
          required
          placeholder="Full Name"
          className="w-full rounded-[10px] border-[1px] border-solid border-black px-3 py-2 text-gray-800 placeholder:text-[12px] placeholder:leading-none"
        />
        <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
      </Clerk.Field>
      <Clerk.Field name="emailAddress" className="group/field relative mb-4">
        <Clerk.Input
          type="text"
          required
          placeholder="Email Address"
          className="w-full rounded-[10px] border-[1px] border-solid border-black px-3 py-2 text-gray-800 placeholder:text-[12px] placeholder:leading-none"
        />
        <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
      </Clerk.Field>
      <Clerk.Field name="password" className="group/field relative mb-4">
        <Clerk.Input
          validatePassword
          type="password"
          required
          placeholder="Password"
          className="w-full rounded-[10px] border-[1px] border-solid border-black px-3 py-2 text-gray-800 placeholder:text-[12px] placeholder:leading-none"
        />
        <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
      </Clerk.Field>
      <SignUp.Captcha className="empty:hidden" />

      <div className="mb-4 text-left">
        <Link
          href="/forgot-password"
          className="text-sm font-bold text-secondaryBlue"
        >
          Forgot Password?
        </Link>
      </div>
      <SignUp.Action
        submit
        className="text-sm font-semibold mb-4 w-full rounded-md bg-secondaryBlue px-4 py-2 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Continue
      </SignUp.Action>

      <div className="relative mb-4">
        <div className="relative flex justify-center text-sm">
          <Link
            href="/login"
            className="bg-white px-2 text-secondaryBlue font-semibold"
          >
            Already have an account? Sign In here
          </Link>
        </div>
      </div>
      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-secondaryBlue font-semibold">
            or
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Clerk.Connection
          name="google"
          className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign up with Google
        </Clerk.Connection>

        <Clerk.Connection
          name="linkedin_oidc"
          className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg
            className="h-5 w-5 text-[#0A66C2]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Sign in with LinkedIn
        </Clerk.Connection>
      </div>
    </SignUp.Step>
  );
}

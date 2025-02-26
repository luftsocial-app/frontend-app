"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="w-full max-w-md rounded-lg bg-white  shadow-lg p-[1.875rem]"
        >
          <div className="mb-6 flex flex-col items-center justify-center">
            <div className="relative  w-12 mb-2">
              <div className="flex  w-full items-center justify-center rounded-md text-white">
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
            Welcome
          </h2>
          <p className="mb-6 text-center text-[12px] text-[#212020] font-normal">
            Log in to LuftSocial to continue using it.
          </p>

          <Clerk.GlobalError className="mb-4 block text-sm text-red-500" />
          <Clerk.Field name="identifier" className="group/field relative mb-4">
            <Clerk.Input
              type="text"
              required
              placeholder="Email Address"
              className="w-full rounded-[10px] border-[1px] border-solid border-black px-3 py-2 text-gray-800 placeholder:text-[12px] placeholder:leading-none"
            />
            <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
          </Clerk.Field>

          <Clerk.Field name="password" className="group/field relative mb-2">
            <Clerk.Input
              type="password"
              required
              placeholder="Password"
              className="w-full rounded-[10px] border-[1px] border-solid border-black px-3 py-2 text-gray-800 placeholder:text-[12px] placeholder:leading-none"
            />
            <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
          </Clerk.Field>

          <div className="mb-4 text-left">
            <Link
              href="/forgot-password"
              className="text-sm font-bold text-secondaryBlue hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-3">
            <Clerk.Connection
              name="google"
              className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
              Sign in with Google
            </Clerk.Connection>

            <Clerk.Connection
              name="linkedin_oidc"
              className="flex w-full items-center justify-center gap-x-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

          <SignIn.Action
            submit
            className="mb-4 w-full font-semibold text-sm rounded-md bg-secondaryBlue px-4 py-2 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Continue
          </SignIn.Action>

          <div className="flex justify-center">
            <Link
              href="/signup"
              className="text-secondaryBlue hover:text-blue-800 font-semibold text-sm text-center"
            >
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </SignIn.Step>

        <SignIn.Step
          name="verifications"
          className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
        >
          <div className="mb-6 flex flex-col items-center justify-center">
            <div className="relative h-12 w-12 mb-2">
              <div className="flex h-full w-full items-center justify-center rounded-md bg-blue-800 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
            </div>
            <h1 className="text-xl font-bold text-gray-800">LuftSocial</h1>
          </div>

          <h2 className="mb-1 text-center text-2xl font-semibold text-gray-800">
            Verify your account
          </h2>
          <p className="mb-6 text-center text-sm text-gray-600">
            We&apos;ve sent a verification code to your email
          </p>

          <Clerk.GlobalError className="mb-4 block text-sm text-red-500" />

          <SignIn.Strategy name="email_code">
            <Clerk.Field name="code" className="group/field relative mb-4">
              <Clerk.Label className="mb-1 block text-sm font-medium text-gray-700">
                Verification Code
              </Clerk.Label>
              <Clerk.Input
                type="otp"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-center text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
            </Clerk.Field>
            <SignIn.Action
              submit
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Verify
            </SignIn.Action>
          </SignIn.Strategy>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}

"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";
import Image from "next/image";

export function ContinueStep() {
  return (
    <SignUp.Step
      name="continue"
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
        Username
      </h2>
      <p className="mb-6 text-center text-sm text-gray-600">
        Choose a username
      </p>

      <Clerk.GlobalError className="block text-sm text-red-500" />
      <Clerk.Field name="username" className="group/field relative mb-4">
        <Clerk.Input
          type="text"
          required
          placeholder="Username"
          className="w-full rounded-[10px] border-[1px] border-solid border-black px-3 py-2 text-gray-800 placeholder:text-[12px] placeholder:leading-none"
        />
        <Clerk.FieldError className="mt-1 block text-xs text-red-500" />
      </Clerk.Field>
      <SignUp.Action
        submit
        className="text-sm font-semibold mb-4 w-full rounded-md bg-secondaryBlue px-4 py-2 text-center text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Continue
      </SignUp.Action>
    </SignUp.Step>
  );
}

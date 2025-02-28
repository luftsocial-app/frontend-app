"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

export function VerificationsStep() {
  return (
    <SignUp.Step
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

      <SignUp.Strategy name="email_code">
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
        <SignUp.Action
          submit
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Verify
        </SignUp.Action>
      </SignUp.Strategy>
    </SignUp.Step>
  );
}

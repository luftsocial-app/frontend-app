"use client";
import { Button } from "@/components/onBoarding/Button";
import { LuftIcon } from "@/icons";
import { useAuth, useSignIn } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [successfulCreation, setSuccessfulCreation] = useState(false);
  const [secondFactor, setSecondFactor] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { signIn, setActive } = useSignIn();

  async function create(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      return;
    }
    await signIn
      ?.create({
        strategy: "reset_password_email_code",
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true);
        setError("");
        toast("Successfully Sent Reset Code");
      })
      .catch((err) => {
        const errorMessage =
          err?.errors?.[0]?.longMessage ?? "An Error Occurred";

        toast.error(errorMessage, {
          position: "top-right",
        });
        setError(errorMessage);
      });
  }
  async function reset(e: React.FormEvent) {
    e.preventDefault();
    await signIn
      ?.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password,
      })
      .then((result) => {
        if (result.status === "needs_second_factor") {
          setSecondFactor(true);
          setError("");
          toast("Successfully Set New Password");
          router.push("/dashboard");
        } else if (result.status === "complete") {
          setActive({ session: result.createdSessionId });
          setError("");
        } else {
          console.log(result);
        }
      })
      .catch((err) => {
        console.error("error", err.errors[0].longMessage);
        setError(err.errors[0].longMessage);
      });
  }

  const resendLink = () => {
    create({} as any);
  };
  return (
    <div className="p-8 bg-white shadow-sm w-full max-w-md rounded-lg m-auto">
      <div className="flex flex-col items-center">
        <div className="p-2">
          <Image
            src="/images/onBoardingScreen/luft_image.png"
            height={60}
            width={60}
            alt="Luft Image"
          />
          <LuftIcon height={40} width={70} />
        </div>
        <div>
          <p className="text-lg font-bold text-gray-900 mb-1 text-center">
            Forgot Password
          </p>
          {!successfulCreation && (
            <p className="text-xs font-normal text-gray-900">
              Enter your email to retrieve password
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <form
          onSubmit={!successfulCreation ? create : reset}
          className="flex flex-col mt-6 mb-6"
        >
          <div className="flex flex-col items-center gap-6 justify-center">
            {!successfulCreation && (
              <div className="w-80">
                <div className="relative w-full">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    className="w-full px-4 py-3 text-secondaryBlue bg-white border border-black rounded-lg focus:outline-none focus:border-secondaryBlue peer placeholder-gray-500"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-xs text-gray-500 font-normal duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-secondaryBlue left-1"
                  >
                    Email Address
                  </label>
                </div>
              </div>
            )}
            {!successfulCreation && (
              <button
                type="submit"
                disabled={!email}
                className="w-full leading-6 flex items-center justify-center px-4 py-2 bg-secondaryBlue text-white rounded-md text-sm font-semibold disabled:opacity-50"
              >
                Continue
              </button>
            )}
          </div>

          {successfulCreation && (
            <div className="flex flex-col">
              <label htmlFor="password" className="text-black text-sm mb-1">
                Enter your new password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-80 h-10 bg-white border border-black rounded-lg focus:outline-none p-1"
              />
              <label htmlFor="password" className="text-black text-sm my-1">
                Enter reset code sent to your email
              </label>
              <input
                type="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-80 h-10 bg-white border border-black rounded-lg focus:outline-none p-1"
              />

              <button className="w-full leading-6 flex items-center justify-center px-4 py-2 border border-secondaryBlue rounded-md text-sm font-semibold duration-200 mt-2 bg-secondaryBlue text-white">
                Reset
              </button>
              {error && <p>{error}</p>}
            </div>
          )}
        </form>

        {successfulCreation && (
          <button
            onClick={resendLink}
            className="px-4 py-2 text-secondaryBlue text-sm font-semibold"
          >
            Resend Link
          </button>
        )}
        {!successfulCreation && (
          <Button
            href="/login"
            className="border border-secondaryBlue text-secondaryBlue text-center"
          >
            Return to Login
          </Button>
        )}
      </div>
    </div>
  );
}

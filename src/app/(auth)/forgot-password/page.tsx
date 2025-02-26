import { Button } from "@/components/onBoarding/Button";
import { InputField } from "@/components/onBoarding/InputField";
import { LuftIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export  default function ForgotPassword() {
  return (
    <>
      <div className="flex flex-col p-[30px] items-center">
        <div className="p-[10px] mb-[0.625rem]">
          <Image
            src="/images/onBoardingScreen/luft_image.png"
            height={60}
            width={60}
            alt="Luft Image"
          />
          <LuftIcon height={40} width={70} />
        </div>
        <div>
          <p className="text-lg font-bold text-[#212020] mb-[4px] text-center">
            Forgot Password
          </p>
          <p className="text-xs font-normal text-[#212020]">
            Enter your email to retrieve password
          </p>
        </div>
        <div className="my-[1.5rem] max-w-[19.25rem] max-h-[2.688rem] w-full">
          <InputField />
        </div>
        <Button
          href="/"
          className="bg-[#1E31D7] text-white font-semibold text-center"
        >
          {"Continue"}
        </Button>
        <Link
          href="/"
          className="px-[1rem] py-[0.375rem] text-[#1E31D7] text-sm font-semibold mb-[1.5rem]"
        >
          {"Resend Link"}
        </Link>
        <Button
          href="/login"
          className="border border-[#1E31D7] text-[#1E31D7] text-center"
        >
          {"Return to Login"}
        </Button>
      </div>
    </>
  );
}

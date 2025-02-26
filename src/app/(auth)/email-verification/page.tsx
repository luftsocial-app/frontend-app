import { Button } from "@/components/onBoarding/Button";
import { LuftIcon, VerifiedIcon } from "@/icons";
import Image from "next/image";

export default function EmailVerification() {
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
          <p className="text-xs font-normal text-[#212020] text-center">
            An Email has been sent your account
          </p>
        </div>
        <div className="my-[1.5rem]">
          <VerifiedIcon />
        </div>
        <Button
          href="/"
          className="bg-[#1E31D7] text-white font-semibold mb-[0.625rem] text-center"
        >
          {"Resend Link "}
        </Button>
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

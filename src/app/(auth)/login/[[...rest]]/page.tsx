import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <Image
        src="/images/onBoardingScreen/luft_image.png"
        height={60}
        width={60}
        alt="Luft Image"
        className="mb-4"
      />

      <div className="text-center mb-6">
        <p className="text-xl font-semibold text-black">Luft Social</p>
        <p className="text-lg text-gray-700">Welcome</p>
        <p className="text-sm text-gray-500">
          Log in to LuftSocial to continue using it.
        </p>
      </div>

      <SignIn
        path="/login"
        appearance={{
          elements: {
            // rootBox: "hidden",
            rootBox: "w-full max-w-[400px] bg-pink-700",
            card: "w-full border:none",
            header: "text-center mb-6",
            // header: "text-center mb-6",
            headerTitle: "hidden",
            headerSubtitle: "hidden",
            formButtonPrimary:
              "bg-blue-600 hover:bg-blue-700 text-white w-full rounded font-medium",
            formFieldInput:
              "w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500",
            formFieldLabel: "text-gray-700 font-medium",
            dividerLine: "bg-gray-200",
            dividerText: "text-gray-500",
            footer: "hidden",
          },
          layout: {
            socialButtonsPlacement: "bottom",
            showOptionalFields: false,
          },
          variables: {
            colorPrimary: "#1a73e8",
            colorText: "#333333",
            colorBackground: "#ffffff",
            colorDanger: "#dc2626",
            borderRadius: "0",
            spacingUnit: "1rem",
          },
        }}
      />
    </div>
  );
}

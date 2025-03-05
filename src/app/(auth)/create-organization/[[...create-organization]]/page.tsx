"use client";
import {
  CreateOrganization,
  useUser,
  useOrganizationList,
} from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateOrganizationPage() {
  const { user } = useUser();
  const { createOrganization } = useOrganizationList();
  const router = useRouter();

  async function handleCreateOrg() {
    const orgName =
      user?.fullName ??
      (`${user?.emailAddresses?.[0]?.emailAddress ?? ""}` || `${Date.now()}`);
    try {
      await createOrganization?.({ name: orgName });
      router.push("/choose-plan");
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex flex-col items-center  bg-white p-[30px]  rounded-[10px]">
      <div className="mb-6 flex flex-col items-center justify-center">
        <div className="relative w-12 mb-2">
          <div className="flex w-full items-center justify-center rounded-md text-white">
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

      <h2 className="mb-1 text-center text-lg font-bold text-gray-800">
        Create Organization
      </h2>
      <p className="mb-[22px] text-center text-[12px] text-[#212020] font-normal">
        Enter your organization details
      </p>
      <CreateOrganization
        appearance={{
          elements: {
            cardBox: {
              boxShadow: "none",
            },
          },
        }}
        skipInvitationScreen
        afterCreateOrganizationUrl="/choose-plan"
      />
      <button
        className="text-gray-800 text-base hover:underline mt-4"
        onClick={handleCreateOrg}
      >
        Skip
      </button>
    </div>
  );
}

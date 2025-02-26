"use client";
import { useCreateOrg } from "@/hooks/useCreateOrg";
import { CreateOrganization, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function CreateOrganizationPage() {
  const { createOrg } = useCreateOrg();
  const { user } = useUser();
  console.log("UserId is--->", user?.id);

  async function handleCreateOrg() {
    console.log("GOT--->");
    try {
      const data = await createOrg("ExampleOrg", user?.id ?? "");
      console.log("Organization Created:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <CreateOrganization
        skipInvitationScreen
        afterCreateOrganizationUrl="/onboarding"
      />
      <button
        className="text-gray-100 text-lg hover:underline"
        onClick={handleCreateOrg}
      >
        Skip
      </button>
    </div>
  );
}

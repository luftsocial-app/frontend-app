"use client";
import {
  CreateOrganization,
  useUser,
  useOrganizationList,
} from "@clerk/nextjs";
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
    <div className="flex flex-col items-center gap-4">
      <CreateOrganization
        skipInvitationScreen
        afterCreateOrganizationUrl="/choose-plan"
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

"use client";

import { useAuth } from "@clerk/nextjs";

export function useCreateOrg() {
  const { getToken } = useAuth();
  async function createOrg(orgName: string, userId: string): Promise<any> {
    const token = await getToken();
    console.log("Token--->", token);

    const clerkApiKey = process.env.NEXT_PUBLIC_CLERK_SECRET_KEY;

    if (!clerkApiKey) throw new Error("Clerk API key not found");

    const response = await fetch("https://api.clerk.com/v1/organizations", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name: orgName, created_by: userId }),
      mode: "no-cors",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `Error: ${response.status} ${response.statusText} - ${error.message}`
      );
    }

    return response.json();
  }

  return { createOrg };
}

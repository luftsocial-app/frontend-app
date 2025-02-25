"use client";
export function useCreateOrg() {

  async function createOrg(orgName: string, userId: string): Promise<any> {

    const clerkApiKey = process.env.NEXT_PUBLIC_CLERK_SECRET_KEY;

    if (!clerkApiKey) throw new Error("Clerk API key not found");

    const response = await fetch("https://api.clerk.com/v1/organizations", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: `Bearer ${clerkApiKey}`,
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

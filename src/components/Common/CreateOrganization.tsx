'use client'
import { useUser, CreateOrganization } from '@clerk/nextjs';
export default function CreateOrganizationPage() {
    const { isSignedIn } = useUser();
    console.log(isSignedIn,"usersigned")
    if (!isSignedIn) {
      return <p>Please sign in to create an organization.</p>;
    }
  return <CreateOrganization skipInvitationScreen={true} afterCreateOrganizationUrl="/add-member" />
}



'use client'
import { useUser, CreateOrganization } from '@clerk/nextjs';
import Link from 'next/link';
export default function CreateOrganizationPage() {
    const { isSignedIn } = useUser();
    console.log(isSignedIn,"usersigned")
    if (!isSignedIn) {
      return <p>Please sign in to create an organization.</p>;
    }
  return <div className='flex items-center w-full justify-center'>
 <div>
 <CreateOrganization skipInvitationScreen={true} afterCreateOrganizationUrl="/add-member" />
  <Link href="/" className='p-4 border mt-2 rounded-lg block bg-red-400 text-white w-fit'>Skip</Link>
 </div>
  </div>
}



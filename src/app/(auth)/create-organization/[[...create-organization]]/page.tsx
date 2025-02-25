// "use client";
// import { useCreateOrg } from "@/hooks/useCreateOrg";
// import { CreateOrganization, useUser } from "@clerk/nextjs";
// import Link from "next/link";

// export default function CreateOrganizationPage() {
//   const { createOrg } = useCreateOrg();
//   const { isSignedIn, user, isLoaded } = useUser();
//   console.log("UserId is--->", user?.id);

//   async function handleCreateOrg() {
//     console.log("GOT--->");
//     try {
//       const data = await createOrg("ExampleOrg", user?.id ?? '');
//       console.log("Organization Created:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   return (
//     <div className="">
//       <CreateOrganization />
//       <Link href="" className=" text-black" onClick={handleCreateOrg}>
//         {"Skip"}
//       </Link>
//     </div>
//   );
// }

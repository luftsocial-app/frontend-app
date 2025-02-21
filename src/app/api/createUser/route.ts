import { NextResponse } from "next/server";
import { createClerkClient } from "@clerk/backend";

const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY!,
});

// Ensure only POST requests are allowed
export async function POST(req: Request) {
    try {

        const {email, passowrd, role, orgId}=await req.json()
        console.log(orgId,"orgIdcoming")
        const result= await clerkClient?.users.createUser({
            firstName: 'Test',
            lastName: 'User',
            emailAddress: ['finaltesting@gmail.com'],
            password: "newlpassword@3",
            publicMetadata:{role:role}
        })
        console.log("resultcomingg:::", result)
            if(result){
                console.log(orgId,result.id, role)
                const addMemberToOrganization=await clerkClient.organizations.createOrganizationMembership({
                    organizationId:orgId,
                    userId:result.id,
                    role:role
                })
                console.log("addMemberToOrganizationaddMemberToOrganization",addMemberToOrganization)
                return NextResponse.json({ success: true, user: addMemberToOrganization }, { status: 200 });
            }
        

    } catch (error) {
        console.error("Error creating user:", error.errors);
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

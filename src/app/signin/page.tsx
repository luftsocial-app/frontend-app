'use client'
import React,  from 'react';

import Link from 'next/link';
import { useSignIn } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';
const Page = () => {

    const {isLoaded} =useSignIn()
    // const router= useRouter()
  

    async function submit (e:React.FormEvent){
        e.preventDefault()

        try {
            const response = await fetch("/api/createUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName: "Test",
                    lastName: "User",
                    email: "testclerk123@gmail.com",
                    password: "password",
                    role: "admin",
                }),
            });

            const data = await response.json();
            console.log(data,"datadatadata")
            // if(result.status=="complete"){
            //     setActive({session:result?.createdSessionId})

            //     // push user to dedicated routes
            //     // router.push('/')
            // }
        } catch (error) {
            console.log(error,"error while login") 
        }
    }
    return (
      <>test</>
    );
};

export default Page;

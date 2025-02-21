'use client'
import React, { useState } from 'react';
import {  useOrganization } from "@clerk/nextjs"
import { Mail, Lock } from 'lucide-react';
const AddMember = () => {
    const { organization,isLoaded } = useOrganization();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    console.log(organization,"organizationcoming")
 async function submit (e:React.FormEvent){
        e.preventDefault()

        try {
         if(organization){
          console.log(organization.id,"organizationid")
          const response = await fetch("/api/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
                role: 'org:member',
                orgId:organization?.id

              }),
        });

        const data = await response.json();
        console.log(data,"datadatadata")
         }
        } catch (error) {
            console.log(error,"error while login") 
        }
    }
    if(!isLoaded){
        return null
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
        Login
      </h2>
      
      <form onSubmit={submit} className="space-y-6">
        <div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Sign in
        </button>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="font-medium text-blue-600 hover:text-blue-800"
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddMember
import React from 'react'
import { SignUp, useUser } from '@clerk/nextjs'
const Signup = () => {
    const { user } = useUser()
    if (!user) {
        return <SignUp />
      }
      return <div>Welcome!</div>
}

export default Signup
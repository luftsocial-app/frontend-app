'use client'
import { CreateOrganization } from '@clerk/nextjs'
import React from 'react'

const OrganizationPage = () => {
  return (
<> 
<CreateOrganization skipInvitationScreen={true} afterCreateOrganizationUrl="/add-member" />
</>
  )
}

export default OrganizationPage
import SecondaryNavbar from '@/components/business-page/secondary-navbar'
import React from 'react'

export default function AuthLayout({children}: {children: React.ReactNode, params: any}) {
  return (
    <div>
      <SecondaryNavbar/>
      {children}
    </div>
  )
}
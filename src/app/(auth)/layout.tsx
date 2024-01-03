import React from 'react'

export default function AuthLayout({children}: {children: React.ReactNode, params: any}) {
  return (
    <div>{children}</div>
  )
}
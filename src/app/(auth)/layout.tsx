import React from 'react'

export default function AuthLayout({children, params: {locale}}: {children: React.ReactNode, params: any}) {
  return (
    <div>{children}</div>
  )
}
import ContactModal from '@/components/business-page/contact-modal'
import React from 'react'

export default function ContactPage({
  params,
}: {
  params: { businessName: string };
}) {
  return (
    <>
      <ContactModal businessName={params.businessName} />
    </>
  )
}

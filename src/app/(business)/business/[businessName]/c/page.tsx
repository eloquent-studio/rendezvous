import ContactModal from "@/components/business-page/contact-modal";
import React from "react";
import prisma from "@/lib/prisma";

export default async  function ContactPage({
  params,
}: {
  params: { businessName: string };
}) {
  const name = params.businessName

  const info = await prisma.businessAccount.findFirst({
    where: { name: name },
    select: {
      name: true,
      location: true,
      user: {
        select: {
          email: true,
        },
      },
    },
  });

  const contactInfo = info
    ? {
        name: info.name,
        location: info.location,
        email: info.user.email,
      }
    : null;

  return <ContactModal businessName={params.businessName} info={contactInfo} />;
}

import BusinessPage from "@/components/business-page";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function Page({ params }: { params: { businessName: string } }) {
  const business = await prisma.businessAccount.findUnique({
    where: {
      name: params.businessName
    },
    include: {
      user: {
        select: {
          id: true,
          fullname: true
        }
      }
    }
  })
  if (!business)
    notFound()
  return <BusinessPage business={business} />
}
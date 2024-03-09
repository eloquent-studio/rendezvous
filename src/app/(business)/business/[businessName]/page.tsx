import BusinessPage from "@/components/business-page";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function Page({ params }: { params: { businessName: string } }) {
  const bussiness = await prisma.businessAccount.findUnique({
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
  if (!bussiness)
    notFound()
  return <BusinessPage bussiness={bussiness} />
}
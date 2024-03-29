import BusinessPage from "@/components/business-page";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import SecondaryNavbar from "@/components/business-page/secondary-navbar";
import Calendar from "@/components/business-page/calendar";

export default async function Page({
  params,
}: {
  params: { businessName: string };
}) {
  const business = await prisma.businessAccount.findUnique({
    where: {
      name: params.businessName,
    },
    include: {
      user: {
        select: {
          id: true,
          fullname: true,
        },
      },
    },
  });
  if (!business) notFound();

  const username = params.businessName

  const rndv = await prisma?.guestRendezvous.findMany({
    select: {
      id: true,
      rendezvousAt: true
    }
  })

  return (
    <>
      <SecondaryNavbar />
      <BusinessPage business={business} Calendar={<Calendar username={username} rndv={rndv}/>} />
    </>
  );
}

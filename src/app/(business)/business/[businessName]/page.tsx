import BusinessPage from "@/components/business-page";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import SecondaryNavbar from "@/components/business-page/secondary-navbar";
import Calendar from "@/components/business-page/calendar";
import { getGuestRendezvouses } from "@/actions/business/guest-rendezvous";
import { getUserRendezvouses } from "@/actions/business/user-rendezvous";

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

  const username = params.businessName;

  const rndv = await getGuestRendezvouses(business.id);
  const urndv = await getUserRendezvouses(business.id);

  console.log(rndv)
  console.log(urndv)

  return (
    <>
      <SecondaryNavbar />
      <BusinessPage
        business={business}
        Calendar={<Calendar username={username} rndv={rndv} urndv={urndv} />}
      />
    </>
  );
}

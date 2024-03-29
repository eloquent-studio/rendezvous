import TimeModal from "@/components/business-page/time-modal";
import React from "react";

export default async function RendezvousTimePage({
  searchParams,
  params,
}: {
  searchParams: { date: string };
  params: any;
}) {
  const { date } = searchParams;
  const businessName = params.businessName;
  const d = new Date(date);

  const rndv = await prisma?.guestRendezvous.findMany({
    select: {
      id: true,
      rendezvousAt: true
    }
  })

  return (
    <>
      <TimeModal date={d.toString()} businessName={businessName} rndv={rndv} />
    </>
  );
}

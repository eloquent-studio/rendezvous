"use server";

import TimeModal from "@/components/business-page/time-modal";
import { headers } from "next/headers";
import React from "react";
import { fetchUser } from "@/store/user";
import store from "@/store";

export default async function RendezvousTimePage({
  searchParams,
  params,
}: {
  searchParams: { date: string };
  params: any;
}) {
  const headersList = headers();
  const id = headersList.get("id");

  await store.dispatch(fetchUser(Number(id)));
  const { user } = await store.getState().user;

  const { date } = searchParams;
  const businessName = params.businessName;
  const d = new Date(date);

  const rndv = await prisma?.guestRendezvous.findMany({
    select: {
      id: true,
      rendezvousAt: true,
    },
  });

  return (
    <>
      <TimeModal
        date={d.toString()}
        businessName={businessName}
        rndv={rndv}
        user={user}
        id={id}
      />
    </>
  );
}

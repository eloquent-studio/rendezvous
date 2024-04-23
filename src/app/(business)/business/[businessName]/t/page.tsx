"use server";

import TimeModal from "@/components/business-page/time-modal";
import { headers } from "next/headers";
import React from "react";
import { fetchUser } from "@/store/user";
import store from "@/store";
import { getGuestRendezvouses } from "@/actions/business/guest-rendezvous";
import { getUserRendezvouses } from "@/actions/business/user-rendezvous";

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

  const rndv = await getGuestRendezvouses()
  const urndv = await getUserRendezvouses()

  return (
    <>
      <TimeModal
        date={d.toString()}
        dateString={date}
        businessName={businessName}
        rndv={rndv}
        urndv={urndv}
        user={user}
        id={id}
      />
    </>
  );
}

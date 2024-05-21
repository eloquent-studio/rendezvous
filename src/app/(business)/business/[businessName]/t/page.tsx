"use server";

import TimeModal from "@/components/business-page/time-modal";
import { headers } from "next/headers";
import React from "react";
import { fetchUser } from "@/store/user";
import store from "@/store";
import { getGuestRendezvouses } from "@/actions/business/guest-rendezvous";
import { getUserRendezvouses } from "@/actions/business/user-rendezvous";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";


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

  const d = new Date(date);

  const rndv = await getGuestRendezvouses(business.id)
  const urndv = await getUserRendezvouses(business.id)

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

"use server";

import prisma from "@/lib/prisma";

export async function getBusinesses() {
  const guestRendezvouses = await prisma?.businessAccount.findMany({
    take: 10,
    select: {
      id: true,
      profession: true,
      name: true,
      location: true,
      image: true, 
      bio: true
    },
    orderBy: {
      name: 'desc'
    }
  });

  return guestRendezvouses
}
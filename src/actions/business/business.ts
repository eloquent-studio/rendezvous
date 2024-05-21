"use server";

import prisma from "@/lib/prisma";

export async function getBusinesses(q: string, page: any) {
  const ITEM_PER_PAGE = 3;

  try {
    const count = await prisma.businessAccount.count({
      where: {
        name: {
          contains: q,
          mode: "insensitive",
        },
      },
    });

    const businesses = await prisma?.businessAccount.findMany({
      where: {
        OR: [
          {
            name: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            location: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            profession: {
              contains: q,
              mode: "insensitive",
            },
          },
          {
            bio: {
              contains: q,
              mode: "insensitive",
            },
          },
        ],
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (page - 1),
      select: {
        id: true,
        name: true,
        profession: true,
        location: true,
        image: true,
        bio: true,
      },

      // orderBy: {
      //   name: 'desc'
      // }
    });

    return { count, businesses };
  } catch (error) {
    throw new Error("Failed to fetch!");
  }
}

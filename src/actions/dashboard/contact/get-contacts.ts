import prisma from "@/lib/prisma";

export const getContacts = async (id: number) => {
  const business = await prisma.businessAccount.findFirst({
    where: {
      userId: id,
    },
  });
  if (!business) return [];
  return await prisma.contactForm.findMany({
    where: {
      businessId: business.id,
    },
  });
};

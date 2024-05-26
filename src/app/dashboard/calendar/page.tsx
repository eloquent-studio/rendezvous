import Calendar from "@/components/dashboard/dashboard-calendar/calendar";
import { getGuestRendezvouses } from "@/actions/business/guest-rendezvous";
import { getUserRendezvouses } from "@/actions/business/user-rendezvous";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";

export default async function DashboardCalendarPage() {
  const headersList = headers();
  const id = headersList.get("id");

  const business = await prisma.businessAccount.findUnique({
    where: {
      userId: Number(id)
    },
    select: { id: true }
  });

  const rndv = await getGuestRendezvouses(business?.id!);
  const urndv = await getUserRendezvouses(business?.id!);

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
      <Calendar rndv={rndv} urndv={urndv} />
    </div>
  );
}

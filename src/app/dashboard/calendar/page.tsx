import Calendar from "@/components/dashboard/dashboard-calendar/calendar";
import { getGuestRendezvousInfo } from "@/actions/business/guest-rendezvous";
import { getUserRendezvousInfo } from "@/actions/business/user-rendezvous";
import { headers } from "next/headers";

export default async function DashboardCalendarPage() {
  const headersList = headers();
  const userId = headersList.get("id");

  const rndv = await getGuestRendezvousInfo();
  const urndv = await getUserRendezvousInfo();

  return (
    <div className="w-full h-full flex items-center justify-center bg-white">
        <Calendar rndv={rndv} urndv={urndv} />
    </div>
  );
}
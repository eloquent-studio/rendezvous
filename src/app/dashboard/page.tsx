import { getGuestRendezvousInfo } from "@/actions/business/guest-rendezvous";
import { getUserRendezvousInfo } from "@/actions/business/user-rendezvous";
import CancelButton from "@/components/props/cancel-button";
import DismissButton from "@/components/props/dismiss-button";
import { months } from "@/lib/data";

export default async function DashboardPage() {
  // Get today's date
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const todayDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;

  const monthIndex = today.getMonth();
  const monthName = months[monthIndex];
  const formattedTodaysDate = `${monthName} ${day}, ${year}`;

  const rndv = await getGuestRendezvousInfo();
  const urndv = await getUserRendezvousInfo();

  const todaysRendezvous = [] as any;

  const dates = [] as any;

  // Check if rendezvous data is available
  if (rndv && urndv) {
    rndv.forEach((item) => {
      const rendezvousDate = new Date(item.rendezvousAt);
      const formattedTime = `${rendezvousDate.getHours()}:${rendezvousDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      dates.push(formattedTime);

      // Check if the rendezvous is today
      const formattedDate = `${rendezvousDate.getFullYear()}-${(
        rendezvousDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${rendezvousDate
        .getDate()
        .toString()
        .padStart(2, "0")}`;
      if (formattedDate === todayDate) {
        todaysRendezvous.push(item);
      }
    });

    urndv.forEach((item) => {
      const rendezvousDate = new Date(item.rendezvousAt);
      const formattedTime = `${rendezvousDate.getHours()}:${rendezvousDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      dates.push(formattedTime);

      // Check if the rendezvous is today
      const formattedDate = `${rendezvousDate.getFullYear()}-${(
        rendezvousDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${rendezvousDate
        .getDate()
        .toString()
        .padStart(2, "0")}`;
      if (formattedDate === todayDate) {
        todaysRendezvous.push(item);
      }
    });
  }

  console.log(todaysRendezvous);

  return (
    <div className="w-full h-screen">
      <div className="container max-w-screen-sm min-h-[90vh] py-4 px-8 mx-auto bg-black/80 flex flex-col m-4">
        <ol className="relative border-s border-gray-200">
          {todaysRendezvous ? (
            todaysRendezvous.map((today: any) => (
              <li
                key={today.id}
                className={`mb-10 ms-8
              ${
                today.isCancelled
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white cursor-pointer"
              }`}
              >
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-2 font-semibold uppercase">
                  {today.business.name}
                </h3>
                <div className="w-full flex flex-row justify-between items-center font-medium leading-none text-sm mb-4">
                  <time className="block mb-2 leading-none">
                    {formattedTodaysDate} -{" "}
                    {today.rendezvousAt.toTimeString().substring(0, 5)}
                  </time>
                  <p className="block mb-2">{today.fullName}</p>
                  {/* <span>45$</span> */}
                  {today.phoneNumber && (
                    <div className="w-fit flex flex-row items-center gap-1">
                      <svg
                        className="w-3 h-3 text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 19 18"
                      >
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                      </svg>
                      <p className="text-sm">{today.phoneNumber}</p>
                    </div>
                  )}
                </div>
                {today.message && (
                  <div className="w-full flex flex-row items-center gap-1">
                    <svg
                      className="w-4 h-4 text-gray-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                    <p className="text-sm">{today.message}</p>
                  </div>
                )}
                <div className="w-full flex flex-row justify-end items-end gap-4 font-medium leading-none text-sm">
                  {/* <button
                    type="button"
                    className="bg-transparent font-medium text-xs px-4 py-1.5 text-blue-500 hover:underline inline-flex items-center"
                    data-dismiss-target="#alert-additional-content-2"
                    aria-label="Close"
                  >
                    <svg
                      className="w-2.5 h-2.5 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                    Dismiss
                  </button> */}
                  {/* <DismissButton today={today}/> */}
                  <div
                    className={`font-medium text-xs px-4 py-1.5 text-center inline-flex items-center text-red-600 ${
                      today.isCancelled
                        ? "cursor-not-allowed"
                        : "hover:underline cursor-pointer"
                    }`}
                  >
                    <svg
                      className="w-2 h-2 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <CancelButton
                      userId={today.userId!}
                      businessId={String(today.businessId)}
                      cancelled={today.isCancelled}
                    />
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="w-full flex flex-row items-center gap-1">
              <svg
                className="w-4 h-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
              <p className="text-sm">No rendezvouses yet</p>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
}

"use client";

import { SubmitButton } from "@/components/dashboard/submit-button";
import { UpdateProfileAction } from "@/actions/dashboard/settings/update-profile";
import { useFormState } from "react-dom";

const initialState: { email: string } = {
  email: "",
};

export default function ProfileSetting({
  children,
  user,
}: {
  children: React.ReactNode;
  user: any;
}) {
  const updateUserWithId = UpdateProfileAction.bind(null, user.id);

  const [state, formAction] = useFormState(updateUserWithId, initialState);

  return (
    <div className="w-full h-full">
      <div className="flex items-center">{children}</div>
      <form
        className="w-full md:w-1/2 h-full space-y-2 p-4"
        action={formAction}
      >
        <h1 className="mb-4 text-xl uppercase">update profile</h1>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M480-492.309q-57.749 0-98.874-41.124-41.125-41.125-41.125-98.874 0-57.75 41.125-98.874 41.125-41.125 98.874-41.125 57.749 0 98.874 41.125 41.125 41.124 41.125 98.874 0 57.749-41.125 98.874-41.125 41.124-98.874 41.124ZM180.001-187.694v-88.922q0-29.384 15.962-54.422 15.961-25.038 42.653-38.5 59.308-29.077 119.654-43.615T480-427.691q61.384 0 121.73 14.538 60.346 14.538 119.654 43.615 26.692 13.462 42.653 38.5 15.962 25.038 15.962 54.422v88.922H180.001ZM240-247.693h480v-28.923q0-12.154-7.039-22.5-7.038-10.346-19.115-16.885-51.692-25.461-105.418-38.577Q534.702-367.693 480-367.693t-108.428 13.115q-53.726 13.116-105.418 38.577-12.077 6.539-19.115 16.885Q240-288.77 240-276.616v28.923Zm240-304.614q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm0 384.614Z" />
            </svg>
          </span>
          <input
            defaultValue={user?.fullname || ""}
            type="text"
            name="fullname"
            id="fullame"
            className="pl-12 block px-2.5 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="firstName"
            className="ml-2 peer-focus:ml-2 peer-placeholder-shown:ml-10 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto rtl:ml-0 rtl:peer-focus:ml-0 start-1 "
          >
            First Name
          </label>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M172.309-180.001q-30.308 0-51.308-21t-21-51.308v-455.382q0-30.308 21-51.308t51.308-21h615.382q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H172.309ZM480-457.694 160-662.309v410q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h615.382q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847v-410L480-457.694ZM480-520l313.846-200H166.154L480-520ZM160-662.309V-720-252.309q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462H160v-422.309Z" />
            </svg>
          </span>
          <input
            defaultValue={user?.email || ""}
            type="email"
            id="email"
            name="email"
            className="pl-12 block px-2.5 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className="ml-2 peer-focus:ml-2 peer-placeholder-shown:ml-10 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto rtl:ml-0 rtl:peer-focus:ml-0 start-1 "
          >
            Email
          </label>
        </div>
        {state?.email && (
          <p className="text-xs font-medium text-red-600">{state?.email}</p>
        )}

        <div className="w-full flex items-center justify-end pt-2.5">
          <SubmitButton>Update</SubmitButton>
        </div>
      </form>
    </div>
  );
}

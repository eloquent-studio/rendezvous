"use client";

import BusinessLogoUpdate from "./business-logo";
import { GetBusinessDetails, UpdateBusinessDetails } from "@/actions/dashboard/settings/business.action";
import { useFormState } from "react-dom";
import { SubmitButton } from "../submit-button";

const initialState: { name: string } = {
  name: "",
};

export default function BusinessSetting({
  children,
  user,
  updatedInfo
}: {
  user: any,
  children: React.ReactNode,
  updatedInfo: any
}) {

  const updateUserWithId = UpdateBusinessDetails.bind(null, user.id)

  const [state, formAction] = useFormState(updateUserWithId, initialState)

  return (
    <div>
      <div className="px-2 flex items-center">
        {children}
        <span className="ml-2 text-xl">Business Details</span>
      </div>
      <form
        action={formAction}
        className="space-y-2 border border-gray-300 rounded-sm p-4 m-2">
        <div className="relative">
          <select
            id="profession"
            name="profession"
            className="block pl-4 px-2.5 py-3 appearance-none w-full bg-transparent border border-gray-300 hover:border-gray-500 rounded leading-tight focus:outline-none focus:shadow-outline">
            {updatedInfo?.profession && <option>{updatedInfo.profession}</option>}
            <option value="Dentist">Dentist</option>
            <option value="Engineer">Engineer</option>
            <option value="Chemist">Chemist</option>
          </select>
          <label
            htmlFor="profession"
            className="ml-2 bg-slate-100 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2"
          >
            Profession
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
              <path d="M172.309-140.001q-30.308 0-51.308-21t-21-51.308v-415.382q0-30.308 21-51.308t51.308-21h167.692v-67.691q0-30.307 21-51.307 21-21 51.308-21h135.382q30.308 0 51.308 21t21 51.307v67.691h167.692q30.308 0 51.308 21t21 51.308v415.382q0 30.308-21 51.308t-51.308 21H172.309ZM400-699.999h160v-67.691q0-4.616-3.846-8.462-3.847-3.847-8.463-3.847H412.309q-4.616 0-8.463 3.847Q400-772.306 400-767.69v67.691Zm400 329.998H579.999v70H380.001v-70H160v157.692q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h615.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-157.692ZM440-360h80v-80h-80v80Zm-280-69.999h220.001v-70h199.998v70H800v-197.692q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H172.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v197.692ZM480-400Z" />
            </svg>
          </span>
          <input
            defaultValue={updatedInfo?.name || ""}
            type="text"
            name="name"
            id="name"

            className="pl-12 block px-2.5 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="ml-2 peer-focus:ml-2 peer-placeholder-shown:ml-10  absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto rtl:ml-0 rtl:peer-focus:ml-0 start-1 "
          >
            Business Name
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
              <path d="M480.068-485.385q29.855 0 51.047-21.26 21.192-21.26 21.192-51.115t-21.26-51.047q-21.26-21.192-51.115-21.192t-51.047 21.26q-21.192 21.26-21.192 51.115t21.26 51.047q21.26 21.192 51.115 21.192ZM480-179.461q117.384-105.076 179.654-201.577 62.269-96.5 62.269-169.039 0-109.384-69.5-179.846T480-800.385q-102.923 0-172.423 70.462t-69.5 179.846q0 72.539 62.269 169.039Q362.616-284.537 480-179.461Zm0 79.844Q329.001-230.463 253.539-343.154q-75.461-112.692-75.461-206.923 0-138.46 89.577-224.191Q357.231-859.999 480-859.999t212.345 85.731q89.577 85.731 89.577 224.191 0 94.231-75.461 206.923Q630.999-230.463 480-99.617Zm0-458.075Z" />
            </svg>
          </span>
          <input
            defaultValue={updatedInfo?.location || ""}
            type="text"
            name="location"
            id="location"
            className="pl-12 block px-2.5 py-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="location"
            className="ml-2 peer-focus:ml-2 peer-placeholder-shown:ml-10 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-slate-100 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto rtl:ml-0 rtl:peer-focus:ml-0 start-1 "
          >
            Business Location
          </label>
        </div>

        <SubmitButton>Update</SubmitButton>
      </form>

      <BusinessLogoUpdate />
    </div>
  );
}

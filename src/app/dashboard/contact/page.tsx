"use server";
import store from "@/store";
import { fetchUser } from "@/store/user";
import { headers } from "next/headers";
import { getContacts } from "@/actions/dashboard/contact/get-contacts";

export default async function Page() {
  const headersList = headers();
  const id = headersList.get("id");
  await store.dispatch(fetchUser(Number(id)));
  const { user } = await store.getState().user;
  //@ts-ignore
  const contacts = await getContacts(user?.id || 0);

  return (
    <div className="flex flex-row w-full h-full min-h-screen bg-white">
      <div className="relative h-full w-full">
        <div className="text-xl font-medium p-4">Contact</div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <tbody>
            {contacts.length > 0 ? 
            <>
                {contacts.map((item) => (
              <tr className="bg-white" key={item.id}>
                <th
                  scope="row"
                  className="px-2 sm:px-4 sm:py-4 font-medium text-gray-900 whitespace-nowrap flex flex-row"
                >
                  <div className="flex items-center px-4">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value={item.id}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  {item.mail}
                </th>
                <td className="px-2 sm:px-4 sm:py-4">{item?.subject}</td>
                <td className="px-2 sm:px-4 sm:py-4">{item?.message}</td>
              </tr>
            ))}
            </> : 
            <span className="text-black p-4">No messages yet.</span>
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

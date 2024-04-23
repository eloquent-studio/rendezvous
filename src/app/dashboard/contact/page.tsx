"use server"
import store from "@/store";
import { fetchUser } from '@/store/user';
import { headers } from 'next/headers'
import { getContacts } from "@/actions/dashboard/contact/get-contacts"

export default async function Page() {
    const headersList = headers()
    const id = headersList.get('id')
    await store.dispatch(fetchUser(Number(id)))
    const { user } = await store.getState().user
    //@ts-ignore
    const contacts = await getContacts(user?.id || 0);


    return <div className="flex flex-row w-full h-full min-h-screen bg-white dark:bg-gray-800">
        <div className="relative h-full w-full">
            <div className="text-xl font-medium px-6 py-2">Contact</div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    {
                        contacts.map((item) =>
                            <tr className="bg-white dark:bg-gray-800" key={item.id}>
                                <th scope="row" className="px-2 sm:px-4 sm:py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-row">
                                    <div className="flex items-center px-4">
                                        <input id="default-checkbox" type="checkbox" value={item.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    </div>
                                    {item.mail}
                                </th>
                                <td className="px-2 sm:px-4 sm:py-4">
                                    {item?.subject}
                                </td>
                                <td className="px-2 sm:px-4 sm:py-4">
                                    {item?.message}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </div>
}
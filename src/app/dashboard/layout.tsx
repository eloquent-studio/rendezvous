import Sidebar from "@/components/sidebar"
import store from "@/store";
import { fetchUser } from '@/store/user';
import { headers } from 'next/headers'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const headersList = headers()
    const id = headersList.get('id')

    await store.dispatch(fetchUser(Number(id)))
    // const { user } = store.getState().user

    return <div className="h-full bg-dashboard-bg bg-cover">
        <div className="w-full h-screen overflow-hidden flex flex-row bg-black bg-opacity-20">
            <Sidebar />
            <div className="w-full">{children}</div>
        </div>
    </div>
}
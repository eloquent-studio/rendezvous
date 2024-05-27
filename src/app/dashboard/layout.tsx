import Sidebar from "@/components/sidebar"
import { headers } from 'next/headers'
import prisma from '@/lib/prisma'
import { getNotifications } from "@/actions/business/notification"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const headersList = headers()
    const id = headersList.get('id')

    const avatar = await prisma.businessAccount.findUnique({
        where: { userId: Number(id) },
        select: { image: true }
    })

    const notifications = await getNotifications(id!)
    const count = notifications?.length ?? 0

    return <div className="h-full bg-dashboard-bg bg-cover">
        <div className="w-full h-screen overflow-hidden flex flex-row bg-black bg-opacity-20">
            <Sidebar image={avatar?.image ?? null} count={count}/>
            <div className="w-full">{children}</div>
        </div>
    </div>
}
import Sidebar from "@/components/sidebar"
import { headers } from 'next/headers'
import prisma from '@/lib/prisma'

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const headersList = headers()
    const id = headersList.get('id')

    const avatar = await prisma.businessAccount.findUnique({
        where: { userId: Number(id) },
        select: { image: true, id: true }
    })



    return <div className="h-full bg-dashboard-bg bg-cover">
        <div className="w-full h-screen overflow-hidden flex flex-row bg-black bg-opacity-20">
            <Sidebar image={avatar?.image ?? null} />
            <div className="w-full">{children}</div>
        </div>
    </div>
}
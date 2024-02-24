import Sidebar from "@/components/sidebar"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="h-full bg-dashboard-bg bg-cover">
        <div className="w-full h-screen overflow-hidden flex flex-row bg-black bg-opacity-20">
            <Sidebar />
            <div className="w-full">{children}</div>
        </div>
    </div>
}
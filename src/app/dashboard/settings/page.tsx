"use server"
import store from "@/store";
import Tabbar from "@/components/dashboard/settings/tab-bar";
import { fetchUser } from '@/store/user';
import { headers } from 'next/headers'

export default async function Settings() {
    const headersList = headers()
    const id = headersList.get('id')
    await store.dispatch(fetchUser(Number(id)))
    const { user } = await store.getState().user
    return <Tabbar user={user} />
}


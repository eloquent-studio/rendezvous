"use server"
import store from "@/store";
import Tabbar from "@/components/dashboard/settings/tab-bar";
import { fetchUser } from '@/store/user';
import { headers } from 'next/headers'
import { GetBusinessDetails } from "@/actions/dashboard/settings/business.action";

export default async function Settings() {
    const headersList = headers()
    const id = headersList.get('id')
    await store.dispatch(fetchUser(Number(id)))
    const { user } = await store.getState().user

    const updatedInfo = await GetBusinessDetails(Number(id))

    return <Tabbar user={user} updatedInfo={updatedInfo} />
}


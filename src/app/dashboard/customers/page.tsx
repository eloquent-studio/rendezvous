"use server"

import CustomerContainer from "@/components/dashboard/customers/container"
import prisma from "@/lib/prisma"
import store from "@/store";
import { fetchUser } from '@/store/user';
import { headers } from 'next/headers'

const getData = async (id: any) => {

  const usersWithRendezvousFromBusiness = await prisma.user.findMany({
    where: {
      rendezvous: {
        some: {
          businessId: id
        }
      }
    },
    select: {
      id: true,
      email: true,
      fullname: true,
      rendezvous: true
    },
  })

  return usersWithRendezvousFromBusiness;
}


export default async function Page() {
  const headersList = headers()
  const id = headersList.get('id')
  await store.dispatch(fetchUser(Number(id)))
  const { user } = await store.getState().user
  //@ts-ignore
  const data = await getData(user?.id ?? 0);
  return <CustomerContainer data={data}></CustomerContainer>
}


"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const getNotifications = async (businessId: number) => {
  console.log(businessId)
  const notifications = await prisma.notification.findMany({
    where: { businessId: Number(businessId) },
    orderBy: { createdAt: 'desc' }
  })

    // Check if the business account exists before updating
    const businessAccount = await prisma.businessAccount.findUnique({
      where: { id: Number(businessId) }
  })

  if (businessAccount) {
      await prisma.businessAccount.update({
          where: { id: Number(businessId) },
          data: { hasNotifications: false }
      })
  } else {
      console.error(`Business account with id ${businessId} not found.`)
  }

  return notifications ?? []
}
export const deleteNotification = async (notificationId: string) => {
  await prisma.notification.delete({
    where: { id: Number(notificationId) }
  })

  console.log("Deleted")
  revalidatePath("/dashboard/notification")
}
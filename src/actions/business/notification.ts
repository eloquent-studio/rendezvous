"use server"

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const getNotifications = async (businessId: string) => {
    const notifications = await prisma.notification.findMany({
      where: { businessId: Number(businessId) },
      orderBy: { createdAt: 'desc' }
    })

    await prisma.businessAccount.update({
      where: { id: Number(businessId) },
      data: { hasNotifications: false }
    })

    // revalidatePath(path)

    return notifications
}

export const deleteNotification = async (notificationId: string) => {
  await prisma.notification.delete({
    where: { id: Number(notificationId) }
  })

  console.log("Deleted")
  revalidatePath("/dashboard/notification")
}
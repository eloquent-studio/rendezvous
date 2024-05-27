"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import sendMail from "@/lib/send-mail";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const createUserRendezvousSchema = z.object({
  userId: z.string(),
  email: z
    .string({
      invalid_type_error: "Email is required",
      required_error: "Email is required",
    })
    .email("This is not a valid email."),
  fullName: z.string({
    required_error: "Full name is required",
  }),
  date: z.string(),
  time: z.string(),
  businessName: z.string(),
});

export async function UserRendezvous(prevState: any, formData: FormData) {
  const isValidData = createUserRendezvousSchema.parse({
    userId: formData.get("userId"),
    email: formData.get("email"),
    businessName: formData.get("businessName"),
    fullName: formData.get("fullName"),
    message: formData.get("message"),
    date: formData.get("date"),
    time: formData.get("time"),
  });

  console.log(isValidData.userId);

  const business = await prisma.businessAccount.findUnique({
    where: { name: isValidData.businessName },
  });

  if (!business)
    return {
      error: "Could not find the business!",
      success: "",
    };

  console.log(business.id);

  const dateInfo = {
    name: "date",
    value: isValidData.date,
  };

  const timeInfo = {
    name: "time",
    value: isValidData.time,
  };

  // Parse date
  const dateParts = dateInfo.value.split(" ");
  const dateString = `${dateParts[1]} ${dateParts[2]} ${dateParts[3]}`; // 'Mar 26 2024'
  const dateObj = new Date(dateString);

  // Parse time
  const timeParts = timeInfo.value.split(":");
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  // Set time to the date object
  console.log(hours);
  dateObj.setHours(hours, minutes);

  console.log(dateObj.toLocaleTimeString());

  const rendezvous = await prisma.rendezvous.create({
    data: {
      userId: Number(isValidData.userId),
      email: isValidData.email,
      fullName: isValidData.fullName,
      businessId: business.id,
      rendezvousAt: dateObj,
      createdAt: new Date(Date.now()),
    },
  });

  try {
    if (business.id) {
      await prisma.notification.create({
        data: {
          body: `New booking from ${rendezvous.fullName} at ${rendezvous.rendezvousAt}`,
          businessId: business.id,
        },
        include: { business: true }
      })

      await prisma.businessAccount.update({
        where: {
          id: business.id
        },
        data: {
          hasNotifications: true
        }
      });
    }
  } catch (error) {
    throw new Error("Failed!")
  }

  const result = await sendMail({
    email: isValidData.email,
    subject: "Rendezvous Confirmation",
    text: null,
    html: `<div>Dear ${isValidData.fullName},<br />
      This is to confirm the details of your rendezvous with <strong>${isValidData.businessName}</strong>. Thank you for trusting Rendezvous. We wanted to let you know that we have successfully received your rendezvous request. Here are the rendezvous details. You can check below.
      <br />
      <strong>From: </strong>${isValidData.businessName}
      <br />
      <strong>Date & Time:</strong> ${dateObj}
      <br />
      Best regards,
      <br />
      Rendezvous Team
      </div>`,
  });

  if (!result)
    return {
      error: "Email could not be sent",
      success: false,
    };

  redirect(`/profile`);
}

export async function getUserRendezvous(userId: string) {
  const userRendezvous = await prisma.rendezvous.findMany({
    where: { userId: Number(userId) },
    include: {
      business: {
        select: { name: true, location: true, profession: true, image: true },
      },
    },
  });

  return userRendezvous;
}

export async function cancelRendezvous(userId: string, businessId: string) {
  const rendezvous = await prisma.rendezvous.findFirst({
    where: {
      userId: Number(userId),
      businessId: Number(businessId),
    },
  });

  console.log(rendezvous);

  if (!rendezvous) {
    throw new Error("Rendezvous not found");
  }

  const canceled = await prisma.rendezvous.update({
    where: {
      id: rendezvous.id,
    },
    data: {
      isCancelled: true,
    },
  });

  console.log(canceled);

  revalidatePath(`/profile`);
  return canceled;
}

export async function getUserRendezvouses(id: number) {
  const rendezvouses = await prisma?.rendezvous.findMany({
    where: {
      businessId: id,
    },
    select: {
      id: true,
      rendezvousAt: true,
      isCancelled: true,
      email: true
    },
  });

  return rendezvouses;
}

export async function getUserRendezvousInfo() {
  const rendezvouses = await prisma?.rendezvous.findMany({
    orderBy: {
      rendezvousAt: "desc",
    },
    include: {
      business: {
        select: {
          name: true,
        },
      },
    },
  });

  return rendezvouses;
}

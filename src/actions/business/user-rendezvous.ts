"use server"


import { z } from "zod";
import prisma from "@/lib/prisma";
import sendMail from "@/lib/send-mail";
import { redirect } from "next/navigation";


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

    await prisma.rendezvous.create({
      data: {
        userId: Number(isValidData.userId),
        email: isValidData.email,
        fullName: isValidData.fullName,
        businessId: business.id,
        rendezvousAt: dateObj,
        createdAt: new Date(Date.now()),
      },
    });

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


  redirect(`/c/${Number(isValidData.userId)}`);
}

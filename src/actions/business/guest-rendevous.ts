"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import sendMail from "@/lib/send-mail";

const createGuestRendezvousSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email is required",
      required_error: "Email is required",
    })
    .email("This is not a valid email."),
  message: z.string(),
  phoneNumber: z.string().trim().refine(phone => phone.length === 10, {
    message: 'Phone number must be 10 characters'
  }),
  // countryCode: z.string({
  //   required_error: "Country Code is required",
  // }),
  fullName: z.string({
    required_error: "Full name is required",
  }),
  date: z.string(),
  time: z.string(),
  businessName: z.string()
});

export async function GuestRendevous(prevState: any, formData: FormData) {
  try {
    console.log(formData)
    const isValidData = createGuestRendezvousSchema.parse({
      email: formData.get("email"),
      businessName: formData.get("businessName"),
      fullName: formData.get("fullName"),
      message: formData.get("message"),
      phoneNumber: formData.get("phoneNumber"),
      date: formData.get("date"),
      time: formData.get("time"),
    });

    const business = await prisma.businessAccount.findUnique({
      where: { name: isValidData.businessName }
    })

    if (!business)
      return {
        error: "Could not find the business!",
        success: "",
      };


    const dateInfo = {
      name: 'date',
      value: isValidData.date
    };

    const timeInfo = {
      name: 'time',
      value: isValidData.time
    };

    // Parse date
    const dateParts = dateInfo.value.split(' ');
    const dateString = `${dateParts[1]} ${dateParts[2]} ${dateParts[3]}`; // 'Mar 26 2024'
    const dateObj = new Date(dateString);

    // Parse time
    const timeParts = timeInfo.value.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);

    // Set time to the date object
    console.log(hours)
    dateObj.setHours(hours, minutes);

    console.log(dateObj.toLocaleTimeString());

    // const countryCode = {
    //   name: 'countryCode',
    //   value: isValidData.countryCode
    // };

    // const phone = {
    //   name: 'phoneNumber',
    //   value: isValidData.phoneNumber
    // };

    // const phoneString = `${countryCode}${phone}`; 

    // console.log(phoneString)

    await prisma.guestRendezvous.create({
      data: {
        email: isValidData.email,
        fullName: isValidData.fullName,
        businessId: business.id,
        message: isValidData.message,
        phoneNumber: isValidData.phoneNumber,
        rendezvousAt: dateObj,
        createdAt: new Date(Date.now()),
      }
    })

    const result = await sendMail({
      email: isValidData.email,
      subject: 'Rendezvous Confirmation',
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
        email: '',
        error: 'Email could not be sent',
        message: '',
      };
  } catch (error) {
    console.log(error);
    return {
      error: "Error while submit",
      success: "",
    };
  }

  // revalidatePath("/dashboard/settings");

  return {
    error: "Error while submit",
    success: "",
  };
}

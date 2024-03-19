"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";

const createContactSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email is required",
      required_error: "Email is required",
    })
    .email("This is not a valid email."),
  subject: z.string(),
  message: z.string(),
  businessName: z.string().min(1),
});

export async function SendContact(prevState: any, formData: FormData) {
  try {
    const isValidData = createContactSchema.parse({
      email: formData.get("email"),
      businessName: formData.get("businessName"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    });

    const busiess = await prisma.businessAccount.findUnique({
      where: {
        name: isValidData.businessName,
      },
    });

    if (!busiess)
      return {
        error: "Message could not be sent",
        success: "",
      };

    await prisma.contactForm.create({
      data: {
        mail: isValidData.email,
        subject: isValidData.subject,
        businessId: busiess.id,
        message: isValidData.message,
        createdAt: new Date(Date.now()),
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Message could not be sent",
      success: "",
    };
  }

  // revalidatePath("/dashboard/settings");

  return {
    error: "",
    success: "Message could be sent",
  };
}

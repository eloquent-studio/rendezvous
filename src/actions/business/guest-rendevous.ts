"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";

export async function GuestRendevous(prevState: any, formData: FormData) {
  try {
    console.log(formData);
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

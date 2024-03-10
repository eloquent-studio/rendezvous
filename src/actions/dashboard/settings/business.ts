"use server";

import { z } from "zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import uploadImage from "@/lib/upload-image";

const createSchema = z.object({
  name: z.string(),
  profession: z.string(),
  location: z.string(),
  bio: z.string(),
});

export async function UpdateBusinessDetails(
  userId: Number,
  prevState: any,
  formData: FormData
) {
  try {
    const isValidData = createSchema.parse({
      name: formData.get("name"),
      profession: formData.get("profession"),
      location: formData.get("location"),
      bio: formData.get("bio"),
    });

    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    if (!user) return { error: "User not found" };

    const updated = await prisma.businessAccount.upsert({
      where: {
        userId: user.id,
      },
      create: {
        name: isValidData.name,
        location: isValidData.location,
        profession: isValidData.profession,
        userId: user.id,
        bio: isValidData.bio,
      },
      update: {
        name: isValidData.name,
        location: isValidData.location,
        profession: isValidData.profession,
        bio: isValidData.bio,
      },
    });
  } catch (err) {
    console.log(err);
    if (err instanceof Error && err.name == "ZodError") {
      const errors = {
        name: "",
      };

      [...JSON.parse(err.message)].forEach((item) => {
        if (item?.path[0] == "name") {
          errors.name = item?.message || "";
        }
      });

      return errors;
    }
    return {
      name: "",
    };
  }

  revalidatePath("/dashboard/settings");

  return {
    name: "",
  };
}

export async function GetBusinessDetails(userId: Number) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    const businessAccount = await prisma.businessAccount.findUnique({
      where: { userId: Number(userId) },
    });

    return businessAccount;
  } catch (error) {
    return null;
  }
}

export async function UpdateBusinessImage(formData: FormData) {
  try {
    const response = await uploadImage({
      file: formData.get("image") as File,
    });

    if (!response || response?.result.$metadata.httpStatusCode != 200) {
      return {
        error: "Image not uploaded",
      };
    }

    const id = Number(formData.get("id"));

    const updated = await prisma.businessAccount.update({
      where: {
        id: id,
      },
      data: {
        image: response.filePath,
      },
    });
  } catch (error) {
    return {
      error: "Image not uploaded",
    };
  }

  revalidatePath("/dashboard/settings");

  return {
    error: "",
  };
}

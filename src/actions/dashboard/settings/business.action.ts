'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

const createSchema = z.object({
  name: z.string().min(1),
  profession: z.string(),
  location: z.string()
});

export async function UpdateBusinessDetails(
  userId: Number,
  prevState: any,
  formData: FormData
) {
  try {
    const isValidData = createSchema.parse({
      name: formData.get('name'),
      profession: formData.get('profession'),
      location: formData.get('location'),
    });

    const user = await prisma.user.findUnique({
      where: {
      id: Number(userId),
    },
    });

    console.log("USER::::", user)

    const updated = await prisma.businessAccount.create({
      data: {
        name: isValidData.name,
        location: isValidData.location,
        profession: isValidData.profession,
        user: { connect: { id: Number(userId)}}
      }
    });

    console.log("UPDATED::::",updated)
  } catch (err) {
    if (err instanceof Error && err.name == 'ZodError') {
      const errors = {
        email: '',
      };
        
      [...JSON.parse(err.message)].forEach((item) => {
        if (item?.path[0] == 'email') {
          errors.email = item?.message || '';
        }
      });

        return errors;
    }
    return {
      email: '',
    };
  }

  revalidatePath('/dashboard/settings');

  return {
      email: '',
  };
}


export async function GetBusinessDetails(
  userId: Number,
) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });

    console.log(user)

    const businessAccount = await prisma.businessAccount.findUnique({
      where: { id: Number(userId)},
      include: { user: true }
    })

    console.log(businessAccount)
    return businessAccount
  } catch (error) {
    throw new Error("Failed to fetch business information!")
  }
}
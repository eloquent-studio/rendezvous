'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';

const createSchema = z.object({
    fullname: z.string(),
    email: z
        .string({
            invalid_type_error: 'Email is required',
            required_error: 'Email is required',
        })
        .email('This is not a valid email.'),
});

import { revalidatePath } from 'next/cache';

export async function UpdateProfileAction(
    userId: Number,
    prevState: any,
    formData: FormData
) {
    try {
        const isValidData = createSchema.parse({
            email: formData.get('email'),
            fullname: formData.get('fullname'),
        });

        const user = await prisma.user.findUnique({
            where: {
                id: Number(userId),
            },
        });

        if (user?.email != isValidData.email) {
            const userExist = await prisma.user.findUnique({
                where: {
                    email: isValidData.email,
                },
            });

            if (userExist) return { email: 'This mail address is exists' };
        }

        await prisma.user.update({
            where: {
                id: Number(userId),
            },
            data: {
                ...isValidData,
            },
        });
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

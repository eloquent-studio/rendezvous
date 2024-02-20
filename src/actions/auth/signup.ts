'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

const EXP_TIME = 24 * 60 * 60 * 30;

const createSchema = z.object({
    password: z
        .string({ invalid_type_error: 'Password is required' })
        .min(6, { message: 'Password is required' }),
    email: z
        .string({ invalid_type_error: 'Email is required' })
        .email('This is not a valid email.'),
});

import { createJwtToken } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function SignUpAction(prevState: any, formData: FormData) {
    try {
        const isValidData = createSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        const user = await prisma.user.findFirst({
            where: {
                email: isValidData.email,
            },
        });

        if (user)
            return {
                email: 'This email address already exists',
                password: '',
            };

        const hash = await bcrypt.hash(isValidData.password, 10);

        const savedUser = await prisma.user.create({
            data: {
                email: isValidData.email,
                password: hash,
            },
            select: {
                email: true,
                id: true,
                firstname: true,
                lastname: true,
            },
        });

        const token = await createJwtToken({
            id: savedUser.id,
            email: savedUser.email,
        });

        const cookieStore = cookies();

        cookieStore.set({
            name: 'token',
            value: token,
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV !== 'development',
            maxAge: EXP_TIME,
        });
    } catch (err) {
        return {
            email: '',
            password: '',
        };
    }

    redirect('/');
}

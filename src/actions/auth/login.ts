'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

const EXP_TIME = 24 * 60 * 60 * 30;

const loginSchema = z.object({
    password: z
        .string({
            invalid_type_error: 'Password is required',
            required_error: 'Password is required',
        })
        .min(6, { message: 'Password must be minimum 6 characters' }),
    email: z
        .string({
            invalid_type_error: 'Email is required',
            required_error: 'Email is required',
        })
        .email('This is not a valid email.'),
});

import { createJwtToken } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function LogInAction(prevState: any, formData: FormData) {
    try {
        const isValidData = loginSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        const user = await prisma.user.findFirst({
            where: {
                email: isValidData.email,
            },
        });

        if (!user)
            return {
                email: 'User not found',
                password: '',
            };

        const match = await bcrypt.compare(isValidData.password, user.password);

        if (!match) {
            return {
                email: '',
                password: 'Password is wrong',
            };
        }

        user.password = '';

        const token = await createJwtToken({
            id: user.id,
            email: user.email,
            role: user.role,
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
        if (err instanceof Error && err.name == 'ZodError') {
            const errors = {
                email: '',
                password: '',
            };

            [...JSON.parse(err.message)].forEach((item) => {
                if (item?.path[0] == 'email') {
                    errors.email = item?.message || '';
                }
                if (item?.path[0] == 'password') {
                    errors.password = item?.message || '';
                }
            });

            return errors;
        }
        return {
            email: '',
            password: '',
        };
    }

    const nextUrl = formData.get('next') as string;
    redirect(nextUrl ? nextUrl : '/');
}

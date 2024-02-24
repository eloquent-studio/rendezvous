'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { ROLES } from '@/lib/constants';

const EXP_TIME = 24 * 60 * 60 * 30;

const createSchema = z.object({
    name: z.string(),
    password: z
        .string({ invalid_type_error: 'Password is required' })
        .min(6, { message: 'Password is required' }),
    email: z
        .string({ invalid_type_error: 'Email is required' })
        .email('This is not a valid email.'),
    role: z.enum(ROLES),
});

import { createJwtToken } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function SignUpAction(prevState: any, formData: FormData) {
    try {
        const isValidData = createSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
            name: formData.get('name'),
            role: formData.get('role')?.toString().toLocaleUpperCase(),
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
                fullname: isValidData.name,
                email: isValidData.email,
                password: hash,
                role: isValidData.role,
            },
            select: {
                email: true,
                id: true,
                fullname: true,
                role: true,
            },
        });

        const token = await createJwtToken({
            id: savedUser.id,
            email: savedUser.email,
            role: savedUser.role,
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

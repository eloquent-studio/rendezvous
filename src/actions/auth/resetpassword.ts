'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

const createSchema = z.object({
    password: z
        .string({ invalid_type_error: 'Password is required' })
        .min(6, { message: 'Password is required' }),
    expire: z.string().min(6),
});

export async function ResetPasswordAction(prevState: any, formData: FormData) {
    try {
        const isValidData = createSchema.parse({
            expire: formData.get('expire'),
            password: formData.get('password'),
        });

        const token = await prisma.resetToken.findUnique({
            where: {
                token: isValidData.expire,
            },
        });

        if (!token)
            return {
                password: '',
                error: 'Password reset is not successfull',
                message: '',
            };

        const timeDiff = Math.abs(
            new Date().getTime() - token.createdAt.getTime()
        );

        const diffMin = Math.ceil(timeDiff / (1000 * 60));

        if (diffMin >= 30) {
            await prisma.resetToken.delete({
                where: { id: token?.id },
            });
            return {
                password: '',
                error: 'Password reset token has expired',
                message: '',
            };
        }

        const user = await prisma.user.findFirst({
            where: {
                id: token.userId,
            },
        });

        if (!user)
            return {
                password: '',
                error: 'Password reset is not successfull',
                message: '',
            };

        const hash = await bcrypt.hash(isValidData.password, 10);

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password: hash,
            },
        });

        await prisma.resetToken.delete({
            where: { id: token.id },
        });

        return {
            password: '',
            error: '',
            message: 'Password reset is successfull',
        };
    } catch (err) {
        return {
            password: '',
            error: 'Password reset is not successfull',
            message: '',
        };
    }
}

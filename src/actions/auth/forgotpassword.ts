'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import crypto from 'crypto';
import sendMail from '@/lib/send-mail';

const createSchema = z.object({
    email: z
        .string({ invalid_type_error: 'Email is required' })
        .email('This is not a valid email.'),
});

export async function ForgotPasswordAction(prevState: any, formData: FormData) {
    try {
        const isValidData = createSchema.parse({
            email: formData.get('email'),
        });

        const user = await prisma.user.findFirst({
            where: {
                email: isValidData.email,
            },
        });

        if (!user)
            return {
                email: 'User not found',
                error: 'Email could not be sent',
                message: '',
            };

        const now = new Date(Date.now());

        let resetToken = await prisma.resetToken.findUnique({
            where: { userId: user.id },
        });

        if (!resetToken) {
            resetToken = await prisma.resetToken.create({
                data: {
                    userId: user.id,
                    token: createResetToken(),
                    createdAt: now,
                },
            });
        } else {
            const timeDiff = Math.abs(
                new Date().getTime() - resetToken.createdAt.getTime()
            );
            const diffMin = Math.ceil(timeDiff / (1000 * 60));

            if (diffMin >= 30) {
                resetToken = await prisma.resetToken.update({
                    where: {
                        id: resetToken.id,
                    },
                    data: {
                        token: createResetToken(),
                        createdAt: now,
                    },
                });
            }
        }

        const result = await sendMail({
            email: user.email,
            subject: 'Your Password Reset Request',
            text: null,
            html: `<p>Password Reset Links: ${
                process.env.NEXT_PUBLIC_API_BASE +
                '/resetpassword?expire=' +
                resetToken.token
            }</p>`,
        });

        if (!result)
            return {
                email: '',
                error: 'Email could not be sent',
                message: '',
            };
        else {
            return {
                email: '',
                error: '',
                message: 'Email has been sent',
            };
        }
    } catch (err) {
        return {
            email: 'Email not valid',
            error: '',
            message: '',
        };
    }
}

function createResetToken() {
    return crypto.randomBytes(8).toString('hex');
}

import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import { createJwtToken } from '@/lib/utils';

const EXP_TIME = 24 * 60 * 60 * 30;

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET as string,

    callbacks: {
        async signIn({ account, profile }) {
            try {
                const cookieStore = cookies();
                let user = await prisma.user.findUnique({
                    where: {
                        email: profile?.email,
                    },
                });
                if (!user) {
                    const newUser = {
                        fullname: profile?.name,
                        email: profile?.email || '',
                        password: '--------------------',
                    };
                    if (newUser.email == undefined || newUser.email == '')
                        return false;
                    user = await prisma.user.create({ data: newUser });
                }

                const token = await createJwtToken({
                    id: user.id,
                    email: user.email,
                });
                cookieStore.set({
                    name: 'token',
                    value: token,
                    httpOnly: true,
                    path: '/',
                    secure: process.env.NODE_ENV !== 'development',
                    maxAge: EXP_TIME,
                });

                return true;
            } catch (error) {
                return false;
            }
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

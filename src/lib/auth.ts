import { jwtVerify } from 'jose';

export function getJwtSecretKey() {
    const secret = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;

    if (!secret) {
        throw new Error('JWT Secret key is not matched');
    }

    return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string) {
    try {
        const { payload }: { payload: any } = await jwtVerify(
            token,
            getJwtSecretKey()
        );

        return { email: payload?.email, id: payload?.id };
    } catch (error) {
        return null;
    }
}

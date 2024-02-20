import { SignJWT } from 'jose';
import { getJwtSecretKey } from '@/lib/auth';

export async function createJwtToken(payload: { id: Number; email: string }) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(getJwtSecretKey());
}

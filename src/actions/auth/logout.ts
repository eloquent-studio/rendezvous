'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function LogOutAction() {
    const cookieStore = cookies();
    cookieStore.delete('token');
    redirect('/');
}

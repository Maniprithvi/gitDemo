'use server'
import * as auth from '@/auth'
export async function signIn()
{
    const a=await auth.auth();
    console.log(a?.user)
     return await auth.signIn('google')
}
export async function signOut()
{
     return await auth.signOut()
}
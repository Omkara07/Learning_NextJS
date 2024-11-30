"use server"
// without using next-auth (for traditional login) . It is still used for signup
// this marks the component as a server action
// create a server action whenever a func is going to be used by frontend and backend both
import { prisma as client } from '@/db'


export async function signup(username: string, password: string, fullname: string) {
    try {
        const user = await client.user.create({
            data: {
                username,
                password,
                fullname
            }
        })
        return true
    }
    catch (e: any) {
        return false
    }
}

export async function signin(username: string, password: string) {
    try {
        console.log(username)
        if (username) {
            const user = await client.user.findUnique({
                where: {
                    username
                }
            })
            return true
        }
    }
    catch (e: any) {
        return false
    }
}
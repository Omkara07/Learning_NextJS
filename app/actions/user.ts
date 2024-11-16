"use server"
// this marks the component as a server action
import client from '@/db'


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
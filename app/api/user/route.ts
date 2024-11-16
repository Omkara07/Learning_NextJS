// shows how to use the get, post methods inside the router in nextJS

import { NextRequest, NextResponse } from 'next/server';
import client from '@/db'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get('username');
    try {
        console.log(username)
        if (username) {
            const user = await client.user.findUnique({
                where: {
                    username
                }
            })
            return NextResponse.json({
                email: user?.username,
                name: user?.fullname,
                success: true
            })
        }
    }
    catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })

    }
}

export async function POST(req: NextRequest) {
    // body
    const { username, password, fullname } = await req.json();

    // header
    // console.log(req.headers.get("authorization"));

    // query Parameters
    // console.log(req.nextUrl.searchParams.get("name"))

    try {
        const user = await client.user.create({
            data: {
                username,
                password,
                fullname
            }
        })
        return NextResponse.json({ email: user.username, name: user.fullname, success: true })
    }
    catch (e: any) {
        return NextResponse.json({ success: false, message: e.message })
    }
}
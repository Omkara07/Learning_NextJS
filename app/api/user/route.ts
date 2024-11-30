// session/login management without Next-Auth

// shows how to use the get, post methods inside the router in nextJS

import { NextRequest, NextResponse } from 'next/server';
import { prisma as client } from '@/db'
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_CONFIG } from '../lib/auth';
import { signIn } from 'next-auth/react';

export async function GET(req: NextRequest) {
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    try {
        // console.log(username)
        if (session) {
            return NextResponse.json({
                session,
                success: true
            })
        }
        return NextResponse.json({
            success: false
        })

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
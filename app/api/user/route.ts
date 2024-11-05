import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient()

// export async function GET() {
//     const user = await client.user.findFirst({})
//     return NextResponse.json({
//         email: user?.username,
//         name: user?.fullname
//     })
// }

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
        else {
            const user = await client.user.findFirst({})
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
    const { username, password, fullname } = await req.json();
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
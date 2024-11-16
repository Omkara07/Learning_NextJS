import React, { useEffect, useState } from 'react'
import { PrismaClient } from '@prisma/client';
import client from '@/db'

type userType = {
    name: string
    email: string
    success: boolean
}
const fetchUser = async () => {
    try {
        const user = await client.user.findFirst({})
        return {
            email: user?.username,
            name: user?.fullname,
            success: true
        }
    }
    catch (e) {
        console.log(e)
    }
}
const UserCard = async () => {
    const userData = await fetchUser()
    return (
        <div className="p-8 rounded font-bold">
            {
                !userData ?
                    <div>Login for Anni</div>
                    :
                    <div className='text-sm'>
                        <div className='text-6xl font-mono font-bold mb-5'>
                            {userData?.name}
                        </div>

                        {userData?.email}
                    </div>
            }
        </div>
    )
}

export default UserCard

"use client"
import React, { useEffect, useState } from 'react'

type userType = {
    name: string
    email: string
    success: boolean
}
const UserCard = () => {
    const [userData, setUserData] = useState<userType | null>(null)
    useEffect(() => {
        try {
            const userr = localStorage.getItem("user")
            if (userr) {
                const u = JSON.parse(userr)
                setUserData(u)
            }
        } catch (error) { console.log(error) }

    }, [])
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

"use client"
import React, { useEffect, useState } from 'react'

type userType = {
    name: string
    email: string
    success: boolean
}
const UserCard = () => {
    const [userData, setUserData] = useState<userType | null>(null)
    const loadUserData = () => {
        try {
            const userr = localStorage.getItem("user")
            if (userr) {
                const u = JSON.parse(userr)
                setUserData(u)
            } else {
                setUserData(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        // Load data on initial render
        loadUserData()

        // Set up event listener for storage changes
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'user') {
                loadUserData()
            }
        }
        window.addEventListener('storage', handleStorageChange)

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
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

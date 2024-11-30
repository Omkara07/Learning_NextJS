import React from 'react'
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_CONFIG } from '@/app/api/lib/auth';

const UserCard = async () => {
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    const userData = session?.user
    console.log(session)
    return (
        <div className="p-8 rounded font-bold w-full">
            {
                !userData ?
                    <div>Login for Anni</div>
                    :
                    <div className='text-sm'>
                        <div className='md:text-6xl text-3xl font-mono font-bold mb-5'>
                            {userData.name}
                        </div>

                        {userData.email}
                    </div>
            }
        </div>
    )
}

export default UserCard

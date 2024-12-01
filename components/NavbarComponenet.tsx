"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const NavbarComponenet = () => {
    const router = useRouter()
    const session = useSession()
    useEffect(() => {
        console.log(session)
    }, [session])
    return (
        <div className="flex items-center justify-between py-5 text-xl line px-8 font-bold font-mono border-b border-b-gray-700 mt-3 border border-gray-700  rounded-full hover:shadow-gray-900 hover:border-b-3 duration-700 hover:border-t hover:border-t-gray-500 hover:shadow-xl bg-transparent/60 backdrop-blur-xl z-20 fixed w-[70%] max-md:max-w-[350px] max-md:w-full">
            <button className="md:pl-8 pl-1 flex group duration-300" onClick={() => router.push('/')}>N<span className='text-emerald-600'>e</span>xtL<span className='text-emerald-600'>e</span>v</button>
            {
                session.data ?
                    <div>
                        <button className="flex text-sm hover:text-emerald-600 duration-150" onClick={() => signOut()}>Logout</button>
                    </div>
                    :
                    <div className="flex gap-6 text-sm">
                        <button className="flex hover:text-emerald-600 duration-150" onClick={() => signIn()}>Login</button>
                        <button className="flex hover:text-white text-emerald-600 duration-150" onClick={() => router.push('/signup')}>Signup</button>
                    </div>
            }
        </div>

    )
}
export default NavbarComponenet

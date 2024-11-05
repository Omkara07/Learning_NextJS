import Link from 'next/link'
import React from 'react'

const NavbarComponenet = () => {
    return (
        <div className="flex items-center justify-between py-5 text-xl line px-8 font-bold font-mono border-b border-b-gray-700 mt-3 border border-gray-700 left-1/2 transform -translate-x-1/2 rounded-full hover:shadow-gray-900 hover:border-b-3 hover:border-t hover:border-t-gray-500 hover:shadow-xl bg-transparent/60 backdrop-blur-xl z-20 fixed w-[70%]">
            <Link href='/'><h1 className="pl-8 flex group duration-300">N<span className='text-emerald-600'>e</span>xtL<span className='text-emerald-600'>e</span>v</h1></Link>
            <div className="flex gap-6 text-sm">
                <Link href='/signin'> <button className="flex hover:text-emerald-600 duration-150">Login</button></Link>
            </div>
        </div>

    )
}
export default NavbarComponenet

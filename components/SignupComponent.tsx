"use client"
import React, { useState } from 'react'
import Button from './Button';
import Link from 'next/link';
import InputComponent from './InputComponent';
import axios from 'axios';
import { signup } from '@/app/actions/user';


const SignupComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fullname, setFullname] = useState<string>("");
    const handleClick = async () => {
        await signup(username, password, fullname)
    }
    return (
        <div className=" flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="block max-w-sm mt-8 p-6 border w-2/3 mx-auto border-gray-700 pb-10 px-10 rounded-lg shadow-xl shadow-gray-900">
                    <div>
                        <div className=" flex px-10">
                            <div className="text-3xl font-extrabold mx-auto">
                                Sign Up
                            </div>
                        </div>
                        <div className="pt-2">
                            <InputComponent label="Fullname" placeholder="John Doe" onChange={(e) => {
                                setFullname(e.target.value)
                            }} />
                            <InputComponent label="Username" placeholder="JohnDoe@gmail.com" onChange={(e) => {
                                setUsername(e.target.value)
                            }} />
                            <InputComponent label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <Button text='Signup' DBcall={handleClick} />
                        </div>
                        <div className='mt-3'>
                            <div className='flex gap-2 justify-center text-sm'>
                                Already a user? <Link href='/signin'><button className="flex hover:text-emerald-600 underline">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent
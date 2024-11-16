"use client"
import React, { useState } from 'react'
import Button from './Button';
import Link from 'next/link';
import InputComponent from './InputComponent'
import axios from 'axios';
import { signin } from '@/app/actions/user';

const SigninComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleClick = async () => {
        await signin(username, password)
    }
    return (
        <div className=" flex justify-center flex-col">
            <div className="flex justify-center">
                <div className="block max-w-sm p-6 mt-8 border w-2/3 mx-auto border-gray-700 pb-10 px-10 rounded-lg shadow-xl shadow-gray-900">
                    <div>
                        <div className=" flex px-10">
                            <div className="text-3xl font-extrabold mx-auto">
                                Sign in
                            </div>
                        </div>
                        <div className="pt-2">
                            <InputComponent label="Username" placeholder="JohnDoe@gmail.com" onChange={(e) => {
                                setUsername(e.target.value)
                            }} />
                            <InputComponent label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                            <Button text='Login' DBcall={handleClick} />
                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-2 justify-center text-sm'>
                                Don&apos;t have an account? <Link href='/signup'><button className="flex hover:text-emerald-600 underline">Create one</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninComponent;



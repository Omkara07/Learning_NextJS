"use client"
import React, { useState } from 'react'
import Button from './Button';
import Link from 'next/link';
import InputComponent from './InputComponent'
import axios from 'axios';

const SigninComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleClick = async () => {
        const res = await axios.get(`http://localhost:3000/api/user?username=${username}`)
        if (typeof window !== undefined) {
            localStorage.setItem("user", JSON.stringify(res.data))
        }
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
                            <Button text='Login' username={username} password={password} DBcall={handleClick} />
                        </div>
                        <div className='mt-5'>
                            <p className='flex gap-2 justify-center text-sm'>
                                Don't have an account? <Link href='/signup'><button className="flex hover:text-emerald-600 underline">Create one</button></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninComponent;



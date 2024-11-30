"use client"
import React, { useEffect, useState } from 'react'
import Button from './Button';
import Link from 'next/link';
import InputComponent from './InputComponent';
import { signup } from '@/app/actions/user';
import Framer from './framer';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignupComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fullname, setFullname] = useState<string>("");
    const router = useRouter()
    const handleClick = async () => {
        await signup(username, password, fullname)
    }
    const handleGoogleAuth = async () => {
        const res = await signIn("google", { callbackUrl: '/' });
        if (res?.ok) {
            router.push('/')
            console.log(res)
        }
        else console.log("error")
    }
    const handleGithubAuth = async () => {
        const res = await signIn("github", { callbackUrl: '/' });
        if (res?.ok) {
            router.push('/')
            console.log(res)
        }
        else console.log("error")
    }
    return (
        <div className=" flex justify-center flex-col">
            <Framer iniX={0} duration={0.5}>
                <div className="flex justify-center">
                    <div className="block max-w-sm p-6 border md:w-2/3 w-[95%] mx-auto border-gray-700 px-10 rounded-lg shadow-xl shadow-gray-900">
                        <div>
                            <div className=" flex px-10">
                                <div className="text-3xl font-extrabold mx-auto">
                                    Sign Up
                                </div>
                            </div>
                            <div className="">
                                <InputComponent label="Fullname" placeholder="John Doe" onChange={(e) => {
                                    setFullname(e.target.value)
                                }} />
                                <InputComponent label="Username" placeholder="JohnDoe@gmail.com" onChange={(e) => {
                                    setUsername(e.target.value)
                                }} />
                                <InputComponent label="Password" type={"password"} placeholder="123456" onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                                <div className='mt-8'>
                                    <Button text='Signup' handler={handleClick} />
                                </div>
                            </div>
                            <div className='flex w-full items-center text-sm md:py-3 max-md:mb-2'>
                                <hr className='h-1 w-1/2 opacity-35' />
                                <p className='px-2 text-sm font-mono'>OR</p>
                                <hr className='h-1 w-1/2 opacity-35' />
                            </div>
                            <Button text='Login with Google' handler={handleGoogleAuth} />
                            <Button text='Login with Github' handler={handleGithubAuth} />
                            <div className='mt-3'>
                                <div className='flex gap-2 justify-center text-sm'>
                                    Already a user? <Link href='/signin'><button className="flex hover:text-emerald-600 underline">Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Framer>
        </div>
    )
}

export default SignupComponent
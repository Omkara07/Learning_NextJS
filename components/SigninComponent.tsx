"use client"
import React, { useEffect, useState } from 'react'
import Button from './Button';
import InputComponent from './InputComponent'
import Framer from './framer';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SigninComponent = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter()
    const handleClick = async () => {
        const res = await signIn("credentials", {
            username: username,
            password: password,
            callbackUrl: '/',
        });
        if (res?.ok) {
            router.push('/')
            console.log(res)
        }
        else console.log("error")
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
        <Framer iniX={0} duration={0.8}>
            <div className=" flex justify-center flex-col ">

                <div className="flex justify-center">
                    <div className="block max-w-sm p-6 border w-[95%] mt-8 md:w-2/3 mx-auto border-gray-700 pb-10 px-10 rounded-lg shadow-xl shadow-gray-900">
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
                                <div className='mt-7'>
                                    <Button text='Login' handler={handleClick} />
                                </div>
                            </div>
                            <div className='flex w-full items-center text-sm py-3'>
                                <hr className='h-1 w-1/2 opacity-35' />
                                <p className='px-2 text-sm font-mono'>OR</p>
                                <hr className='h-1 w-1/2 opacity-35' />
                            </div>
                            <Button text='Login with Google' handler={handleGoogleAuth} />
                            <Button text='Login with Github' bg_color='bg-gray-800' text_color='text-white' handler={handleGithubAuth} />
                            <div className='mt-5'>
                                <div className='flex gap-2 justify-center text-sm'>
                                    Don&apos;t have an account? <button onClick={() => router.push("/signup")} className="flex hover:text-emerald-600 underline">Create one</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Framer>
    )
}

export default SigninComponent;



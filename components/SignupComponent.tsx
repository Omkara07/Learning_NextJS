import React from 'react'
import Button from './Button';
import Link from 'next/link';

const SignupComponent = () => {
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
                            <LabelledInput label="Fullname" placeholder="John Doe" />
                            <LabelledInput label="Username" placeholder="JohnDoe@gmail.com" />
                            <LabelledInput label="Password" type={"password"} placeholder="123456" />
                            <Button text='Create' />
                        </div>
                        <div className='mt-3'>
                            <p className='flex gap-2 justify-center text-sm'>
                                Already a user? <Link href='/signin'><button className="flex hover:text-emerald-600 underline">Login</button></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-900 text-white border text-sm rounded-lg focus-within:ring-green-700 focus-within:border-green-700 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

export default SignupComponent

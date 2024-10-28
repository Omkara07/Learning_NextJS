import React from 'react'
import Button from './Button';

const SigninComponent = () => {
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
                            <LabelledInput label="Username" placeholder="JohnDoe@gmail.com" />
                            <LabelledInput label="Password" type={"password"} placeholder="123456" />
                            <Button text='Login' />
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

export default SigninComponent

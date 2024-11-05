"use client"
import React from 'react'
type props = {
    label: string
    placeholder: string
    type?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputComponent = ({ type, placeholder, label, onChange }: props) => {
    return <div>
        <label className="block mb-2 text-sm text-white font-semibold pt-4">{label}</label>
        <input type={type || "text"} className="bg-gray-900 text-white border text-sm rounded-lg focus-within:ring-green-700 focus-within:border-green-700 block w-full p-2.5" placeholder={placeholder} onChange={onChange} required />
    </div>
}

export default InputComponent

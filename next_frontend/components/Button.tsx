"use client"
import React from 'react'

const Button = ({ text }: { text: string }) => {
    const handleClick = () => {
        console.log("clicked")
    }
    return (
        <button onClick={handleClick} type="button" className="mt-8 w-full text-black bg-white focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{text}</button>
    )
}

export default Button
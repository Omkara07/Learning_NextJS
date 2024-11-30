"use client"
import { useRouter } from "next/navigation"
import React from "react"

const Button = ({ text, handler, bg_color, text_color }: { text: string, handler: () => Promise<any>, bg_color?: string, text_color?: string }) => {
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await handler()
    }
    return (
        <button onClick={handleClick} type="button" className={`flex py-2 mb-4 px-5 rounded-lg ${text_color ? text_color : 'text-black'} w-full font-semibold text-center justify-center ${bg_color ? bg_color : "bg-white"} `}>{text}</button>
    )
}

export default Button

"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

const Button = ({ text, username, password, fullname = "", DBcall }: { text: string, username: string, password: string, fullname?: string, DBcall: () => void }) => {
    const router = useRouter()
    const handleClick = async () => {
        console.log(username, password)
        DBcall()
        router.push("/")
    }
    return (
        <button onClick={handleClick} type="button" className="mt-8 w-full text-black bg-white focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{text}</button>
    )
}

export default Button

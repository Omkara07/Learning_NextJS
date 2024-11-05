"use client"
import { useRouter } from "next/navigation"

const Button = ({ text, DBcall }: { text: string, DBcall: () => void }) => {
    const router = useRouter()
    const handleClick = async () => {
        DBcall()
        router.push("/")
    }
    return (
        <button onClick={handleClick} type="button" className="mt-8 w-full text-black bg-white focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{text}</button>
    )
}

export default Button

import Image from 'next/image';
import AnniImg from '../img/anni_chibi.png'
import axios from 'axios';
async function getUserDetails() {
  // to show the loading 
  await new Promise((r) => setTimeout((r), 2000))
  try {
    const response = await axios.get("http://localhost:3000/api/user")
    return response.data;
  }
  catch (e) {
    console.log(e)
  }
}

export default async function Home() {
  const userData = await getUserDetails()
  return (
    <div className="flex flex-col items-center text-2xl p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image className='w-40' src={AnniImg} alt="" />
      <h1 className='font-bold'>
        Main Route
      </h1>
      <div className="border p-8 rounded">
        <div>
          Name: {userData?.name}
        </div>

        Email: {userData?.email}
      </div>
    </div>
  );
}

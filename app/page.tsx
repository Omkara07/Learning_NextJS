import Image from 'next/image';
import AnniImg from '../img/anni_chibi.png'
import axios from 'axios';
import UserCard from '@/components/UserCard';


export default async function Home() {
  return (
    <div className="flex max-md:flex-col md:justify-around md:mt-20 gap-20 items-center text-2xl p-8 pb-20 max-md:gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className='md:w-1/2 justify-center md:px-32 md:-mt-40'>
        <UserCard />
      </div>
      <div className='flex w-1/2 items-center justify-center '>
        <Image className='w-56 flex' src={AnniImg} alt="" />
      </div>
    </div>
  );
}

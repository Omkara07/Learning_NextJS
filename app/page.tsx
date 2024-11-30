import Image from 'next/image';
import AnniImg from '../img/anni_chibi.png'
import UserCard from '@/components/UserCard';
import Framer from '@/components/framer';


export default async function Home() {
  return (

    <div className="flex max-md:flex-col md:justify-around md:mt-20 gap-20 items-center text-2xl p-8 sm:p-20 max-md:p-6 pb-20 max-md:gap-10 font-[family-name:var(--font-geist-sans)] ">
      <div className='md:w-2/3 w-full justify-center md:pl-32 md:-mt-40 max-md:text-center'>
        <Framer iniX={-200} duration={0.9}>
          <UserCard />
        </Framer>
      </div>
      <div className='flex md:w-1/2 items-center justify-center '>
        <Framer iniX={200} duration={0.9}>
          <Image className='w-56 flex' src={AnniImg} alt="" />
        </Framer>
      </div>
    </div>
  );
}

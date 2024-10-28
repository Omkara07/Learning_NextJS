import Image from 'next/image';
import AnniImg from '../img/anni_chibi.png'
export default function Home() {
  return (
    <div className="flex flex-col items-center text-2xl p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image className='w-40' src={AnniImg} alt="" />
      <h1 className='font-bold'>
        Main Route
      </h1>
    </div>
  );
}

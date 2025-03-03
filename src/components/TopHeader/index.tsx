"use client"
import styles from './TopHeader.module.css'
import React from 'react';
import HeaderMenu from '@/components/HeaderMenu'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import MenuItem from "../HeaderMenu/MenuItem"
interface Props {

}


const App: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <>
      
      <header className=' z-[999] w-full md:fixed md:flex md:justify-between md:top-4 md:bg-transparent md:pl-10 md:pr-10'>
        <div className='w-full md:max-w-7xl md:w-full flex justify-between items-center md:shadow-xl pl-5 pr-5  md:pl-10 md:pr-10 md:border-white md:border-4 md:rounded-full md:bg-[var(--second-color)]'>
          <Image
            src='/logo.png'
            width={75}
            height={75}
            alt="Timothy's portfilio"
            onClick={() => router.push('/')}
            className='cursor-pointer object-contain size-[75px] mr-2 md:mr-0 md:size-[50px]  xl:size-[75px]'
          />
          <div className={`${styles.menuContainer} hidden md:block`}>
            <HeaderMenu />
          </div>

          <div className='block md:hidden flex flex-col-reverse divide-y-4 divide-y-reverse divide-[var(--second-color)] w-[60px] h-[60px] justify-around'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>


    </>


  );
};

export default App;
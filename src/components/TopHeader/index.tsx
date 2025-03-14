"use client"
import styles from './TopHeader.module.css'
import React, { useState, useEffect } from 'react';
import HeaderMenu from '@/components/HeaderMenu'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import MenuItem from "../HeaderMenu/MenuItem/index"
import Button from "../HeaderMenu/MenuItem/button"

interface Props {

}


const App: React.FC<Props> = () => {
  const router = useRouter();
  const [showLeftMenu, setShowLeftMenu] = useState("hidden");
  const [showHamburgerMenu, setShowHamburgerMenu] = useState("fixed");

  const isShowMenu = () => {
    setShowLeftMenu(showLeftMenu == "hidden" ? "fixed" : "hidden");
    setShowHamburgerMenu(showHamburgerMenu == "hidden" ? "fixed" : "hidden");
  }

  return (
    <>

      <div className={`h-screen w-screen bg-gray-300  bg-opacity-70 fixed top-0 left-0 z-[100] ${showLeftMenu} md:hidden`} onClick={isShowMenu}>
        <div className='h-screen w-[70vw] z-[50]  flex flex-col justify-start align-center items-center gap-4 fixed top-0 left-0 bg-[#3b82f6]'>
          <Image
            src='/logo.png'
            width={75}
            height={75}
            alt="Timothy's portfilio"
            onClick={() => router.push('/')}
            className='cursor-pointer object-contain size-[75px] mr-2 md:mr-0 md:size-[50px] xl:size-[75px] mt-20'
          />
          <ul className=' list-none p-0 m-0 flex flex-col  justify-start align-center gap-4'>
            <MenuItem href='/#about' name='About' />
            <MenuItem href='/#project' name='Project' />
            <MenuItem href='/casestudy/goldibite' name='Case Study' />
            <Button onClick={isShowMenu} name='Close' />
          </ul>
        </div>

      </div>

      <header className={` z-[100] w-full md:fixed md:flex md:justify-between md:top-4 md:bg-transparent md:pl-10 md:pr-10  z-[100]  ${showHamburgerMenu} top-0 right-0`}>
        <div className='w-full md:max-w-7xl md:w-full hidden md:flex justify-between items-center md:shadow-xl pl-5 pr-5  md:pl-10 md:pr-10 md:border-white md:border-4 md:rounded-full md:bg-[var(--second-color)]'>
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

         
        </div>
      </header>


    </>


  );
};

export default App;
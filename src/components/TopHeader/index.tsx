"use client"
import styles from './TopHeader.module.css'
import React from 'react';
import HeaderMenu from '@/components/HeaderMenu'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

interface Props {

}

const App: React.FC<Props> = () => {
  const router =  useRouter();
  return (
    <header className='sticky top-0 left-0 z-10 '>
      <div className={`${styles.headerContainer}  w-screen max-w-7xl pl-5 pr-5`}>
        <div className={`${styles.logo}`}>
          <Image
            src='/logo.png'
            width={50}
            height={50}
            alt="Timothy's portfilio"
            onClick={()=>router.push('/')} 
            className='cursor-pointer'
          />
        </div>
        <div className={`${styles.menuContainer}`}>
          <HeaderMenu />
        </div>
      </div> 
    </header>
  );
};

export default App;
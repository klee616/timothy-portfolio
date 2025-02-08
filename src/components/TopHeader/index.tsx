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
    <header>
      <div className={`${styles.headerContainer}`}>
        <div className={`${styles.logo}`}>
          <Image
            src='/logo.png'
            width={50}
            height={50}
            alt="Timothy's portfilio"
            onClick={()=>router.push('/')} 
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
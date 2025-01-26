import styles from './TopHeader.module.css'
import React from 'react';
import HeaderMenu from '@/components/HeaderMenu'

interface Props {

}

const App: React.FC<Props> = () => {
  return (
    <header>
      <div className={`${styles.headerContainer}`}>
        <div className={`${styles.logo}`}>
          <img src='/logo.png' />
        </div>
        <div className={`${styles.menuContainer}`}>
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};

export default App;
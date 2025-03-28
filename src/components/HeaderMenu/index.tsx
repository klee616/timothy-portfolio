import styles from './HeaderMenu.module.css'
import React from 'react';
import MenuItem from './MenuItem'

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <div className={`${styles.menuContainer} text-base xl:text-xl 2xl:text-2xl `}>
            <ul>
                <MenuItem href='/#about' name='About' />
                <MenuItem href='/#project' name='Project' />
                <MenuItem href='/casestudy/goldibite' name='Case Study' />
                {/* <MenuItem href='/Content' name='Content' /> */}
            </ul>
        </div>
    );
};

export default App;


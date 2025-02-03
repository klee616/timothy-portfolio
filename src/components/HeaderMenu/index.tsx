import styles from './HeaderMenu.module.css'
import React from 'react';
import MenuItem from './MenuItem'

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <div className={`${styles.menuContainer}`}>
            <ul>
                <MenuItem href='#about' name='About' />
                <MenuItem href='#project' name='Project' />
                {/* <MenuItem href='/Content' name='Content' /> */}
            </ul>
        </div>
    );
};

export default App;


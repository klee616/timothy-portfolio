import styles from './HeaderMenu.module.css'
import React from 'react';
import MenuItem from './MenuItem'

interface Props {

}

const App: React.FC<Props> = () => {
    return (
        <div className={`${styles.menuContainer}`}>
            <ul>
                <MenuItem href='/About' name='About' />
                <MenuItem href='/Portfolio' name='Portfolio' />
                <MenuItem href='/Content' name='Content' />
            </ul>
        </div>
    );
};

export default App;


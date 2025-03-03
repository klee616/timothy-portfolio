import styles from './MenuItem.module.css'
import Link from 'next/link';

interface Props {
    onClick: any;
    name: string;
   
}

const App: React.FC<Props> = ({onClick, name}) => {
    return (
        <li className={`${styles.menu}   text-white`}><button onClick={onClick} className=' uppercase no-underline hover:underline hover:text-gray-900'>{name}</button></li>
    );
};

export default App;


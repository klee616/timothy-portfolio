import styles from './MenuItem.module.css'
import Link from 'next/link';

interface Props {
    name: string;
    href: string;
}

const App: React.FC<Props> = ({name, href}) => {
    return (
        <li className={`${styles.menu}   text-white`}><Link href={`${href}`} scroll={true} className=' uppercase no-underline hover:underline hover:text-gray-900'>{name}</Link></li>
    );
};

export default App;


import styles from './MenuItem.module.css'
import Link from 'next/link';

interface Props {
    name: string;
    href: string;
}

const App: React.FC<Props> = ({name, href}) => {
    return (
        <li className={`${styles.menu}`}><Link href={`${href}`} scroll={true}>{name}</Link></li>
    );
};

export default App;


import styles from './Footer.module.css'
import Image from 'next/image'
interface Props {

}

const App: React.FC<Props> = () => {
    return (<>
        <footer className={styles.footerContainer}>
            <div className={`${styles.contantContainer} justify-center`}>
                <div className={styles.media}>
                    Contact with me
                    <ul>
                        <li>
                            <Image src='/icons/linkedin.png'
                            height={50}
                            width={50}
                            alt='Linkedin'
                            />
                        </li>
                        <li>
                            <Image src='/icons/email.png'
                            height={50}
                            width={50}
                            alt='Linkedin'
                            />
                        </li>
                        <li>
                            <Image src='/icons/github.png'
                            height={50}
                            width={50}
                            alt='Linkedin'
                            />
                        </li>
                        <li>
                            <Image src='/icons/figma.png'
                            height={50}
                            width={50}
                            alt='Linkedin'
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                Copyright  &copy; 2025 Kam Shing Lee, Timothy, All right reserved.
            </div>
        </footer>
    </>)
}
export default App;


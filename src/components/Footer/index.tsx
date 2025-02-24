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
                            <a href="https://www.linkedin.com/in/timothy-lee616/" target='_blank'>
                                <Image src='/icons/linkedin.png'
                                    height={50}
                                    width={50}
                                    alt='Linkedin'
                                />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:shing0618@gmail.com" target='_blank'>
                                <Image src='/icons/mail.png'
                                    height={50}
                                    width={50}
                                    alt='Mail'
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/klee616" target='_blank'>
                                <Image src='/icons/github.png'
                                    height={50}
                                    width={50}
                                    alt='GitHub'
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.figma.com/@timothylee4" target='_blank'>
                                <Image src='/icons/figma.png'
                                    height={50}
                                    width={50}
                                    alt='Figma'
                                />
                            </a>
                        </li>
                        <li>
                            <a href="/KamShing_Lee_Resume.pdf" download="KamShing_Lee_Resume.pdf">
                                <Image src='/icons/resume.png'
                                    height={50}
                                    width={50}
                                    alt='Resume'
                                />
                            </a>
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


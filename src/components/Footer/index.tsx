import styles from './Footer.module.css'
import Image from 'next/image'

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={`${styles.contentContainer} justify-center`}>
        <div className={styles.media}>
          Contact with me
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/timothy-lee616/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.png" height={50} width={50} alt="LinkedIn" unoptimized />
              </a>
            </li>
            <li>
              <a href="mailto:shing0618@gmail.com">
                <Image src="/icons/mail.png" height={50} width={50} alt="Mail" unoptimized />
              </a>
            </li>
            <li>
              <a href="https://github.com/klee616" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/github.png" height={50} width={50} alt="GitHub" unoptimized />
              </a>
            </li>
            <li>
              <a href="/KamShing_Lee_Resume.pdf" download="KamShing_Lee_Resume.pdf">
                <Image src="/icons/resume.png" height={50} width={50} alt="Resume" unoptimized />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; 2025 Kam Shing Lee, Timothy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;

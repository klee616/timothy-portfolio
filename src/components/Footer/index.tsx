import styles from './Footer.module.css'
interface Props {

}

const App: React.FC<Props> = () => {
    return (<>
        <footer className={styles.footerContainer}>
            <div className={styles.contantContainer}>
                <div className={styles.media}>
                    Contact with me:
                    <ul>
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


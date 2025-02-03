import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import styles from './Introduction.module.css'

interface Props {

}

const App: React.FC<Props> = () => {

    return (<>
        {/* <section className={`${styles.introductionContainer}`}>
            <div className={`${styles.screen}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.hello}`}>{sayHi[count]},</div>
                    <div className={`${styles.name}`}><h1>I am Timothy Lee</h1></div>
                    <div className={`${styles.title}`}>Full Stark Developer and Graphic Designer </div>

                </div>
            </div>
        </section> */}
        <BackgroundLines className={` ${styles.introductionContainer} flex items-center justify-center w-full  flex-col px-4`}>
            <h2 className={`${styles.name} bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight`}>
                Hello, I am <br />Kam Shing Lee, Timothy
            </h2>
            <p className={`${styles.title}  max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center`}>
                Full Stack Developer and Graphic Designer
            </p>
        </BackgroundLines>
    </>)
}

export default App;
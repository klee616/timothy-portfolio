import React from "react";
import Image from "next/image";
interface Props {

}

const App: React.FC<Props> = () => {

    return (<>
        <div className=" h-screen flex items-center justify-center w-full  px-4  text-gray-950 bg-[var(--primary-color)] m-auto max-w-[1440px]">
            <div className="flex-1 h-screen content-center">
                <h2 className={` bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight  text-gray-950 gap-5 flex-1`}>
                    Hello, I am <br />Kam Shing Lee, Timothy
                </h2>
                <p className={`  max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center  text-gray-950`}>
                    Full Stack Developer and Graphic Designer
                </p>
            </div>
            <div className="flex-1 h-screen content-center" >
            <Image src="/images/image1.JPEG" width={400} height={800}  alt="trees" className=" object-cover  object-center rounded-full h-150 w-150" />
            <Image src="/images/image2.JPEG" width={400} height={800} alt="trees" className="h=[50vh] cover  object-center rounded-full h-150 w-150" />
            <Image src="/images/image3.JPEG" width={400} height={800} alt="trees" className="h=[50vh] cover  object-center rounded-full h-150 w-150" />
            </div>
        </div>
        {/* <BackgroundLines className={`${styles.introductionContainer} h-full flex items-center justify-center w-full  flex-col px-4  text-gray-950 bg-[var(--primary-color)]`}>
            <h2 className={`${styles.name} bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight  text-gray-950`}>
                Hello, I am <br />Kam Shing Lee, Timothy
            </h2>
            <p className={`${styles.title}  max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center  text-gray-950`}>
                Full Stack Developer and Graphic Designer
            </p>
        </BackgroundLines> */}
    </>)
}

export default App;
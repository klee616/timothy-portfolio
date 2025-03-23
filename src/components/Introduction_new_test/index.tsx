"use client"
import React from "react";
import Image from "next/image";
import gsap from 'gsap';
import { useEffect, useState, useRef } from "react";
import {useGSAP} from '@gsap/react';

interface Props {

}

const App: React.FC<Props> = () => {

    gsap.registerPlugin(useGSAP);

    const container = useRef<HTMLDivElement>(null);

    const [imageShow, setImageShow] = useState(0);

    useGSAP(() => {
        gsap.fromTo(
            ".personal-image", 
            { opacity: 0, scale: 0.8, rotate: -20 }, 
            { opacity: 1, scale: 1, rotate: 0, duration: 1, ease: "power2.out" }
        );
    }, { scope: container, dependencies: [imageShow] });
    

    useEffect(() => {
        const time = setInterval(() => {
            setImageShow(prev => prev + 1);
        }, 3000);
        return () => clearInterval(time); // Cleanup interval
    }, []);

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
            <div className="flex-1 h-screen content-center" ref={container} >
            <Image src="/images/image1.JPEG" width={400} height={800}  alt="trees" className={`personal-image h-[50vh] object-cover  object-center rounded-full h-150 w-150 box-shadow: var(--shadow-lg)  ${imageShow % 3 === 0 ? '' : 'hidden'}`} />
            <Image src="/images/image2.JPEG" width={400} height={800} alt="trees" className={`personal-image h-[50vh]  object-cover  object-center rounded-full h-150 w-150 box-shadow: var(--shadow-lg)box-shadow: var(--shadow-lg); ${imageShow % 3 === 1 ? '' : 'hidden'}`} />
            <Image src="/images/image3.JPEG" width={400} height={800} alt="trees" className={`personal-image h-[50vh]  object-covef  object-center rounded-full h-150 w-150 box-shadow: var(--shadow-lg) ${imageShow % 3 === 2 ? '' : 'hidden'}`} />
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
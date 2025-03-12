//@ts-ignore
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

export default function Template({ children }: { children: React.ReactNode }) {

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    useGSAP(() => {
        // gsap code here...
        gsap.to(".section", { scrollTrigger: '.section', y: 0, opacity: 1, scale:1, direction: 1, duration: 0.25 }); // <-- automatically reverted

    }) // <-- scope for selector text (optional)

    return (<>
        <div>
            <div className='section opacity-5 scale-75 -translate-y-[-100px]  bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                {children}
            </div>
        </div></>)


}
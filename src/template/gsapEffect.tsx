"use client"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

export default function GsapEffect({ children }: { children: React.ReactNode }) {

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const sectionRef = useRef();    

    useGSAP(() => {
        // gsap code here...
        gsap.to(".section", { scrollTrigger: '.section', y: 0, opacity: 1, scale:1, direction: 1, duration: 0.25 }); // <-- automatically reverted

    }, { scope: sectionRef }) // <-- scope for selector text (optional)

    return (<>
        <div ref={sectionRef}>
            <div className='section opacity-5 scale-75 -translate-y-[-100px]'>
                {children}
            </div>
        </div></>)


}
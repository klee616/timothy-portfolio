//@ts-ignore 
// "use client"
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { useEffect, useState, useRef } from "react"
// import Image from "next/image";


const App = () => {

    // const [num, setNum] = useState(1)
    // gsap.registerPlugin(useGSAP, ScrollTrigger);
    // const personalImageContainer = useRef();

    // useGSAP(() => {
    //     // gsap code here...
    //     gsap.to(".box2", { x: 200, direction: 1 }); // <-- automatically reverted

    // }, { scope: personalImageContainer }) // <-- scope for selector text (optional)

    // useGSAP(() => {
    //     gsap.to(".test", { scrollTrigger: '.test', y: 0, opacity: 1, direction: -1, duration: 1 })
    // })

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setNum(num + 1);
    //         imageEffect();
    //     }, 3000);
    //     return () => clearInterval(id);
    // }, [num])

    // function imageEffect() {
    //     gsap.fromTo(".image", { rotate: 0 }, { rotate: 720, direction: 1, duration: 0.25 })
    // }

    return (
        <>
            <div className="w-screen h-screen">
{/* 
                <div>{num}</div>
                <div className="flex w-[50%] h-[50%]  bg-red-500 gap-5" ref={personalImageContainer}>
                    <Image src={`/images/image${num % 3 + 1}.JPEG`} width={400} height={800} alt="trees" className="image object-cover  object-center rounded-full h-150 w-150" />
                </div> */}
            </div>

            <div className=" w-screen h-screen bg-yellow-900  ">
                <div className="test w-[50px] h-[50px] bg-blue-500 opacity-0 -translate-y-[-100px]      ">ads</div>
            </div>
        </>
    );
}

export default App;
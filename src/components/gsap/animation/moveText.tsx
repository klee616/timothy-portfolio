// "use client"
// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';

// import { Observer } from "gsap/Observer";


// interface Props {

// }

// const App: React.FC<Props> = ({text }:{text?:String}) => {


//     gsap.registerPlugin(useGSAP);

//     const container = useRef();


//     useGSAP(() => {


//         var tl = gsap.timeline({repeat:-1, })

//         // gsap code here...
//         tl.fromTo(".box2", { x:"random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity: 1 }, { x: "random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity:0, duration: 5});
//         tl.fromTo(".box2", { x:"random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity: 1 }, { x: "random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity:0, duration: 5});
//         tl.fromTo(".box2", { x:"random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity: 1 }, { x: "random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity:0, duration: 5});
//         tl.fromTo(".box2", { x:"random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity: 1 }, { x: "random([0, 100, 200, 500])", y: "random([0, 100, 200, 500])", opacity:0, duration: 5});

//     }); // <-- easily add a scope for 
//     return (<>
//             <div className=" box2 block w-[50px] h-[50px] ">{text}</div>
//     </>)
// }
// export default App;
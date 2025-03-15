import React from 'react';
import Image from "next/image";
import Menu from "@/components/Menu"
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";
import { ImgComparison } from "@/components/ui/imgComparison";
import { useRouter } from "next/router";

const App: React.FC = () => {
    return (
        <>
            <TopHeader />
            <Menu />

            <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 flex-auto flex flex-col p-20  pb-10'>
                <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                <div className='flex-auto w-full flex flex-col md:flex-row basis-md  md:basis-1/3 xl:basis-1/3 gap-2'>
                        <div className='flex-auto  basis-md md:basis-1/3 xl:basis-1/3  text-gray-950'>
                            <h1 className='text-2xl mb-2 font-bold'>Coffee Machine Graphic</h1>
                            <p className='text-base mb-10'>The project uses Adobe Illustrator to duplicate the coffee machine shape.</p>

                            <div className='flex-col flex justify-around gap-2 p-3 w-full md:max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d]  text-white'>
                                <div className='flex-row flex justify-between'>
                                    <span className='font-bold'>Type: </span>
                                    <span>Individual</span>
                                </div>
                                <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2023</span></div>
                                <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Designer</span></div>
                                <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                    <span className='flex-col flex text-right gap-2'>
                                        Adobe Illustrator<br />
                                    </span></div>
                            </div>
                        </div>
                        <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3 m-5'>
                            <Image
                                src="/project/project4/graphic.png"
                                width={900}
                                height={1300}
                                layout='responsive'
                                alt="Coffee Machine Graphic"
                                className='max-h-screen object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex-auto flex flex-col gap-5 basis-5xl w-full 2xl:w-[1280px] mb-[5rem] self-center mt-10'>
                    <ImgComparison
                        leftText='Original'
                        rightText='Graphic'
                        image2='/project/project4/graphic.png'
                        image1='/project/project4/original.png'
                        className='max-w-[900px] self-center' />

                </div>
            </section >
            <Footer />
        </>
    )
}

export default App;


// export const metadata = {
//     title: {
//         absolute: 'The Can’s mockup - Caffi Go',
//     },
//     keywords: ['Showcase of Adobe Photoshop\' CC ', 'Poster Showcase', 'BCIT D3'],
//     authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
//     creator: 'Timothy Lee',
//     publisher: 'Timothy Lee',
//     formatDetection: {
//         email: false,
//         address: false,
//         telephone: false,
//     },
// }

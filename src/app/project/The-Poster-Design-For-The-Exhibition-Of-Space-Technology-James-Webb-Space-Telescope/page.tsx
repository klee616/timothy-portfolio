import React from 'react';

import Image from "next/image";
import Menu from "@/components/Menu"
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";
import GsapEffect from '@/template/gsapEffect';
import { useRouter } from "next/router";

const App: React.FC = () => {
    return (
        <>
        <TopHeader />
        <Menu />
            <section className='w-screen min-h-screen bg-[var(--primary-color)] gap-[3rem] items-center flex flex-col pt-20 z-50 text-gray-950 pl-5 pr-5 md:pl-10 md:pr-10 xl:pl-0 xl:pr-0'>
                <div className=' w-screen m-auto flex flex-col  mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row text-gray-950'>
                    <div className='w-full m-auto flex flex-row flex-nowrap'>
                        <div className='flex-auto  basis-md md:basis-1/3 xl:basis-1/3  text-gray-950'>
                            <h1 className='text-2xl mb-2 font-bold'>The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope</h1>
                            <p className='text-base mb-10'>The project involves designing a poster to engage the audience for the James Webb Space Telescope exhibition. The poster is required to be adaptable for display on various devices, accommodating both portrait and landscape orientations while maintaining a consistent style.</p>
                            <p className='text-base mb-10'>The poster uses black as the main color to align the space topic. also, the white font color with a black background has a strong contrast to accentuate the topic, catching the audience's attention.</p>
                            <div className='flex-col flex justify-around gap-2 p-3 w-full max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d]  text-white'>
                                <div className='flex-row flex justify-between'>
                                    <span className='font-bold'>Type: </span>
                                    <span>Individual</span>
                                </div>
                                <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2024</span></div>
                                <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Designer</span></div>
                                <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                    <span className='flex-col flex text-right gap-2'>
                                        Research<br />
                                        Adobe Photoshop<br />
                                        Adobe Indesign<br />
                                    </span></div>
                            </div>
                        </div>
                        <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3 m-5'>
                            <Image
                                src="/project/project1/image1.jpg"
                                width={1536}
                                height={2048}
                                layout='responsive'
                                alt="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                                className='max-h-screen object-contain '
                            />
                        </div>
                    </div>
                </div>

                <div className='flex-auto flex flex-col gap-5 basis-5xl w-full 2xl:w-[1280px] mb-[5rem] '>
                    <GsapEffect>
                        <Image
                            src="/project/project1/image4.png"
                            width={600}
                            height={400}
                            layout='responsive'
                            alt="Mockup 1"
                            className='max-h-screen  h-[70vh] object-contain  max-xl  2xl:w-[1280px]'
                        />
                    </GsapEffect>
                    <GsapEffect>
                        <Image
                            src="/project/project1/image2.jpg"
                            width={600}
                            height={400}
                            layout='responsive'
                            alt="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                            className='max-h-screen h-[70vh] object-contain  max-xl  2xl:w-[1280px]'
                        />
                    </GsapEffect>
                    <GsapEffect>
                        <Image
                            src="/project/project1/image3.png"
                            width={600}
                            height={400}
                            layout='responsive'
                            alt="Mockup 2"
                            className='max-h-screen h-[70vh] object-contain  max-xl  2xl:w-[1280px]'
                        />
                    </GsapEffect>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App;


// export const metadata = {
//     title: {
//         absolute: 'The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope ',
//     },
//     keywords: ['Showcase of Adobe Photoshop\' CC ', 'Adobe Indesign\'s Showcase', 'Poster Showcase', 'BCIT D3'],
//     authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
//     creator: 'Timothy Lee',
//     publisher: 'Timothy Lee',
//     formatDetection: {
//         email: false,
//         address: false,
//         telephone: false,
//     },
// }
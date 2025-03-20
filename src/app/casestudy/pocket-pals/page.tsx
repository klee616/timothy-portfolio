//@ts-ignore
"use client"
import React from 'react';

import "./pocket.css";
import Image from "next/image";
import Menu from "@/components/Menu"
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ImgComparison } from "@/components/ui/imgComparison";
import goldibiteImage from "@/data/goldbite.json"
import GoldibiteSection from "@/components/GoldibiteSection/template"
const App: React.FC = () => {

    const products: { title: string, link: string, thumbnail: string }[] = goldibiteImage;


    return (
        <>
            <TopHeader />
            <Menu />
            <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 flex-auto flex flex-col p-20  pb-10'>
                <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                    <div className='flex-auto w-full  basis-md  md:basis-1/3 xl:basis-1/3 gap-2'>
                        <h1 className='text-2xl mb-2 font-bold'>Pocket Pals - An animal Learning App For Kids</h1>
                        <p className='text-base mb-10'>Pocket Pals sparks curiosity in children and makes learning fun. Rather than traditional games and articles, the client envisioned engaging and accessible content. This vision was brought to life through linked articles combined with a mix-and-match game, blending education with play. Vibrant colors, playful icons, and soft edges created a welcoming, user-friendly app. Simple layouts, large buttons, and subtle animations ensured accessibility for kids. Every element—from storytelling to research—came together to form a cohesive, inclusive experience, reflecting the client’s goal of inspiring young imaginations.</p>
                        <div className='flex-col flex justify-around gap-2 p-3 w-full md:max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d] text-white'>
                            <div className='flex-row flex justify-between'>
                                <span className='font-bold'>Type: </span>
                                <span>Group project</span>
                            </div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2023</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Research Designer, Web developer</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                <span className='flex-col flex text-right gap-2'>
                                    Adobe Photoshop<br />
                                    Figma<br />
                                    Research<br />
                                    React<br />
                                    NextJs<br />
                                    GitHub<br />
                                </span></div>

                        </div>

                        <div className='mt-5 w-full md:max-w-xs flex flex-col gap-1 '>
                            <a href="https://github.com/klee616/pocket-pals" target='_blank' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full block text-center'>Visit on GitHub</a>
                            <a href="https://pocketpals.vercel.app/" target='_blank' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full block text-center'>Demo</a>
                        </div>

                    </div>
                    <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                        <Image
                            src="/casestudy/pocket-pals/mockup-image1.png"
                            width={1536}
                            height={2048}
                            layout='responsive'
                            alt="Goldibite - The right bite every time"
                            className='max-h-screen object-contain '
                        />
                    </div>
                </div>
                {/* Problem and solution */}

                <GoldibiteSection >
                    <div className=' section opacity-5 scale-75  -translate-y-[-100px] bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>

                        <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>Color Selection</h2>
                            <p className='text-base mb-5'>Pocket Pals uses four colors: Fringy Flower, Green Pea, Sunglow, and Mango Tango. </p>
                        </div>



                        <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                            <Image
                                src="/casestudy/pocket-pals/colours_selection.png"
                                width={1277}
                                height={676}
                                layout='responsive'
                                alt="Pocket Pals Colors"
                                className='max-h-screen object-contain'
                            />
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection >
                    <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse  text-gray-950'>



                        <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                            <h2 className='text-xl font-bold mb-5'>Ttypography</h2>
                            <p>Pocket Pals chose Sarabun as the primary font to enhance the user experience. The font style is displayed in the box.</p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-start'>


                            <p className='text-base mb-5 h1-font-style'>
                                Header 1: Sarabun, 2.25rem normal
                            </p>
                            <p className='text-base mb-5 h2-font-style'>
                                Header 2: Sarabun, 2rem normal
                            </p>
                            <p className='text-base mb-5 h3-font-style'>
                                Header 3: Sarabun, 1.75rem normal
                            </p>
                            <p className='text-base mb-5 h4-font-style'>
                                Header 4: Sarabun, 1.5rem normal
                            </p>

                            <p className='text-base mb-5 header_font'>
                                Title: Sarabun, 2rem normal
                            </p>
                            <p className='text-base mb-5 description'>
                                Description: Sarabun, 1.5rem normal
                            </p>
                        </div>
                    </div>
                </GoldibiteSection>


                <GoldibiteSection>
                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row  md:flex-rowtext-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/2 xl:basis-1/2 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>LoFi Figma</h3>
                            <iframe className='border border-black border-opacity-10 w-full h-[600px]'  src="https://embed.figma.com/design/ewwpIzC4z8omKotGYBGyLL/MDIA-2106-PocketPals-Set-F-Group-2?node-id=1163-1417&embed-host=share" ></iframe>

                        </div>

                        <div className='flex-auto basis-md  md:basis-1/2 xl:basis-1/2 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>HiFi Figma</h3>
                            <iframe className='border border-black border-opacity-10  w-full  h-[600px]' src="https://embed.figma.com/design/ewwpIzC4z8omKotGYBGyLL/MDIA-2106-PocketPals-Set-F-Group-2?node-id=70-192&embed-host=share" ></iframe>

                        </div>
                    </div>
                </GoldibiteSection>


                
            </section>
            <Footer />
        </>
    )
}

export default App;

// export const metadata = {
//     title: {
//         absolute: 'Project - Goldibite ',
//     },
//     keywords: ['bcit d3 showcase', 'Goldibite', 'BCIT showcase'],
//     authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
//     creator: 'Timothy Lee',
//     publisher: 'Timothy Lee',
//     formatDetection: {
//         email: false,
//         address: false,
//         telephone: false,
//     },
// }
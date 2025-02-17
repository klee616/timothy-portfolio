import React from 'react';

import Image from "next/image";
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";

const App: React.FC = () => {
    return (
        <>
            <TopHeader />
                     <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 text-gray-950'>
                <div className='bg-[var(--primary-color)] max-w-[1920px] w-screen m-auto flex flex-row flex-nowrap mt-20 z-50 gap-10 p-5 text-gray-950'>
                    <div className='flex-auto max-w-md text-gray-950'>
                        <h1 className='text-2xl mb-2 font-bold'>Man City Football Club Team’s Poster Design</h1>
                        <p className='text-base mb-10'>Manchester City has been recognized as one of the most popular football clubs in the world, with fans spanning across the globe. The purpose of this project is to create a template that promotes the team's energy and dynamism, designed for display on signboards and as a poster available for purchase on their website.
                        </p>
                        <p className='text-base mb-10'>The design concept centers around using the brand's signature color as the primary element to reinforce its identity, while the boat symbol represents its rich history. Curved elements add a sense of movement and energy to the poster. The images are carefully selected from in-game captures and enhanced with filters to ensure a cohesive and visually appealing design.</p>
                        <div className='flex-col flex justify-around gap-2 p-3 w-full max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d]  text-white'>
                            <div className='flex-row flex justify-between'>
                                <span className='font-bold'>Type: </span>
                                <span>Individual</span>
                            </div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2024</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Designer</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                <span className='flex-col flex text-right gap-2'>
                                    Adobe Photoshop<br />
                                    Adobe Indesign<br />
                                    Design Thinking<br />
                                    Research<br />
                                </span></div>
                        </div>

                    </div>
                    <div className='flex-auto flex flex-col gap-5'>
                        <Image
                            src="/project/project2/poster-mockup.png"
                            width={3134}
                            height={1912}
                            layout='responsive'
                            alt="Poster mockup"
                            className='max-h-screen object-contain'
                        />
                        <Image
                            src="/project/project2/poster-1.png"
                            width={2635}
                            height={3375}
                            layout='responsive'
                            alt="Man City Team Project"
                            className='max-h-screen object-contain '
                        />
                        <Image
                            src="/project/project2/poster-2.png"
                            width={2635}
                            height={3375}
                            layout='responsive'
                            alt="Man City - John Stones"
                            className='max-h-screen object-contain '
                        />
                        <Image
                            src="/project/project2/poster-3.png"
                            width={2635}
                            height={3375}
                            layout='responsive'
                            alt="Man City - Erling Haaland"
                            className='max-h-screen object-contain '
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App;


export const metadata = {
    title: {
        absolute: 'The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope ',
    },
    keywords: ['Showcase of Adobe Photoshop\' CC ', 'Adobe Indesign\'s Showcase', 'Poster Showcase', 'BCIT D3'],
    authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
    creator: 'Timothy Lee',
    publisher: 'Timothy Lee',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}
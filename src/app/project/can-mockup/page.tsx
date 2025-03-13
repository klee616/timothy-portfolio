import React from 'react';

import Image from "next/image";
import Menu from "@/components/Menu"
import Footer from "@/components/Footer";
import GsapEffect from '@/template/gsapEffect'

const App: React.FC = () => {
    return (
        <>
            <Menu />

            <section className='w-screen min-h-screen bg-[var(--primary-color)]  gap-[3rem]  items-center flex flex-col pt-20 z-50 text-gray-950 pl-5 pr-5 md:pl-10 md:pr-10 xl:pl-0 xl:pr-0'>
                <div className=' w-screen m-auto flex flex-col  mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row text-gray-950'>
                    <div className='w-full m-auto flex flex-row flex-nowrap'>
                        <div className='flex-auto  basis-md md:basis-1/3 xl:basis-1/3  text-gray-950'>
                            <h1 className='text-2xl mb-2 font-bold'>The Can’s mockup - Caffi Go</h1>
                            <p className='text-base mb-10'>The logo features a cup of hot coffee with the brand name printed inside a circular design. The steaming coffee cup symbolizes freshness and authenticity, representing a beverage made from real coffee beans for an enjoyable experience.</p>
                            <p className='text-base mb-10'>Additionally, the design can incorporate different color schemes and icons to distinguish flavors while maintaining a consistent template. The color scheme is based on the characteristics of each flavor, and the icons include elements that visually represent those flavors.</p>
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
                                        Adobe Illustrator<br />
                                        Research<br />
                                    </span></div>
                            </div>
                        </div>
                        <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3 m-5'>
                            <Image
                                src="/project/project3/mockup2.png"
                                width={1600}
                                height={800}
                                layout='responsive'
                                alt="Can Mockup"
                                className='max-h-screen object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex-auto flex flex-col gap-5 basis-5xl w-full 2xl:w-[1280px] mb-[5rem] '>
                    <GsapEffect>
                        <Image
                            src="/project/project3/blackCoffeeFlavour.png"
                            width={1924}
                            height={1020}
                            layout='responsive'
                            alt="Black Coffee Flavour"
                            className='max-h-screen object-contain '
                        />
                    </GsapEffect>
                    <GsapEffect>
                        <Image
                            src="/project/project3/caramelLatteFlavour.png"
                            width={1924}
                            height={1020}
                            layout='responsive'
                            alt="CaramelLatteFlavour"
                            className='max-h-screen object-contain '
                        />
                    </GsapEffect>
                    <GsapEffect>
                        <Image
                            src="/project/project3/vanillaLatteFlavour.png"
                            width={1924}
                            height={1020}
                            layout='responsive'
                            alt="Vanilla Latte Flavour"
                            className='max-h-screen object-contain ' />
                    </GsapEffect>
                </div>
            </section >
            <Footer />
        </>
    )
}

export default App;


export const metadata = {
    title: {
        absolute: 'The Can’s mockup - Caffi Go',
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

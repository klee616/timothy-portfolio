import React from 'react';

import Image from "next/image";
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";

const App: React.FC = () => {
    return (
        <>
            <TopHeader />
                     <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 text-gray-950'>
                <div className='bg-[var(--primary-color)] max-w-7xl w-screen m-auto flex flex-row flex-nowrap mt-20 z-50 gap-10 p-5 text-gray-950'>
                    <div className='flex-auto max-w-xl text-gray-950'>
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
                                    Design Thinking<br />
                                    Research<br />
                                </span></div>
                        </div>

                    </div>
                    <div className='flex-auto flex flex-col gap-5'>
                        <Image
                            src="/project/project3/can-mockup.png"
                            width={4744}
                            height={3162}
                            layout='responsive'
                            alt="Can Mockup"
                            className='max-h-screen'
                        />
                        <Image
                            src="/project/project3/blackCoffeeFlavour.png"
                            width={1924}
                            height={1020}
                            layout='responsive'
                            alt="Black Coffee Flavour"
                            className='max-h-screen'
                        />
                        <Image
                            src="/project/project3/caramelLatteFlavour.png"
                            width={1924}
                            height={1020}
                            layout='responsive'
                            alt="CaramelLatteFlavour"
                            className='max-h-screen'
                        />
                        <Image
                            src="/project/project3/VanillaLatteFlavour.png"
                            width={1924}
                            height={1020}
                            layout='responsive'
                            alt="Vanilla Latte Flavour"
                            className='max-h-screen'
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
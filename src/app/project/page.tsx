import React from 'react';

import Image from "next/image";
import styles from "./project.module.css";
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const App: React.FC = () => {
    return (
        <>
            <TopHeader />
            {/* styles.projectInformation
  border-radius: 3rem;
    background-color: rgba(173, 173, 173, 0.3);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    color: #fff;
    padding: 1rem;
    border: 3px solid #6b6b6b;
 */}
            <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 flex-auto flex flex-col p-20  pb-10'>
                <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                    <div className='flex-auto w-full  basis-md  md:basis-1/3 xl:basis-1/3 gap-2'>
                        <h1 className='text-2xl mb-2 font-bold'>The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope</h1>
                        <p className='text-base mb-10'>The project involves designing a poster to engage the audience for the James Webb Space Telescope exhibition. The poster is required to be adaptable for display on various devices, accommodating both portrait and landscape orientations while maintaining a consistent style.</p>
                        <p className='text-base mb-10'>The poster uses black as the main color to align the space topic. also, the white font color with a black background has a strong contrast to accentuate the topic, catching the audience's attention.</p>
                        <div className='flex-col flex justify-around gap-2 p-3 w-full md:max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d]'>
                            <div className='flex-row flex justify-between'>
                                <span className='font-bold'>Type: </span>
                                <span>Individual</span>
                            </div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2024</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Designer</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                <span className='flex-col flex align-right gap-2'>
                                    Adobe Photoshop<br />
                                    Adobe Indesign<br />
                                    Design Thinking<br />
                                    Research<br />

                                </span></div>
                        </div>

                    </div>
                    <div className='flex-auto flex flex-col gap-5'>
                        <Image
                            src="/project/project1/image1.jpg"
                            width={600}
                            height={800}
                            layout='responsive'
                            alt="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                            className='max-h-screen'
                        />
                        <Image
                            src="/project/project1/image4.png"
                            width={600}
                            height={400}
                            layout='responsive'
                            alt="Image 1 Mockup"
                        />
                        <Image
                            src="/project/project1/image2.jpg"
                            width={600}
                            height={400}
                            layout='responsive'
                            alt="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                        />
                        <Image
                            src="/project/project1/image3.png"
                            width={600}
                            height={400}
                            layout='responsive'
                            alt="Image 1 Mockup"
                        />
                    </div>
                </div>
            </section>
            {/* <section className={`${styles.sectionContainer}`}>
            <div className={styles.projectContainer}>

                <h1>The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope</h1>
                <p>The project involves designing a poster to engage the audience for the James Webb Space Telescope exhibition. The poster is required to be adaptable for display on various devices, accommodating both portrait and landscape orientations while maintaining a consistent style.</p>

                <div className={styles.projectInformation}>
                    <div><span>Type</span> <span>Individual</span></div>
                    <div><span>Year</span> <span>2024</span></div>
                    <div><span>Role</span> <span>Designer</span></div>
                    <div><span>Technologies</span>
                        <span>
                        <img src="/icons/Adobe_Photoshop_CC_icon.svg" alt="My Icon" width={50} height={50} />
                        <img src="/icons/Adobe_InDesign_CC_icon.svg" alt="My Icon" width={50} height={50} />
                           
                        </span></div>
                </div>

                <div className={styles.albumContainer}>
                    <Image
                        src="/project/project1/image1.jpg"
                        width={600}
                        height={800}
                        layout='responsive'
                        alt="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                    />
                    <Image
                        src="/project/project1/image4.png"
                        width={600}
                        height={400}
                        layout='responsive'
                        alt="Image 1 Mockup"
                    />
                    <Image
                        src="/project/project1/image2.jpg"
                        width={600}
                        height={400}
                        layout='responsive'
                        alt="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                    />
                    <Image
                        src="/project/project1/image3.png"
                        width={600}
                        height={400}
                        layout='responsive'
                        alt="Image 1 Mockup"
                    />
                </div>
            </div>
            </section> */}
            <Footer />
        </>
    )
}

export default App;


export const metadata = {
    title: {
        absolute: 'The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope ',
    },
    keywords: ['Showcase of Adobe Photoshop\' CC ', 'Showcase of Adobe Illustrator\'s Showcase', 'Poster Showcase'],
    authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
    creator: 'Timothy Lee',
    publisher: 'Timothy Lee',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}
import React from 'react';

import Image from "next/image";
import styles from "./project.module.css";
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";

const App: React.FC = () => {
    return (
        <>
            <TopHeader />
            {/* 
    background-color: var(--primary-color);
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
     */}
            <section className={`bg-[var(--primary-color)] h-full w-full flext align-center`}>
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
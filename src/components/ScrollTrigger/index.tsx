"use client"
// @ts-nocheck
import styles from './ScrollTrigger.module.css'
import React from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { onMount } from 'svelte'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LearnMoreButton from '@/components/Element/Button/LearnMoreButton/LearnMoreButton';
import { useRouter } from 'next/navigation'


gsap.registerPlugin(ScrollTrigger, Observer);

interface Props {

}

const App: React.FC<Props> = ({ }) => {
    const router = useRouter()

    useEffect(() => {

        gsap.defaults({ overwrite: 'auto' });

        //gsap.set(".left-content > *", { xPercent: -50, yPercent: -50 });
        gsap.set(`.${styles.leftContent}`, { xPercent: -25, yPercent: -25 });



        // Set up our scroll trigger
        const ST = ScrollTrigger.create({
            trigger: `.${styles.contentContainer}`, //".content-container",
            start: "top top",
            end: "bottom bottom",
            onUpdate: getCurrentSection,
            pin: `.${styles.leftContent}`   // ".left-content"
        });

        const contentMarkers = gsap.utils.toArray(`.${styles.contentMarker}`);
        console.log(styles.contentMarker)
        console.log(contentMarkers)
        // Set up our content behaviors
        contentMarkers.forEach((marker: any) => {
            marker.content = document.querySelector(`#${marker.dataset.markerContent}`);

            if (marker.content.tagName === "IMG") {
                gsap.set(marker.content, { transformOrigin: "center" });

                marker.content.enter = function () {
                    //gsap.fromTo(marker.content, { autoAlpha: 0, rotateY: -30 }, { duration: 0.3, autoAlpha: 1, rotateY: 0 });
                    gsap.fromTo(marker.content, { boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', border: '1rem solid #fff', width: '60%', autoAlpha: 0, rotate: -40 }, { duration: 0.3, autoAlpha: 1, rotate: -10 });
                }
            } else if (marker.content.tagName === "BLOCKQUOTE") {
                gsap.set(marker.content, { transformOrigin: "left center" });

                marker.content.enter = function () {
                    // gsap.fromTo(marker.content, { autoAlpha: 0, rotateY: 50 }, { duration: 0.3, autoAlpha: 1, rotateY: 0 });
                    gsap.fromTo(marker.content, { autoAlpha: 0, rotate: -30 }, { duration: 0.3, autoAlpha: 1, rotate: 0 });
                }
            }

            marker.content.leave = function () {
                gsap.to(marker.content, { duration: 0.1, autoAlpha: 0 });
            }

        });

        // Handle the updated position
        let lastContent: any;
        function getCurrentSection() {
            let newContent: any;
            const currScroll = scrollY + 100;

            console.log(`currScroll: ${currScroll}`)

            // Find the current section
            contentMarkers.forEach((marker: any) => {
                if (currScroll > marker.offsetTop) {
                    newContent = marker.content;
                }
            });

            if (lastContent == undefined) {
                console.log('Content undefined~')
            }

            // If the current section is different than that last, animate in
            if (newContent
                && (lastContent == null
                    || !newContent.isSameNode(lastContent))) {
                // Fade out last section
                if (lastContent) {
                    lastContent.leave();
                }

                // Animate in new section
                newContent.enter();

                lastContent = newContent;
            }

        }

        const media = window.matchMedia("screen and (max-width: 600px)");
        ScrollTrigger.addEventListener("refreshInit", checkSTState);
        checkSTState();

        function checkSTState() {
            if (media.matches) {
                ST.disable();
            } else {
                ST.enable();
            }
        }
    }, []);


    return (
        <>
            <div className={styles.contentContainer} id="project">
                <div className={styles.leftContent} >
                    <Image
                        id='Godibite'
                        src="/casestudy/goldibite/cover.png"
                        width={1200}
                        height={900}
                        alt='Goldibite'
                        className={styles.image}
                    />

                    <Image
                        id='project1'
                        src="/project/project1/cover.png"
                        width={800}
                        height={600}
                        alt='Project 1'
                        className={styles.image}
                    />

                    <Image
                        id='project2'
                        src="/project/project2/cover.png"
                        width={800}
                        height={600}
                        alt=''
                        className={styles.image}
                    />
                    <Image
                        id='project3'
                        src="/project/project3/cover.png"
                        width={800}
                        height={600}
                        alt=''
                        className={styles.image}
                    />


                </div>

                <div className={`${styles.rightContent}`} >


                    <div className={`min-h-screen flex content-center items-center w-full  max-w-lg text-white ${styles.contentMarker}`} data-marker-content="Godibite">
                        <div>
                            <Image
                                src="/casestudy/goldibite/cover.png"
                                width={800}
                                height={600}
                                alt='Goldibite'
                                className={styles.image}
                            />
                            <h3 className='text-2xl mb-8'>Goldibite - The right bite every time</h3>
                            <p className='text-lg'>GoldiBite is an AI-powered app designed to assist individuals with food allergies and sensitivities by providing a comprehensive database to manage food safety concerns while travelling. It aims to eliminate the inconvenience and potential safety risks associated with varying ingredient information and regulations worldwide.</p>

                            <LearnMoreButton callback={() => router.push('/casestudy/goldibite')} />
                        </div>
                    </div>


                    <div className={`min-h-screen flex content-center items-center w-full  max-w-lg text-white ${styles.contentMarker}`} data-marker-content="project1">
                        <div>
                            <Image
                                src="/project/project1/cover.png"
                                width={800}
                                height={600}
                                alt='Project 1'
                                className={styles.image}
                            />
                            <h3 className='text-2xl mb-8'>The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope</h3>
                            <p className='text-lg'>The project involves designing a poster to engage the audience for the James Webb Space Telescope exhibition. The poster is required to be adaptable for display on various devices, accommodating both portrait and landscape orientations while maintaining a consistent style.</p>

                            <LearnMoreButton callback={() => router.push('/project/The-Poster-Design-For-The-Exhibition-Of-Space-Technology-James-Webb-Space-Telescope')} />
                        </div>
                    </div>


                    <div className={`min-h-screen flex content-center items-center  max-w-lg text-white ${styles.contentMarker}`} data-marker-content="project2">
                        <div>

                            <Image
                                src="/project/project2/cover.png"
                                width={800}
                                height={600}
                                alt=''
                                className={styles.image}
                            />
                            <h3 className='text-2xl mb-8'>Man City Poster Design</h3>
                            <p className='text-lg'>Manchester City has been recognized as one of the most popular football clubs in the world, with fans spanning across the globe. The purpose of this project is to create a template that promotes the team's energy and dynamism, designed for display on signboards and as a poster available for purchase on their website.</p>

                            <LearnMoreButton />
                        </div>
                    </div>


                    <div className={`min-h-screen flex content-center items-center  max-w-lg text-white ${styles.contentMarker}`} data-marker-content="project3">
                        <div>
                            <Image
                                src="/project/project3/cover.png"
                                width={800}
                                height={600}
                                alt=''
                                className={styles.image}
                            />
                            <h3 className='text-2xl mb-8'> Caffi Go's Can Mockup</h3>
                            <p className='text-lg'>GaffiGo is a new brand that offers a variety of beverages aimed at young people. This project involves creating a template for a series of real coffee beverages, including Caramel Latte, Black Coffee, and Vanilla Latte flavors.</p>

                            <LearnMoreButton />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default App;
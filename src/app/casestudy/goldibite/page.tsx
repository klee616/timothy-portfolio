//@ts-ignore
"use client"
import React from 'react';

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
            <HeroParallax products={products} />;
            <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 flex-auto flex flex-col p-20  pb-10'>
                <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                    <div className='flex-auto w-full  basis-md  md:basis-1/3 xl:basis-1/3 gap-2'>
                        <h1 className='text-2xl mb-2 font-bold'>Goldibite - The right bite every time</h1>
                        <p className='text-base mb-10'>GoldiBite is an AI-powered app designed to assist individuals with food allergies and sensitivities by providing a comprehensive database for managing food safety concerns while traveling. It aims to eliminate the inconvenience and potential safety risks posed by inconsistent ingredient information and regulations worldwide.</p>
                        <div className='flex-col flex justify-around gap-2 p-3 w-full md:max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d] text-white'>
                            <div className='flex-row flex justify-between'>
                                <span className='font-bold'>Type: </span>
                                <span>Group project</span>
                            </div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2024</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Designer, Web developer</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                <span className='flex-col flex text-right gap-2'>
                                    Adobe Photoshop<br />
                                    Figma<br />
                                    Design Thinking<br />
                                    Research<br />
                                    React Native<br />
                                    Paper UI<br />
                                    Visual Studio<br />
                                    GitHub<br />
                                </span></div>

                        </div>

                        <div className='mt-5 w-full md:max-w-xs '>
                            <a href="https://github.com/Michelle2317/GoldiBite" target='_blank' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full block text-center'>Visit on GitHub</a>
                        </div>

                    </div>
                    <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                        <Image
                            src="/casestudy/goldibite/mockup-image1.png"
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
                    <div className='section opacity-5 scale-75 -translate-y-[-100px]  bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>


                        <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/2 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>The Global Challenge of Food Allergies and Travelling</h2>
                            <p className='text-base mb-5'>Eating out with food allergies is more challenging than many realize. A study by Dalhousie University found that only 27.7% of individuals with food allergies believe menus properly indicate allergens. Alarmingly, 46% have experienced allergic reactions at restaurants, with 25.5% encountering multiple incidents.</p>
                        </div>

                        <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/2 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>GoldiBite designed to address this problem</h2>
                            <ul className='text-base mb-5'>
                                <li>Providing a database of food products with allergen information.</li>
                                <li>Translating menus and food labels for safe choices.</li>
                                <li>Offering emergency resources for allergic reactions.</li>
                            </ul>
                            <p className='text-base mb-5'>
                            Food is a universal joy—no one should have to fear it. GoldiBite helps you confidently find the right bite, every time. 
                            </p>
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection >
                    <div className=' section opacity-5 scale-75  -translate-y-[-100px] bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row-reverse  text-gray-950'>

                        <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>User Persona</h2>
                            <p className='text-base mb-5'>Effective design begins with understanding travelers. Below, we present two key user personas: Claire and Jackson.</p>
                            <p className='text-base mb-10'>Through detailed surveys and in-depth research, user personas were developed to capture the needs, goals, and challenges of the target audience. This deeper understanding enables the creation of targeted solutions that effectively address their concerns.</p>
                            <h3 className='text-xl font-bold  mb-5'>Primary Persona: Claire</h3>
                            <p className='text-base mb-10'>Claire Martin, a 28-year-old marketing coordinator from Lyon, France, is a passionate traveler with a love for exploring new foods. Following a gluten-free diet, she constantly struggles to navigate menus and food labels, especially in foreign countries where language barriers add to the challenge. Whether double-checking ingredients or asking servers for gluten-free options, Claire is always looking for ways to enjoy her meals with confidence.</p>

                            <h3 className='text-xl font-bold mb-5'>Secondary Persona: Jackson</h3>
                            <p className='text-base mb-10'>Jackson is an international student studying digital design. He loves food and constantly seeks options that accommodate his chronic illness. Passionate about nature and socializing with friends, Jackson strives to live a happy and fulfilling life.
                            </p>
                        </div>

                        <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                            <Image
                                src="/casestudy/goldibite/persona-1.svg"
                                width={1276}
                                height={792}
                                layout='responsive'
                                alt="User Personar - Claire"
                                className='max-h-screen object-contain'
                            />
                            <Image
                                src="/casestudy/goldibite/persona-2.svg"
                                width={1276}
                                height={792}
                                layout='responsive'
                                alt="User Personar - Jackson"
                                className='max-h-screen object-contain '
                            />
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection >

                    <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>Brand and Logo Design</h2>
                            <p className='text-base mb-5'>The name GoldiBite is inspired by the Goldilocks story, specifically the famous line: “This porridge is too hot, this porridge is too cold, this porridge is just right.” GoldiBite is designed to eliminate the inconvenience and safety risks of traveling for people with food allergies and sensitivities. Just as Goldilocks searched for the perfect porridge, GoldiBite aims to help travelers find “the right bite, every time.”</p>

                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <Image
                                src="/casestudy/goldibite/logo/variations/logo-variation-1.png"
                                width={250}
                                height={250}
                                alt="Goldibite - logo variations 1"
                                className=' object-contain bg-white border-2 border-black shadow-xl size-40 '
                            />
                            <Image
                                src="/casestudy/goldibite/logo/variations/logo-variation-2.png"
                                width={250}
                                height={250}
                                alt="Goldibite - logo variations 2"
                                className=' object-contain bg-white border-2 border-black shadow-xl size-40'
                            />
                            <Image
                                src="/casestudy/goldibite/logo/variations/logo-variation-3.png"
                                width={250}
                                height={250}
                                alt="Goldibite - logo variations 3"
                                className=' object-contain bg-white border-2 border-black shadow-xl size-40 '
                            />
                            <Image
                                src="/casestudy/goldibite/logo/variations/logo-variation-4.png"
                                width={250}
                                height={250}
                                alt="Goldibite - logo variations 4"
                                className=' object-contain bg-white border-2 border-black shadow-xl size-40'
                            />

                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection >
                    <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse  text-gray-950'>

                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>Colour Palette</h2>

                            <p className='text-base mb-5'>
                                Urgency and Quick Assistance:
                                GoldiBite provides rapid alerts and support during food reactions, ensuring users have the information and tools needed to act swiftly in critical situations.
                            </p>
                            <p className='text-base mb-5'>
                                Balance and Awareness:
                                GoldiBite integrates safety into every aspect, from allergen warnings to emergency instructions, ensuring users can make healthy choices without compromise.

                            </p>
                            <p className='text-base mb-5'>
                                Warmth and Urgency:
                                The deeper orange provides a grounded tone, making it ideal for important notifications or actions that require attention, such as allergen alerts.

                            </p>
                            <p className='text-base mb-5'>
                            These green colors represent health, vitality, and wellness. They suggest fresh, natural ingredients and wholesome living, aligning with the values of GoldiBite. The color evokes "natural" and "fresh" foods, encouraging users to explore healthier options while staying mindful of allergens.
                            </p>
                            <p className='text-base mb-5'>
                            Teal is widely recognized as the official color for food allergy awareness. By incorporating it into your brand, you align your app with the global community dedicated to promoting awareness and supporting individuals managing food allergies.
                            </p>
                            <p className='text-base mb-5'>
                            It also represents that GoldiBite is a safe space for individuals with food allergies, bringing calmness and reassurance.
                            </p>

                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-start'>
                            <Image
                                src="/casestudy/goldibite/colorselection.png"
                                width={901}
                                height={1000}
                                alt="Goldibite - logo variations 1"
                                className=' object-contain  max-h-screen '
                            />
                        </div>
                    </div>
                </GoldibiteSection>


                <GoldibiteSection >
                    <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>

                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>Colour Contrast Checker</h2>
                            <p className='text-base mb-5'>By prioritizing accessibility and color contrast in its design, GoldiBite fosters an inclusive environment where everyone can safely navigate their food options.</p>


                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <Image
                                src="/casestudy/goldibite/color-contrast-checker.png"
                                width={590}
                                height={184}
                                alt="Color contrast checker"
                                className=' object-contain shadow-xl max-h-screen '
                            />
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection >
                    <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse text-gray-950'>

                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>System flow Design (Happy path)</h2>
                            <p className='text-base mb-5'>This happy path was created based on the findings and includes two major functionalities: the food screener and restaurant menu analysis.</p>


                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-start'>
                            <Image
                                src="/casestudy/goldibite/Happy-path.png"
                                width={590}
                                height={184}
                                alt="Color contrast checker"
                                className=' object-contain shadow-xl max-h-screen '
                            />
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection>
                    <div className='bg-[var(--primary-color)]  w-full m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h2 className='text-xl font-bold mb-5'>Hi-Fi Wireframes</h2>
                            <h3 className='text-xl font-bold  mb-5'>Food product allergen analysis</h3>
                            <p>Packaged food allergen analysis allows users to capture product information from the barcode and provides an analysis result.</p>
                            <h3 className='text-xl font-bold  mb-5'>resturant's menu allergen analysis</h3>
                            <p>This function uses the camera to capture a menu image, analyzes the image, and provides the result.</p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end items-start'>

                            <ImgComparison
                                image1='/casestudy/goldibite/wireframe/analysis/hifi-analysis.png'
                                image2='/casestudy/goldibite/wireframe/analysis/lofi-analysis.png'
                                leftText='Hifi'
                                rightText='LoFi'
                                className=' none' />

                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection>
                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>

                            <h3 className='text-xl font-bold  mb-5'>On broading Process</h3>
                            <p>
                            These onboarding screens introduce travelers to the app's features, helping them familiarize themselves with its functionality.
                            </p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end items-start'>
                            <ImgComparison
                                image1='/casestudy/goldibite/wireframe/onbroading/hifi-onbroading.png'
                                image2='/casestudy/goldibite/wireframe/onbroading/lofi-onbroading.png'
                                leftText='Hifi'
                                rightText='LoFi'
                                className='' />


                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection>


                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>Login and Setup Account Process</h3>
                            <p>
                            The login process is streamlined with options to log in via email or Google, making access quick and easy. Travelers are guided through steps to personalize the app according to their specific needs, including customizing allergens to ensure features are tailored to their unique requirements.
                            </p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <ImgComparison
                                image1='/casestudy/goldibite/wireframe/login/hifi-login.png'
                                image2='/casestudy/goldibite/wireframe/login/lofi-login.png'
                                leftText='Hifi'
                                rightText='LoFi'
                                className='' />
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection>



                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>Guides Section</h3>
                            <p>
                            The Guides section provides travelers with essential information on managing allergies, offering tailored tips for both adults and children. The guides include a variety of tips and information to help travelers prevent potential allergic reactions and educate them about the risks of accidental ingestion of allergens. Each guide features clear, step-by-step instructions to help travelers act confidently and appropriately based on their specific needs.
                            </p>
                        </div>


                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <ImgComparison
                                image1='/casestudy/goldibite/wireframe/guide/hifi-guide.png'
                                image2='/casestudy/goldibite/wireframe/guide/lofi-guide.png'
                                leftText='Hifi'
                                rightText='LoFi'
                                className='' />
                        </div>
                    </div>

                </GoldibiteSection>
                <GoldibiteSection>

                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>Setting Section</h3>
                            <p>
                            It enables travelers to personalize their app experience, including options for profile management, language, location, notifications, and allergy preferences. These settings allow users to customize the app to their specific needs, enhancing usability, accessibility, and safety.
                            </p>
                        </div>


                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <ImgComparison
                                image1='/casestudy/goldibite/wireframe/setting/hifi-setting.png'
                                image2='/casestudy/goldibite/wireframe/setting/lofi-setting.png'
                                leftText='Hifi'
                                rightText='LoFi'
                                className='' />
                        </div>
                    </div>

                </GoldibiteSection>
                <GoldibiteSection>


                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>Testing Progress</h3>
                            <p>
                            The testing stage is crucial to ensure GoldiBite's functionality is stable and to enhance the user experience. GitHub Issues is a task manager used in the GoldiBite project for reporting bugs and requesting new features.
                            </p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <Image
                                src="/casestudy/goldibite/Debug-workflow.png"
                                width={3312}
                                height={2016}
                                alt="Color contrast checker"
                                className=' object-contain shadow-xl max-h-screen '
                            />
                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection>

                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'>Promotional Story Video</h3>
                            <p>Capturing the essence of GoldiBite in a short video was crucial for promoting the app. We highlighted key features, such as allergen detection, nutrition tracking, and menu translation, to demonstrate how GoldiBite simplifies safe food choices. The video’s engaging visuals and informative content helped drive user engagement and interest.</p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                            <iframe
                                width="960"
                                height="540"
                                src="https://www.youtube.com/embed/uf32iSEPRRA?si=YKrmegtn_NO3w1Y-"
                                title="Goldibite promotional video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>


                        </div>
                    </div>
                </GoldibiteSection>
                <GoldibiteSection>



                    <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                        <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                            <h3 className='text-xl font-bold  mb-5'> Promotional Materials</h3>
                            <p> </p>
                        </div>

                        <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>

                            <Image
                                src="/casestudy/goldibite/leaflet.png"
                                width={1920}
                                height={1280}
                                alt=""
                                className=' object-contain shadow-xl max-h-screen '
                            />

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
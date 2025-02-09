import React from 'react';

import Image from "next/image";
import TopHeader from "@/components/TopHeader"
import Footer from "@/components/Footer";

const App: React.FC = () => {
    return (
        <>
            <TopHeader />
            <section className='w-screen min-h-screen bg-[var(--primary-color)] flex pt-20 z-50 flex-auto flex flex-col '>
                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                    <div className='flex-auto  basis-md  md:basis-1/3 xl:basis-1/3'>
                        <h1 className='text-2xl mb-2 font-bold'>Goldibite - The right bite every time</h1>
                        <p className='text-base mb-10'>GoldiBite is an AI-powered app designed to assist individuals with food allergies and sensitivities by providing a comprehensive database to manage food safety concerns while travelling. It aims to eliminate the inconvenience and potential safety risks associated with varying ingredient information and regulations worldwide.</p>
                        <div className='flex-col flex justify-around gap-2 p-3 w-full max-w-xs border-2 rounded-md border-[var(--second-color)] bg-[#457b9d] text-white'>
                            <div className='flex-row flex justify-between'>
                                <span className='font-bold'>Type: </span>
                                <span>Group project</span>
                            </div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Year:</span> <span>2024</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Role:</span> <span>Designer, Web developer</span></div>
                            <div className='flex-row flex justify-between'><span className='font-bold'>Technologies:</span>
                                <span className='flex-col flex text-right gap-2'>
                                    Adobe Photoshop<br />
                                    Adobe Indesign<br />
                                    Figma<br />
                                    Design Thinking<br />
                                    Research<br />
                                    React Native<br />
                                    Paper UI<br />
                                    Visual Studio<br />
                                    GitHub<br />
                                </span></div>
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
                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>


                    <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/2 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>The Global Challenge of Food Allergies and Travelling</h2>
                        <p className='text-base mb-5'>Eating out with food allergies is more challenging than many realize. A study by Dalhousie University found that only 27.7% of individuals with food conditions believe menus properly indicate allergens. Alarmingly, 46% have experienced allergic reactions at restaurants, with 25.5% facing multiple incidents.</p>
                    </div>

                    <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/2 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>GoldiBite was designed to solve this problem</h2>
                        <p className='text-base mb-5'>
                            Our app empowers travelers by:
                        </p>
                        <ul className='text-base mb-5'>
                            <li>Providing a database of food products with allergen information.</li>
                            <li>Translating menus and food labels for safe choices.</li>
                            <li>Offering emergency resources for allergic reactions.</li>
                        </ul>
                        <p className='text-base mb-5'>
                            Food is a universal joy, and no one should have to fear it. GoldiBite ensures you can confidently find The Right Bite, Every Time.
                        </p>
                    </div>
                </div>

                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row-reverse  text-gray-950'>

                    <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>User Personar</h2>
                        <p className='text-base mb-5'>An effective design starts with understanding our travellers. Below, we've developed two key user personas: Claire and Jackson.</p>
                        <p className='text-base mb-10'>Using detailed surveys and in-depth research, our team developed user personas that capture the needs, goals, and challenges of our target audience. This deeper understanding allows us to create more targeted solutions that effectively address their specific concerns.</p>
                        <h3 className='text-xl font-bold  mb-5'>Primary Persona: Claire</h3>
                        <p className='text-base mb-10'>Claire Martin is a 28-year-old marketing coordinator from Lyon, France. She is a passionate traveller with a taste for exploring new foods. With a gluten-free diet, Claire faces the constant challenge of navigating menus and food labels, especially in foreign countries due to language barriers. Whether double-checking ingredients or asking servers for gluten-free alternatives, Claire is always searching for ways to enjoy her meals.</p>

                        <h3 className='text-xl font-bold mb-5'>Secondary Persona: Jackson</h3>
                        <p className='text-base mb-10'>Jackson is an international student who currently studies digital design at an institution. He enjoys food and strives to find options that cater to his chronic illness. Jackson enjoys nature and socializing with friends striving to live a happy and full life.</p>
                    </div>

                    <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                        <Image
                            src="/casestudy/goldibite/persona-1.svg"
                            width={1276}
                            height={792}
                            layout='responsive'
                            alt="User Personar - Claire"
                            className='max-h-screen object-contain shadow-xl'
                        />
                        <Image
                            src="/casestudy/goldibite/persona-2.svg"
                            width={1276}
                            height={792}
                            layout='responsive'
                            alt="User Personar - Jackson"
                            className='max-h-screen object-contain shadow-xl'
                        />
                    </div>
                </div>

                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row  text-gray-950'>
                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>Brand and Logo Design</h2>
                        <p className='text-base mb-5'>The name GoldiBite is inspired by the Goldilocks story, specifically the famous line, “This porridge is too hot, this porridge is too cold, this porridge is just right.” Our app is designed to eliminate the inconvenience and potential safety risks of travelling for people with food allergies and sensitivities. Just as Goldilocks searched for the ideal porridge, we aim to help travellers find “the right bite, every time.”</p>

                    </div>

                    <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                        <Image
                            src="/casestudy/goldibite/logo/variations/logo-variation-1.png"
                            width={250}
                            height={250}
                            alt="Goldibite - logo variations 1"
                            className=' object-contain bg-white border-2 border-black shadow-xl w-50 '
                        />
                        <Image
                            src="/casestudy/goldibite/logo/variations/logo-variation-2.png"
                            width={250}
                            height={250}
                            alt="Goldibite - logo variations 2"
                            className=' object-contain bg-white border-2 border-black shadow-xl w-50 '
                        />
                        <Image
                            src="/casestudy/goldibite/logo/variations/logo-variation-3.png"
                            width={250}
                            height={250}
                            alt="Goldibite - logo variations 3"
                            className=' object-contain bg-white border-2 border-black shadow-xl w-50  '
                        />
                        <Image
                            src="/casestudy/goldibite/logo/variations/logo-variation-4.png"
                            width={250}
                            height={250}
                            alt="Goldibite - logo variations 4"
                            className=' object-contain bg-white border-2 border-black shadow-xl w-50 '
                        />

                    </div>
                </div>
                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse  text-gray-950'>

                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>Colour Palette</h2>
                        <p className='text-base mb-5'>The name GoldiBite is inspired by the Goldilocks story, specifically the famous line, “This porridge is too hot, this porridge is too cold, this porridge is just right.” Our app is designed to eliminate the inconvenience and potential safety risks of travelling for people with food allergies and sensitivities. Just as Goldilocks searched for the ideal porridge, we aim to help travellers find “the right bite, every time.”</p>

                        <p className='text-base mb-5'>
                            Urgency and Quick Assistance:
                            GoldiBites offers rapid alerts and support during food reaction, ensuring users have the information and tools needed to act swiftly in critical situation.
                        </p>
                        <p className='text-base mb-5'>
                            Balance and Awareness:
                            We integrate safety into every aspect, from allergen warnings to emergency instructions, ensuring users can make healthy choices without compromise.

                        </p>
                        <p className='text-base mb-5'>
                            Warmth and Urgency:
                            The deeper orange has a grounded tone, ideal for important notifications or actions that require attention, such as alerts for allergens.

                        </p>
                        <p className='text-base mb-5'>
                            These green colours represents health, vitality, and wellness. It suggests fresh, natural ingredients and wholes some living aligning with the values of our brand. Evokes "natural" and "fresh" foods encouraging users to explore healthier options while staying mindful of allergens.

                        </p>
                        <p className='text-base mb-5'>
                            Teal is widely recognized as the official color for food allergy awareness. By incorporating it into your brand, you align your app with the global community working to promote awareness and support for people managing food.

                        </p>
                        <p className='text-base mb-5'>
                            Also represent that our app is safe space for people with such allergies and bring calmness and reassurance.
                        </p>

                    </div>

                    <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-start'>
                        <Image
                            src="/casestudy/goldibite/colorselection.png"
                            width={901}
                            height={1000}
                            alt="Goldibite - logo variations 1"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                    </div>
                </div>


                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>

                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>Colour Contrast Checker</h2>
                        <p className='text-base mb-5'>By prioritizing accessibility and colour contrast in our design, we’re fostering an inclusive environment where everyone can safely navigate their food options.</p>


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

                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse text-gray-950'>

                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>System flow Design (Happy path)</h2>
                        <p className='text-base mb-5'>This happy path was created based on our finding, and this happy path includes 2 marjo functionalities, there are food screener, and resturant menu analysis.</p>


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


                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h2 className='text-xl font-bold mb-5'>Hi-Fi Wireframes</h2>
                        <p className='text-base mb-5'>As our team move forward in developing GoldiBite, we’re excited to share our latest progress through hi-fi wireframes. These designs represent our commitment to solving real problems faced by travellers with food allergies or sensitivities.</p>
                        <h3 className='text-xl font-bold  mb-5'>Food product allergen analysis</h3>
                        <p>Packaged food allergen analysis allows user capture the product information from the barcode, and provide the analyst result.</p>
                        <h3 className='text-xl font-bold  mb-5'>resturant's menu allergen analysis</h3>
                        <p>resturant's menu allergen analysis use the camera capture menu image and provide the result.</p>
                    </div>

                    <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end items-start'>
                        <Image
                            src="/casestudy/goldibite/wireframe/analysis/homepage.jpg"
                            width={180}
                            height={400}
                            alt="Goldibite -Home page"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/analysis/barcodescanner.jpg"
                            width={180}
                            height={400}
                            alt="Goldibite -barcode scanner"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/analysis/scannerresult.png"
                            width={180}
                            height={400}
                            alt="Goldibite - Scanner Result"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/analysis/resturantmenu.png"
                            width={180}
                            height={400}
                            alt="Goldibite -menu analysis"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/analysis/menuresult.png"
                            width={180}
                            height={400}
                            alt="Goldibite -menu analysis Result"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/analysis/resturantmenuresultdetail.png"
                            width={180}
                            height={400}
                            alt="Goldibite -menu analysis page (Detail)"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                    </div>
                </div>

                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row-reverse text-gray-950'>
                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>

                        <h3 className='text-xl font-bold  mb-5'>On broading Process</h3>
                        <p>
                            These onboarding screens introduce travellers to the app's features, familiarizing them with its functionality.
                        </p>
                    </div>

                    <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-start'>
                        <Image
                            src="/casestudy/goldibite/wireframe/onboranding/Onboarding-1.jpg"
                            width={180}
                            height={400}
                            alt="Goldibite - Onboarding 1"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/onboranding/Onboarding-2.png"
                            width={180}
                            height={400}
                            alt="Goldibite - Onboarding 2"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/onboranding/Onboarding-3.png"
                            width={180}
                            height={400}
                            alt="Goldibite - Onboarding 3"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/onboranding/Onboarding-4.png"
                            width={180}
                            height={400}
                            alt="Goldibite - Onboarding 4"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/onboranding/Onboarding-5.png"
                            width={180}
                            height={400}
                            alt="Goldibite - Onboarding 5"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/onboranding/Onboarding-6.png"
                            width={180}
                            height={400}
                            alt="Goldibite - Onboarding 6"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                    </div>
                </div>


                <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl  md:flex-row text-gray-950'>
                    <div className='flex-auto basis-md  md:basis-1/3 xl:basis-1/3 text-gray-950'>
                        <h3 className='text-xl font-bold  mb-5'>Login and Setup Account Process</h3>
                        <p>
                            The login process is streamlined with options to log in via email or Google, making access quick and simple. Travellers are guided through steps to personalize the app to their specific needs, including customizing allergens to ensure features are tailored to their unique requirements.
                        </p>
                    </div>

                    <div className='flex-auto flex flex-row flex-wrap gap-10 n basis-5xl md:basis-1/3  xl:basis-2/3 justify-end'>
                        <Image
                            src="/casestudy/goldibite/wireframe/login/login-1.png"
                            width={180}
                            height={400}
                            alt="Goldibite - login wireframe 1"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/login/login-2.png"
                            width={180}
                            height={400}
                            alt="Goldibite - login wireframe 2"
                            className=' object-contain shadow-xl max-h-screen '
                        />

                        <Image
                            src="/casestudy/goldibite/wireframe/login/login-3.png"
                            width={180}
                            height={400}
                            alt="Goldibite - login wireframe 3"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/login/login-4.png"
                            width={180}
                            height={400}
                            alt="Goldibite - login wireframe 4"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/login/login-5.png"
                            width={180}
                            height={400}
                            alt="Goldibite - login wireframe 5"
                            className=' object-contain shadow-xl max-h-screen '
                        />
                        <Image
                            src="/casestudy/goldibite/wireframe/login/login-6.png"
                            width={180}
                            height={400}
                            alt="Goldibite - login wireframe 6"
                            className=' object-contain shadow-xl max-h-screen '
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
        absolute: 'Goldibite',
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
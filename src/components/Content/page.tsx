import React from "react";
import Image from "next/image";

interface Props {
    content: string[],
    title: string,
    images: Array<any>,
    rightSide?: boolean
}

const App: React.FC<Props> = ({ content, title, images, rightSide = true }) => {
    return (<>

        <div className='bg-[var(--primary-color)]  w-screen m-auto flex flex-col flex-nowrap mt-20 z-50 gap-10 max-w-7xl justify-center md:flex-row-reverse  text-gray-950'>

            <div className='flex-auto basis-md md:basis-1/3 xl:basis-1/3 text-gray-950'>
                <h2 className='text-xl font-bold mb-5'>{title}</h2>
                <p className='text-base mb-5'>An effective design starts with understanding our travellers. Below, we've developed two key user personas: Claire and Jackson.</p>
                <p className='text-base mb-10'>Using detailed surveys and in-depth research, our team developed user personas that capture the needs, goals, and challenges of our target audience. This deeper understanding allows us to create more targeted solutions that effectively address their specific concerns.</p>
                <h3 className='text-xl font-bold  mb-5'>Primary Persona: Claire</h3>
                <p className='text-base mb-10'>Claire Martin is a 28-year-old marketing coordinator from Lyon, France. She is a passionate traveller with a taste for exploring new foods. With a gluten-free diet, Claire faces the constant challenge of navigating menus and food labels, especially in foreign countries due to language barriers. Whether double-checking ingredients or asking servers for gluten-free alternatives, Claire is always searching for ways to enjoy her meals.</p>

                <h3 className='text-xl font-bold mb-5'>Secondary Persona: Jackson</h3>
                <p className='text-base mb-10'>Jackson is an international student who currently studies digital design at an institution. He enjoys food and strives to find options that cater to his chronic illness. Jackson enjoys nature and socializing with friends striving to live a happy and full life.</p>
            </div>

            <div className='flex-auto flex flex-col gap-5 basis-5xl min-w-screen  md:basis-1/3  xl:basis-2/3'>
                {images && images.map((image, index) => {
                    return (<>
                        <Image key={index}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            layout="responsive"
                            alt={image.alt}
                            className='max-h-screen object-contain shadow-xl'
                        />
                    </>);
                })

                }
            </div>
        </div>

    </>);
}

export default App;
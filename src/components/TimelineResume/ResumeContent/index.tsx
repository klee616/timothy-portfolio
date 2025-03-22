import styles from './ResumeContent.module.css'
import React from "react";
import Image from 'next/image';

interface Props {
    position: string;
    company: string;
    location: string;
    duties: string[];
    logo: { path: string; width: number; height: number };
}

const App: React.FC<Props> = ({ position, company, location, duties= [], logo }) => {
    return (
        <div>
            <h3 className={`${styles.position} text-2xl leading-10`}>{position}</h3>
            <p className={`${styles.company}  text-xl`}>{company}, {location}</p>
            <div className={`${styles.description}  text-base`}>
                <ul>
                    {duties?.map((duty, index) => (
                        <li key={index}>{duty}</li>
                    ))}
                </ul>
            </div>

            <div className='absolute top-0 right-0'>
                <Image
                    src={logo.path}
                    width={logo.width}
                    height={logo.height}
                    alt={company}
                    className='max-w-[200px] max-h-[50px] object-contain'
                />
            </div>
        </div>
    )
}

export default App;
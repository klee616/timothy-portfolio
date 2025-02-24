import styles from './ResumeContent.module.css'
import React from "react";
import Image from 'next/image';

interface Props {
    position: String,
    company: String,
    location: String,
    duties: String[],
    logo: any
}

const App: React.FC<Props> = ({ position, company, location, duties, logo }) => {
    return (<>
        <div>
            <h3 className={`${styles.position} text-2xl leading-10`}>{position}</h3>
            <p className={`${styles.company}  text-xl`}>{company}, {location}</p>
            <div className={`${styles.description}  text-base`}>
                <ul>
                    {
                        duties && duties.map((duty: String, index: number) => {
                            return (<>
                                <li key={index}>{duty}</li>
                            </>)
                        })}
                </ul>
            </div>

            <div className='absolute top-0 right-0'>
                <Image
                    src={logo.path}
                    width={logo.width}
                    height={logo.height}
                    alt={company}
                     className='max-w-[200px] max-h-[50px] contain'
                />
            </div>
        </div>
    </>)
}

export default App;
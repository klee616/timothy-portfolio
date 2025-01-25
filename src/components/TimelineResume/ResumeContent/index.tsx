import styles from './ResumeContent.module.css'
import React from "react";

interface Props {
    position: String,
    company: String,
    location: String,
    duties: String[]
}

const App: React.FC<Props> = ({ position, company, location, duties }) => {
    return (<>
        <div>
            <h3 className={`${styles.position}`}>{position}</h3>
            <p className={`${styles.company}`}>{company}, {location}</p>
            <div className={`${styles.description}`}>
                <ul>
                    {
                        duties && duties.map((duty: String, index: number) => {
                            return (<>
                                <li key={index}>{duty}</li>
                            </>)
                        })}
                </ul>
            </div>
        </div>
    </>)
}

export default App;
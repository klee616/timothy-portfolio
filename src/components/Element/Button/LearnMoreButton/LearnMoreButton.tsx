import React from "react";
import styles from './LearnMoreButton.module.css'

interface Porps {
    label?: string,
    callback?: React.FC
}

const LearnMoreButton: React.FC<Porps> = ({ label ="Learn More~", callback = ()=>{console.log('Press me')} }) => {
    return (<>
        <button className={`${styles.customBtn} ${styles.btn}`} onClick={callback}>{label}</button>
    </>);
}

export default LearnMoreButton;
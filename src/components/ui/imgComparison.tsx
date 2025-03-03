"use client"
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import styles from "./imgComparison.module.css";

import React from "react";


 export const ImgComparison = ({ image1 ,image2, leftText = 'HiFi', rightText = 'FoFi'  }:{
    image1:string,
    image2:string,
    leftText:string,
    rightText:string
 }  ) => 
    {
    return <>
        <ImgComparisonSlider className={`slider-with-animated-handle ${styles.colouredSlider}`}>
            <figure slot='first' className='m-0'>
                <img src={image1} />
                <figcaption className='bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-80 p-3 absolute top-1/2 transform -translate-y-1/2 leading-none left-3'>{leftText}</figcaption>
            </figure>

            <figure slot="second" className='m-0'>
                <img src={image2} />
                <figcaption className='bg-white border border-gray-400 rounded-xl text-[#2e3452] opacity-80 p-3 absolute top-1/2 transform -translate-y-1/2 leading-none right-3'>{rightText}</figcaption>
            </figure>
           
            <svg  {...({ slot: "handle" } as any)}  className="custom-animated-handle transition-transform duration-200 hover:scale-120 border-[#999]" xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
                <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" strokeWidth="1" fill="#999" vectorEffect="non-scaling-stroke"></path>
            </svg>
        </ImgComparisonSlider>
    </>
}

export default ImgComparison;
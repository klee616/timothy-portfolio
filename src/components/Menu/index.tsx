"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRouter } from "next/router"; 

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/#project", label: "Project" },
    { path: "/casestudy/goldibite", label: "Casestudy" },
]

const Menu = ({ }: {}) => {
    const container = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    /** GASP */
    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    useGSAP(
        () => {
            gsap.set(".menu-link-item-holder", { y: 75 });

            tl.current = gsap
              .timeline({ paused: true })
              .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
              })
              .to(".menu-link-item-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
              });
          },
          { scope: container }
        );
    

        useEffect(() => {
          if (tl.current) { 
            if (isMenuOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }
          }, [isMenuOpen]);
    
    return (<>
        <div className="menu-container block md:hidden" ref={container} >
          <div className="menu-bar bg-[var(--second-color)] " >
            <div className="menu-logo">
              <Link href={"/"}>
              <Image
                        src='/logo.png'
                        width={75}
                        height={75}
                        alt="Timothy's portfilio"
                        onClick={() => router.push('/')}
                        className='cursor-pointer object-contain size-[75px] mr-2 md:mr-0 md:size-[75px] xl:size-[100px]'
                      />
              </Link>
            </div>
            <div className="menu-open" onClick={toggleMenu}>
              <p>Menu</p>
            </div>
            <div className="menu-overlay">
              <div className="menu-overlay-bar">
                <div className="menu-logo">
                  <Link href={"/"}>
                  <Image
                        src='/logo.png'
                        width={75}
                        height={75}
                        alt="Timothy's portfilio"
                        onClick={() => router.push('/')}
                        className='cursor-pointer object-contain size-[75px] mr-2 md:mr-0 md:size-[75px] xl:size-[100px]'
                      />
                  </Link>
                </div>
                <div className="menu-close" onClick={toggleMenu}>
                  <p>Close</p>
                </div>
              </div>
    
              <div className="menu-close-icon">
                <p onClick={toggleMenu}>&#x2715;</p>
              </div>
              <div className="menu-copy">
                <div className="menu-links">
                  {menuLinks.map((link) => {
                    return (
                      <div className="menu-link-item" key={link.label}>
                        <div className="menu-link-item-holder" onClick={toggleMenu}>
                          <Link href={link.path} className="menu-link">
                            {link.label}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="menu-info">
                  <div className="menu-info-col">
                    <a href="https://www.linkedin.com/in/timothy-lee616/" target='_blank'>
                     <Image src='/icons/linkedin.png'
                                    height={50}
                                    width={50}
                                    alt='Linkedin'
                                /> </a>
                     <a href="mailto:shing0618@gmail.com" target='_blank'>
                                <Image src='/icons/mail.png'
                                    height={50}
                                    width={50}
                                    alt='Mail'
                                /></a>
                    <a href="https://github.com/klee616" target='_blank'>
                                <Image src='/icons/github.png'
                                    height={50}
                                    width={50}
                                    alt='GitHub'
                                /> </a>
                     <a href="/KamShing_Lee_Resume.pdf" download="KamShing_Lee_Resume.pdf">
                                <Image src='/icons/resume.png'
                                    height={50}
                                    width={50}
                                    alt='Resume'
                                /> </a>
                  </div>
                  <div className="menu-info-col">
                    <p>shing0618@gmail.com</p>
                    <p>(236)-866-8706</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>)
}
export default Menu;
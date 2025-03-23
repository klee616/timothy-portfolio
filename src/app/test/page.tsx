"use client"; // Ensures this code runs only on the client-side

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin"; // Import the plugin if necessary
import Image from "next/image";
import "./test.css"; // Assuming you have your styles here

const App = () => {
  const wheelRef =  useRef<HTMLDivElement | null>(null);  // Ref for the wheel container
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);   // Ref to store all the items
  const rotation = useRef<gsap.core.Tween | null>(null);  // Ref to hold the GSAP rotation animation

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin); // Register the plugin

    // Select all items inside the wheel (using refs to access them in React)
    const items = itemsRef.current;
    const radius = 400; // Radius for the wheel
    const totalItems = items.length;
    const angleStep = 360 / totalItems;

    // Position each item in a circular layout
    items.forEach((item, index) => {
      const angle = index * angleStep;
      gsap.set(item, {
        transform: `rotateY(${angle}deg) translateZ(${radius}px)` // Position each item
      });
    });

    // Animate the wheel (rotation) and store the animation in the `rotation` ref
    rotation.current = gsap.to(wheelRef.current, {
      rotationY: 1200,
      duration: 50,
      repeat: -1,
      ease: "linear"
    });


    gsap.ticker.add(() => {
      const currentRotation = Number(gsap.getProperty(wheelRef.current, "rotationY")) % 360;
    
      items.forEach((item, index) => {
        const itemAngle = (index * angleStep + currentRotation) % 360;
        const isVisible = (itemAngle >= 270 && itemAngle <= 360) || (itemAngle >= 0 && itemAngle <= 90);
    
        gsap.set(item, {
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        });
      });
    });

  }, []); // Empty dependency array ensures this runs once on mount

  // Stop the rotation when hovering over any image
  const handleHover = () => {
    if (rotation.current) {
      rotation.current.pause(); // Pause the rotation
    }
  };

  // Restart the rotation when mouse leaves the wheel
  const handleMouseLeave = () => {
    if (rotation.current) {
      rotation.current.resume(); // Resume the rotation
    }
  };

  return (
    <div className="w-screen h-screen flex content-center items-center">
      <div
        ref={wheelRef}
        className="wheel absolute w-[600px] h-[600px] rounded-full top-1/2 left-1/2 border-[1px]  -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {/* Render album items */}
        <div
          key={0}
          ref={(el) => {
            itemsRef.current[0] = el;
          }}
          className="album-item absolute flex justify-center items-center text-white font-bold"
         onMouseEnter={handleHover} // Stop rotation on hover
         onMouseLeave={handleMouseLeave} // Resume rotation when mouse leaves
        >
          <Image
            id="project4"
            src="/project/project4/cover.png"
            width={600}
            height={450}
            alt="Project 4"
          />
        </div>

        <div
          key={1}
          ref={(el) => {
            itemsRef.current[1] = el;
          }}
          className="album-item absolute flex justify-center items-center text-white font-bold"
          onMouseEnter={handleHover}
         onMouseLeave={handleMouseLeave}
        >
          <Image
            id="goldibite"
            src="/casestudy/goldibite/cover.png"
            width={600}
            height={450}
            alt="Goldibite"
          />
        </div>

        <div
          key={2}
          ref={(el) => {
            itemsRef.current[2] = el;
          }}
          className="album-item absolute flex justify-center items-center text-white font-bold"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            id="project1"
            src="/project/project1/cover.png"
            width={600}
            height={450}
            alt="Project 1"
          />
        </div>

        <div
          key={3}
          ref={(el) => {
            itemsRef.current[3] = el;
          }}
          className="album-item absolute flex justify-center items-center text-white font-bold"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            id="project2"
            src="/project/project2/cover.png"
            width={600}
            height={450}
            alt="Project 2"
          />
        </div>

        <div
          key={4}
          ref={(el) => {
            itemsRef.current[4] = el;
          }}
          className="album-item absolute flex justify-center items-center text-white font-bold"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            id="project3"
            src="/project/project3/cover.png"
            width={600}
            height={450}
            alt="Project 3"
          />
        </div>

        <div
          key={5}
          ref={(el) => {
            itemsRef.current[5] = el;
          }}
          className="album-item absolute flex justify-center items-center text-white font-bold"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            id="project5"
            src="/casestudy/pocket-pals/mockup-image1.png"
            width={600}
            height={450}
            alt="Pocket Pals"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

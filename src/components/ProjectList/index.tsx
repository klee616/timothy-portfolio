import React from "react"
import styles from './ProjectList.module.css'
import PropjectCard from './ProjectCard';
import ContentCard from '@/components/ContentCard'
import Script from 'next/script'

import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";


const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const Index = () => {




  return (<>
    {/* <section className={styles.sectionContainer}>
      <div className={styles.projectContainer}>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      </div>
    </section> */}
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden supports-[overflow:clip]:overflow-clip">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        {/* Scroll Animation   */}
        <div className="max-w-md mx-auto lg:max-w-none lg:min-h-[var(--stick-items)] bg-[var(--second-color)]" data-sticky-sections>
          <div className="lg:sticky lg:top-0 lg:h-screen space-y-16 lg:space-y-0">
            {/* Section */}
            <PropjectCard project="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
              description="The project involves designing a poster to engage the audience for the James Webb Space Telescope exhibition. The poster is required to be adaptable for display on various devices, accommodating both portrait and landscape orientations while maintaining a consistent style."
              location="adsf"
              cover="/project/project1/image1.jpg" />
            <PropjectCard project="Man City Football Club Team’s Poster Design"
              description="Manchester City has been named the most valuable football club brand in the world. I am a super fan and designed a poster for Man City to promote their brand and main player. I used Man City blue as a main color to align their branding and put the boat shape as a background to represent their history."
              location="adsf"
              cover="/project/project2/image1.png" />
              <PropjectCard project="The Poster Design for The Exhibition of Space Technology - James Webb Space Telescope"
                description="The project involves designing a poster to engage the audience for the James Webb Space Telescope exhibition. The poster is required to be adaptable for display on various devices, accommodating both portrait and landscape orientations while maintaining a consistent style."
                location="adsf"
                cover="/project/project1/image1.jpg" />
          </div>
        </div>
      </div>
    </main>
    <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" />
    <Script src="/scripts/sticky-scrolling.js" />
  </>)
}
export default Index;
// @ts-nocheck 
//import Image from "next/image";
import TopHeader from '@/components/TopHeader'
import Introduction from '@/components/Introduction'
//import Introduction from '@/components/Introduction_new'
import TimelineResume from '@/components/TimelineResume'
//import ProjectList from '@/components/ProjectList'
import Footer from '@/components/Footer'
import journeyData from '@/data/journey.json'
//import Parallax from '@/components/Parallax'
import ScrollTrigger from "@/components/ScrollTrigger"
import GsapEffect from '@/template/gsapEffect'
//import Memu from '@/components/Menu'
//import { useRouter } from "next/router";


export const metadata = {
  title: {
    absolute: "Timothy Lee's Portfolio ",
  },
  keywords: ['bcit d3 portfolio', 'd3 portfolio showcase', 'bcit student portfolio'],
  authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
  description : "Hi, I'm Kam Shing Lee, Timothy, This is my portfolio website to share my project.",
  creator: 'Timothy Lee',
  publisher: 'Timothy Lee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function Home() {

  return (
    <>
      <TopHeader />
      <Introduction />
      <ScrollTrigger />
      <GsapEffect><TimelineResume journeyData={journeyData} /></GsapEffect>
      <Footer />
    </>
  );
}
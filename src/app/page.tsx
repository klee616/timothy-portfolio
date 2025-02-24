 // @ts-nocheck 
import Image from "next/image";
import TopHeader from '@/components/TopHeader'
import Introduction from '@/components/Introduction'
import TimelineResume from '@/components/TimelineResume'
import ProjectList from '@/components/ProjectList'
import Footer from '@/components/Footer'
import journeyData from '@/data/journey.json'
import Parallax from '@/components/Parallax'
import ScrollTrigger from "@/components/ScrollTrigger"

export default function Home() {

  return (
    <>
        <TopHeader />
        <Introduction />
        <ScrollTrigger />
        <TimelineResume journeyData={journeyData}/>
        <Footer />
    </>
  );
}
export const metadata = {
  title: {
    absolute: 'Timothy Lee\'s Portfilio ',
  },
  keywords: ['bcit d3 portfolio', 'd3 portfolio showcase', 'bcit student portfolio'],
  authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
  creator: 'Timothy Lee',
  publisher: 'Timothy Lee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
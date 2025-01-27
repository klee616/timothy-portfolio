import Image from "next/image";
import TopHeader from '@/components/TopHeader'
import Introduction from '@/components/Introduction'
import TimelineResume from '@/components/TimelineResume'
import ProjectList from '@/components/ProjectList'
import Footer from '@/components/Footer'
import journeyData from '@/data/journey.json'
import Parallax from '@/components/Parallax'

export default function Home() {

  return (
    <>
        <TopHeader />
        <Introduction />
        <ProjectList />
        <TimelineResume journeyData={journeyData}/>
        <Parallax />
        <Footer />
    </>
  );
}
export const metadata = {
  title: {
    absolute: 'Timothy Lee\'s Portfilio ',
  },
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Kam Shing Lee, Timothy', url: 'https://www.thetimothylee.com' }],
  creator: 'Timothy Lee',
  publisher: 'Timothy Lee',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}
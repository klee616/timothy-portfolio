import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ResumeContent from '@/components/TimelineResume/ResumeContent';

interface Record {
    id: number;
    title: string;
    position: string;
    company: string;
    location: string;
    duties: string[];
    logo: string;
}

interface Props {
    journeyData: Array<Record>;
}

const App: React.FC<Props> = (journeyData) => {
    console.log(journeyData);
    const data:any = [];
    journeyData.journeyData.map((d: Record, i: number) => {
        data.push(
            {
                title: d.title,
                content: (
                    <ResumeContent
                     key={i} 
                     position={d.position} 
                     company={d.company} 
                     location={d.location} 
                     duties={d.duties} 
                     logo={typeof d.logo === "string" ? { path: d.logo, width: 100, height: 50 } : d.logo}  />
                     

                )
            }
        );
    })

    return (
        <div className="w-full" id="about">
            <Timeline data={data} />
        </div>
    );
}

export default App;
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
                    <ResumeContent position={d.position} company={d.company} location={d.location} duties={d.duties} />
                )
            }
        );
    })

    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}

export default App;
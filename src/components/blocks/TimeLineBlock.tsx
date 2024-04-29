import color from "@/data/color.data";
import { Check } from "lucide-react";
import React from "react";

const timelineItems = [
    {
        iconTitle: "begin",
        title: "Evaluation",
        description: "We evaluate your current website and marketing strategies to identify areas for improvement."
    },
    {
        iconTitle: "core",
        title: "Strategy",
        description: "We create a custom strategy to help you achieve your business goals and reach your target audience."
    },
    {
        iconTitle: "core",
        title: "Implementation",
        description: "We implement the strategy and monitor the results to ensure that it is effective."
    },
    {
        iconTitle: "core",
        title: "Optimization",
        description: "We optimize the strategy based on the results and make adjustments as needed."
    },
    {
        iconTitle: "end",
        title: "Results",
        description: "We provide you with detailed reports on the results of the strategy and the impact on your business."
    }

];


interface TimelineItem {
    iconTitle: string;
    title: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
    middleIcon?: any;
}

const TimelineComponent: React.FC<TimelineProps> = ({ items, middleIcon }) => {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical pt-8">
            {items.map((item, index) => (
                <li key={index}>
                    <div className="timeline-middle">
                        {middleIcon && middleIcon}
                    </div>
                    <div className={index % 2 === 0 ? "timeline-start md:text-end mb-10 max-w-md " : "max-w-md timeline-end mb-10"}>
                        <time className="font-mono italic">{item.iconTitle}</time>
                        <div className="text-lg font-black">{item.title}</div>
                        {item.description}
                    </div>
                    <hr />
                </li>
            ))}
        </ul>
    );
}


const TimeLineBlock = () => {
    return (
        <div className="flex flex-col items-center justify-center  prose max-w-full child:m-0 " >
            <div className="child:m-0 flex flex-col text-center">
                <h1>The Process</h1>
            </div>

            <TimelineComponent
                items={timelineItems}
                middleIcon={
                    <div className="timeline-icon border-[1px] border-primary p-1 rounded-full text-primary  text-xs">
                        <Check
                            size={16}
                        />
                    </div>
                }
            />
        </div>
    );
};

export default TimeLineBlock;

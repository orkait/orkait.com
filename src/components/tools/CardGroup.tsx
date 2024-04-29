import { faCut } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { concatClasses } from "@/utils/helper";
import Card from "./Card";


const CardGroup = ({
    data,
    className,
    cardClassName,
}: {
    data: { icon: any, title: string, description: string }[],
    className?: string,
    cardClassName?: string,
}) => {
    return (
        <div className="flex max-w-full flex-wrap  items-center justify-center">
            {data.map((x, index) => (
                <>
                    <Card
                        cardClassName="bg-base-100 shadow-md m-2 w-96 hover:shadow-xl min-w-[300px] min-h-[200px] "
                        key={index}
                        icon={x.icon}
                        title={x.title}
                        description={x.description}
                    />
                </>
            ))}
        </div>
    );
};

export default CardGroup;

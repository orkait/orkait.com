import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({
    icon,
    title,
    description,
    cardClassName,
}: {
    icon: any;
    title: string;
    description: string;
    cardClassName?: string;
    iconClassName?: string;
}) => {
    console.log(icon)
    return (
        <div className={`card hover:shadow-xl w-96 bg-base-100 shadow-md mx-2 ${cardClassName} border-[1px] `}>
            <div className="card-body">
                <figure className="p-2 bg-primary/70 text-white flex items-center justify-center rounded-full mt-2 w-fit ">
                    {icon && icon}
                </figure>
                <h2 className="card-title">
                    {title}
                </h2>
                <p>
                    {description}
                </p>
            </div>

        </div>

    );
};

export default Card;

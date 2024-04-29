import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import CardGroup from "../tools/CardGroup";
import { infoCardData } from "../../data/infocard.data";
import React from "react";

const InfoBlock = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-5"  >
            <div className="prose max-w-xl text-center">
                <div className="child:m-0 ">
                    <h1>A IT Solution That</h1>
                    <h1>Helps Growth Of Your Work</h1>
                </div>
                <p className=" text-justify  ">
                    We provide exclusive IT solutions in the areas of software
                    designing and development. We provide professional web
                    design solutions which suit our clients. We provide the
                    next-generation technology solutions that set standards for
                    industrial expertise, innovative creations, and global-scale
                    quality. UD IT Solutions is involved in software publishing,
                    consultancy, and supply. We also provide maintenance and
                    refurbishing of the existing or new application or a
                    website. We are the best website development company in
                    Mumbai.
                </p>
                <div className="btn btn-outline btn-primary">
                    <label> About Us </label>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div className="divider" />
            <CardGroup
                data={infoCardData} />
        </div>
    );
};

export default InfoBlock;

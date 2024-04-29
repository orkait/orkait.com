import React from "react";
import HeroBlock from "@/components/blocks/HeroBlock";
import InfoBlock from "@/components/blocks/InfoBlock";
import TimeLineBlock from "@/components/blocks/TimeLineBlock";
import ServiceBlock from "@/components/blocks/ServiceBlock";
import ContactBlock from "@/components/blocks/ContactBlock";
import Visionaries from "@/components/blocks/Visionaries";

const MainBlock = () => {
    return (
        <div >
            <HeroBlock />
            <div className="divider" />
            <div className="divider" />
            <InfoBlock />
            <div className="divider" />
            <TimeLineBlock />
            <div className="divider" />
            <ServiceBlock />
            <div className="divider" />
            <Visionaries />
            <div className="divider" />
            <ContactBlock />
        </div>
    );
};

export default MainBlock;

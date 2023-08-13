import React from "react";

import HeroBlock from "./blocks/HeroBlock";
import InfoBlock from "./blocks/InfoBlock";
import TimeLineBlock from "./blocks/TimeLineBlock";
import ServiceBlock from "./blocks/ServiceBlock";
import ContactBlock from "./blocks/ContactBlock";

const MainBlock = () => {
	return (
		<div className="prose md:prose-lg lg:prose-xl">
			<HeroBlock />
			<div className="block">
				<InfoBlock />
			</div>
			<div className="divider" />
			<div className="block">
				<TimeLineBlock />
			</div>
			<div className="divider" />
			<div className="block">
				<ServiceBlock />
			</div>
			<div className="divider" />
			<div className="block">
				<ContactBlock />
			</div>
		</div>
	);
};

export default MainBlock;

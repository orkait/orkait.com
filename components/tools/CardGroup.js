import { faCut } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "./Card";
import { classAdd } from "../../helper";

const CardGroup = ({ data, className, cardClassName }) => {
	return (
		<div className={classAdd("card-group", className)}>
			{data.map((x, index) => (
				<>
					<Card {...x} className={cardClassName} key={index} />
				</>
			))}
		</div>
	);
};

export default CardGroup;

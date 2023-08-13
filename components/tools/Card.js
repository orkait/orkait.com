import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
	const classAdd = (prev, curr) => {
		if (curr) {
			return prev + " " + curr;
		}
		return prev;
	};

	return (
		<div className={classAdd("card-container", props.className)} key={props.key}>
			<div className="card">
				<div className="card-icon">
					<div className="card-icon-svg-wrapper">
						<div className="card-icon-svg">
							<FontAwesomeIcon
								icon={props.icon}
								size="1x"
								style={
									{
										width: props.width,
									} || ""
								}
							/>
						</div>
					</div>
				</div>

				<div className="card-title">{props.title}</div>
				<div className="card-description">{props.description}</div>
			</div>
		</div>
	);
};

export default Card;

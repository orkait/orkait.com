import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import color from "../../data/color.data";

const config1 = {
	lineColor: "red",
	contentStyle: {
		background: color.blue,
		color: "#fff",
	},
	contentArrowStyle: {
		borderRight: `10px solid  ${color.blue}`,
	},
	date: "2011 - present",
	iconStyle: {
		background: color.blue,
		color: "#fff",
	},
};

const config2 = {
	lineColor: "red",

	contentStyle: {
		background: color.purewhite,
		border: `3px solid #f8f8f8`,
		color: "#fff",
	},
	contentArrowStyle: {
		borderRight: `10px solid  #f8f8f8`,
	},
	date: "2011 - present",
	iconStyle: {
		background: color.purewhite,
		color: "#fff",
	},
};

const TimeLineBlock = () => {
	return (
		<div className="timeline">
			<h1>The Process</h1>
			<h2>
				See our service process in action. Do you think you could
				benefit from our time-tested process?
			</h2>

			<VerticalTimeline>
				<VerticalTimelineElement
					{...config1}
					className="config1"
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Creative Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Miami, FL
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design,
						Project Management, Team Leading
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					{...config2}
					className="config2"
					// icon={<WorkIcon />}
				>
					<h3 className="vertical-timeline-element-title">
						Art Director
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						San Francisco, CA
					</h4>
					<p>
						Creative Direction, User Experience, Visual Design, SEO,
						Online Marketing
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
};

export default TimeLineBlock;

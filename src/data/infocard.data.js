import {
	faClock,
	faPrint,
	faUser,
	faHandshake,
	faUncharted,
	faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { Clock, File, Handshake, User, Zap } from "lucide-react";

export const infoCardData = [
	{
		title: "Active Support Team",
		description:
			"Every member of our team commitment to a group effort--that is what makes teamwork, a company work, a society work, a civilization work.",
		icon: <Clock />,
	},
	{
		title: "Planning First",
		description:
			"Our every project is planned with industry expert Designer and developers because A good plan is a success half-done whereas a bad plan is a possible failure in progress.",
		icon: <File />,
	},
	{
		title: "High Level Softwares",
		description: `
            We are creating the mind to be the new golden standard for Software Development.
            Our vision is to be the new gold standard for software development.     
        `,
		icon: <Zap />,
		width: "15px",
	},
	{
		title: "On Time Ready",
		description: `
            Time is an equal opportunity employer,
            That's why our team always tries to deliver projects on time, for us commitment is the key to success.
        `,
		icon: <Handshake />,
	},
	{
		title: "Experienced Team",
		description:
			"We know how important it is to work in a team. Each of us has unique experience in the industry and worked on vastly different projects.",
		icon: <User />,
	},
];

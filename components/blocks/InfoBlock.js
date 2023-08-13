import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import CardGroup from "../tools/CardGroup";
import { infoCardData } from "../../data/infocard.data";

const InfoBlock = () => {
	return (
		<div className="info-wrapper">
			<div className="info-main">
				<h1>
					<span>A IT Solution That</span>
					<span>Helps Growth Of Your Work</span>
				</h1>
				<p>
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
				<a className="button">
					<label> About Us </label>
					<FontAwesomeIcon icon={faArrowRight} />
				</a>
			</div>
			<div className="divider" />
			<CardGroup data={infoCardData}  />
		</div>
	);
};

export default InfoBlock;

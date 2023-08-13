// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLaptopCode,
	faChartLine,
	faDatabase,
	faMoneyCheck,
	faNetworkWired,
	faShekelSign,
	faMobileAlt,
	faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";

const ServiceBlock = () => {
	return (
		<div class="service-container">
			<h1>Our Services</h1>
			<div class="row">
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faLaptopCode} size="3x" />
					</i>
					<h2>Web Design</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faChartLine} size="3x" />
					</i>
					<h2>Marketing</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faShekelSign} size="3x" />
					</i>
					<h2>Graphics</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faDatabase} size="3x" />
					</i>
					<h2>Data Analysis</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faMobileAlt} size="3x" />
					</i>
					<h2>App Development</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faFileInvoice} />
					</i>
					<h2>Accounting</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faMobileAlt} size="3x" />
					</i>
					<h2>Payroll</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
				<div class="service">
					<i>
						<FontAwesomeIcon icon={faNetworkWired} size="3x" />
					</i>
					<h2>Networking</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Excepturi, quae?
					</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceBlock;

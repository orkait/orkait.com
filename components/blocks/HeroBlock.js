import { faArrowRight, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroBlock = () => {
	return (
		<div className="hero">
			<div className="hero-content">
				<div className="hero-content-inner">
					<h1>
						<span>Website</span>
						<span>Development</span>
						<span>Company In Mumbai</span>
					</h1>

					<p>
						We are a team of experienced developers and designers
						who are passionate about creating websites that are
						functional, beautiful and easy to use.
					</p>

					<a className="button" style={{
                        width: '300px',
                    }}>
						<label> Learn More </label>
						<FontAwesomeIcon icon={faArrowRight} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroBlock;

import Link from "next/link";
import React from "react";
import SocialBlock from "../components/blocks/SocialBlock";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__social">
				<SocialBlock />
			</div>
			<div className="footer__links">
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/">{"Terms & conditions"}</Link>
					</li>
					<li>
						<Link href="/">Privacy Policy</Link>
					</li>
					<li>
						<Link href="/">Contact Us</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;

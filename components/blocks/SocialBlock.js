import Image from "next/image";

const SocialBlock = () => (
	<div className="social">
		<div className="social__item social__item-twitter">
			<a href="https://www.twitter.com/">
				<Image
					src="/social/twitter.svg"
					width={100}
					height={100}
					alt="twitter"
				/>
			</a>
		</div>
		<div className="social__item social__item-facebook">
			<a href="https://www.facebook.com/">
				<Image
					src="/social/facebook.svg"
					width={100}
					height={100}
					alt="facebook"
				/>
			</a>
		</div>
		<div className="social__item social__item-instagram">
			<a href="https://www.instagram.com/">
				<Image
					src="/social/instagram.svg"
					width={100}
					height={100}
					alt="instagram"
				/>
			</a>
		</div>
		{/* whatsapp */}
		<div className="social__item social__item-whatsapp">
			<a href="https://www.whatsapp.com/">
				<Image
					src="/social/whatsapp.svg"
					width={100}
					height={100}
					alt="whatsapp"
				/>
			</a>
		</div>
	</div>
);

export default SocialBlock;

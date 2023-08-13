import React from "react";

const ContactBlock = () => {
	return (
		<div>
			<h1
				style={{
					textAlign: "center",
				}}
			>
				Contact Us
			</h1>
			<div className="contact">
				{/* contact us form */}
				<div className="contact-form-wrapper">
					<form className="contact-form">
						<input type="text" placeholder="Name" />
						<input type="email" placeholder="Email" />
						<textarea placeholder="Message" />
						<a className="button">Send</a>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactBlock;

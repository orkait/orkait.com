import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const NavbarBlock = () => {
	const value = useContext(UserContext);

	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (value.width >= 768) {
			setMenuOpen(false);
		} else {
			setMenuOpen(true);
		}
	}, [value.width]);

	const menuStateHandler = () => {
		setMenuOpen(!menuOpen);
	};

	// const CSS = (style1, style2) => (Media.onMobile() ? style1 : style2);

	return (
		<header className="navbar">
			<div className="navbar__action">
				<div className="navbar__action__logo">
					<Link href="/" passHref>
						<Image
							src="/assets/orka_black.svg"
							width={120}
							height={100}
						/>
					</Link>
				</div>
				<div
					className="navbar__action__hamburger"
					onClick={menuStateHandler}
				>
					<FontAwesomeIcon icon={faBars} color={"#00000"} />
				</div>
			</div>

			<nav className="navbar__items" hidden={menuOpen}>
				<Link href="/" passHref>
					<div className="navbar__item">Home</div>
				</Link>
				<Link href="/about" passHref prefetch>
					<div className="navbar__item">About Us</div>
				</Link>
                <Link href="/services" passHref prefetch>
					<div className="navbar__item">Services</div>
				</Link>    

				<Link href="/contact" passHref>
					<div className="navbar__item">Contact</div>
				</Link>
				<Link href="/about" passHref>
					<div className="navbar__item navbar__item__about">
						About
					</div>
				</Link>
			</nav>
		</header>
	);
};

export default NavbarBlock;

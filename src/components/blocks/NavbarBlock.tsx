import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useContext } from "react";
import UserContext from "@/context/UserContext";
import React from "react";


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

    return (
        <header className="navbar">
            <div >
                <div>
                    <Link href="/" passHref>
                        <Image
                            src="/assets/orka_black.svg"
                            width={120}
                            height={100}
                            alt="Orka Logo"
                        />
                    </Link>
                </div>
                <div
                    onClick={menuStateHandler}
                >
                    <FontAwesomeIcon icon={faBars} color={"#00000"} />
                </div>
            </div>

            <nav >
                <Link href="/" passHref>
                    <div >Home</div>
                </Link>
                <Link href="/about" passHref prefetch>
                    <div >About Us</div>
                </Link>
                <Link href="/services" passHref prefetch>
                    <div >Services</div>
                </Link>

                <Link href="/contact" passHref>
                    <div >Contact</div>
                </Link>
                <Link href="/about" passHref>
                    <div >
                        About
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default NavbarBlock;

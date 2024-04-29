"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSun,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import env from "@/env";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header: NextPage<any> = () => {
    const { setTheme, theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") || "light";
        setTheme(localTheme);
    }, [setTheme]);

    const themeChangeHandler = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };

    return (
        <>
            <header className="mb-2 px-4 shadow ">
                <div className="relative flex flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                    <Link className="flex items-center text-2xl font-black" href="/">
                        <span className="mr-2 text-3xl text-blue-600">
                            <Image
                                src="/assets/orka_black.svg"
                                width={60}
                                height={60}
                                alt="orkait logo"
                            />
                        </span>
                        <span>
                            Orkait<span className="text-blue-600">.com</span>
                        </span>
                    </Link>
                    <input className="peer hidden" type="checkbox" id="navbar-open" />
                    <label
                        className="absolute right-0 mt-3 cursor-pointer text-xl sm:hidden"
                        htmlFor="navbar-open"
                    >
                        <span className="sr-only">Toggle Navigation</span>
                        <span className="sm:hidden">
                            <Menu
                            />
                        </span>
                    </label>
                    <nav
                        aria-label="Header Navigation"
                        className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0"
                    >
                        <ul className="flex flex-col  gap-y-4 sm:flex-row sm:gap-x-8">
                            <li>
                                <Link className="text-gray-600 hover:text-blue-600" href="#">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 hover:text-blue-600" href="#">
                                    Demo
                                </Link>
                            </li>
                            <li>
                                <Link className="text-gray-600 hover:text-blue-600" href="#">
                                    Support
                                </Link>
                            </li>
                            <li className="mt-2 sm:mt-0">
                                <Link
                                    className="rounded-xl border-2 border-blue-600 px-6 py-2 font-medium text-blue-600 hover:bg-blue-600 hover:text-white"
                                    href="#"
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>


            {/* 
            <div className="navbar bg-base-100 shadow-md rounded-md px-5">
                <div className="navbar-start ">
                    <Link href="/">
                        <h1 className="font-bold text-2xl hover:underline">
                            {env.APP_WITH_DOMAIN.slice(0, 1).toUpperCase() +
                                env.APP_WITH_DOMAIN.slice(1)}
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center child:px-3 hover:child:border-b-4 hover:child:border-black ">
                    <Link href="/" className="">
                        About
                    </Link>
                    <Link href="/">
                        Services
                    </Link>
                    <Link href="/">
                        Contact
                    </Link>
                </div>
                <div className="navbar-end child:mx-1" >
                    <label className="swap swap-rotate" >
                        <input type="checkbox" onClick={themeChangeHandler} />

                        <X
                            className="swap-on w-7 h-7"
                            onClick={() => {
                                setMenuOpen(!menuOpen)
                            }}
                        />
                        <Menu
                            className="swap-off w-7 h-7"
                            onClick={() => {
                                setMenuOpen(!menuOpen)
                            }}
                        />
                    </label>
                </div>
            </div> */}
            {/* {
                menuOpen && (
                    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box mb-5 child:m-2">
                        <li>
                            <Link href="/">
                                About
                            </Link>
                        </li>
                        <li><Link href="/">
                            Services
                        </Link></li>
                        <li><Link href="/">
                            Contact
                        </Link></li>
                    </ul>
                )
            } */}

        </>

    );
};

export default Header;
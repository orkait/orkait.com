import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function NavbarLogo(): JSX.Element {
    const {
        navbar: { logo },
    } = useThemeConfig();

    const logoLink = useBaseUrl(logo?.href || '/');

    return (
        <Link
            to={logoLink}
            className="absolute left-0 flex items-end no-underline hover:no-underline text-black"
            {...(logo?.target && { target: logo.target })}
        >
            <img
                className="h-12 inline-block transition-transform duration-300 ease-out mix-blend-multiply"
                style={{
                    maskImage: 'radial-gradient(circle, black 80%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle, black 80%, transparent 100%)'
                }}
                src="/animations/animated_eye.gif"
                alt="Orkait Logo"
            />
            <span className="text-title-large font-bold font-['Poppins'] hidden md:block text-black hover:text-black">
                OrkaIT
            </span>
        </Link>
    );
}


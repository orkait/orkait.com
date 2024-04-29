import Image from "next/image";
import React from "react";

const CONSTANTS = {
    SOCIAL_ICON_WIDTH: 40,
    SOCIAL_ICON_HEIGHT: 40,
}

const socials = [
    {
        name: "twitter",
        url: "https://www.twitter.com/",
        icon: "/social/twitter.svg",
    },
    {
        name: "facebook",
        url: "https://www.facebook.com/",
        icon: "/social/facebook.svg",
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/",
        icon: "/social/instagram.svg",
    },
    {
        name: "whatsapp",
        url: "https://www.whatsapp.com/",
        icon: "/social/whatsapp.svg",
    }
]

const SocialBlock = () => (
    <div className="flex">
        {
            socials.map((social, index) => (
                <div key={index} className={`first:mx-0 mx-2 `}>
                    <a href={social.url}>
                        <Image
                            src={social.icon}
                            width={CONSTANTS.SOCIAL_ICON_WIDTH}
                            height={CONSTANTS.SOCIAL_ICON_HEIGHT}
                            alt={social.name}
                        />
                    </a>
                </div>
            ))
        }
    </div>
);

export default SocialBlock;

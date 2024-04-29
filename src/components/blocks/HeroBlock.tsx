import { faArrowRight, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroBlock = () => {
    return (
        <div className="flex items-center justify-left w-full min-h-[800px] relative md:pl-16 lg:pl-24 text-white prose max-w-full">
            <div className="flex flex-col items-center justify-center px-6">
                <div className="font-bold text-6xl child:m-0">
                    <p>Website</p>
                    <p>Development</p>
                    <p>Company In Mumbai</p>
                </div>
                <div className="max-w-xl">
                    <p className="mt-8 text-white text-center md:text-left text-lg lg:text-xl">
                        We are a team of experienced developers and designers who are passionate about creating websites that are functional, beautiful and easy to use.
                    </p>

                    <div className="btn btn-block btn-primary text-white  mt-5">
                        <span>Learn More</span>
                        <MoveRight
                            className="ml-2"
                        />
                    </div>
                </div>
            </div>
            <Image
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10 backdrop-blur-md rounded-b-xl  "
                src="/backgrounds/man-with-laptop.jpg"
                alt="Hero Background"
                layout="fill"
                objectPosition="center"
            />
        </div>
    );
};


export default HeroBlock;

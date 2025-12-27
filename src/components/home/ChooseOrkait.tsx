import React from "react"
import { chooseorkait, Theme } from "@site/src/constants"
import LinkButton from "../shared/LinkButton"

const ChooseOrkait = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-title-large max-w-lg mx-auto sm:text-display-tiny lg:text-display-medium text-center my-SPACE_14 sm:mb-SPACE_16 sm:my-32 lg:mt-44">
                More reasons to choose Orkait.
            </p>
            <div className="flex flex-col lg:flex-row space-y-SPACE_06 items-center justify-between lg:space-x-SPACE_06 lg:space-y-0">
                {chooseorkait.map((item) => (
                    <div
                        className="border-2 border-solid border-orkait-border-dark-300 w-full lg:min-h-[358px] lg:max-w-md rounded-3xl p-SPACE_04 flex flex-col items-start justify-between"
                        key={item.id}
                    >
                        <div className="h-16 w-16 sm:w-full sm:h-full">
                            <img src={item.image} alt="Image Describing Why Orkait" className="max-w-[72px] sm:max-w-[110px]" />
                        </div>

                        <div>
                            <p className="text-title-small sm:text-title-large mt-SPACE_10 mb-SPACE_03">{item.title}</p>
                            <p className="text-content-tiny sm:text-content-small text-orkait-light-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <LinkButton
                width={"medium"}
                theme={Theme.Gray}
                href={"/contact"}
                title="Get Started"
                className={"mt-SPACE_10"}
            />
        </div>
    )
}

export default ChooseOrkait

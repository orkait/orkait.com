import React, { JSX } from "react"
import Heading from "@theme/Heading"

import BgOrkait from "@site/static/icons/basic/bg-orkait.svg"
import LinkButton from "./LinkButton"
import { analyticsHandler } from "@site/src/utils"
import { Theme } from "@site/src/constants"
import { pageLinks } from "@site/src/constants/routes"

const Discover = () => {
    return (
        <section>
            <div className="bg-orkait-yellow relative flex items-center justify-center h-[208px] sm:h-[452px]">
                <BgOrkait
                />

                <div className="flex flex-col items-center absolute max-w-3xl space-y-SPACE_04 sm:space-y-SPACE_06">
                    <Heading as="h5" className="text-title-semi-large sm:text-display-medium text-center mb-0">
                        Discover the power of enterprise solution.
                    </Heading>

                    <div className="flex space-x-SPACE_03 sm:space-x-SPACE_06">
                        <LinkButton
                            theme={Theme.Dark}
                            title="Connect With Us Now"
                            href={pageLinks.contact}
                            onClick={() => analyticsHandler("Discover", "Click", "Connect With Us Now")}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discover

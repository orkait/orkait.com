import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"
import {Theme} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"

const Hero = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center py-SPACE_10 sm:py-SPACE_14 lg:py-SPACE_20 relative grid-bg-section">
      <Heading
        as="h2"
        className="text-title-large sm:text-display-small lg:text-display-large text-center mb-SPACE_10 max-w-[370px] sm:max-w-7xl"
      >
        <div>Professional services for</div>
        <div>
          <span className="bg-orkait-yellow rounded-md sm:rounded-2xl px-SPACE_02">modern businesses</span>
        </div>
      </Heading>
      <p className="text-content-small sm:text-content-medium text-center max-w-2xl mb-SPACE_06 px-SPACE_04">
        From web applications to custom software solutions, we deliver quality services tailored to your business needs.
      </p>
      <LinkButton
        title="View Our Services"
        theme={Theme.Dark}
        href="#"
        onClick={(e) => {
          e.preventDefault()
          analyticsHandler("Services", "Click", "View Our Services")
          const pricingElement = document.getElementById("pricing")
          if (pricingElement) {
            pricingElement.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }}
      />
    </section>
  )
}

export default Hero

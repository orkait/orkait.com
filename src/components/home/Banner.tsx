import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import HeroImage from "@site/static/images/home/hero.svg"
import {analyticsHandler} from "@site/src/utils"
import {Theme, codeSandboxUrl} from "@site/src/constants"
import {pageLinks} from "@site/src/constants/routes"
import Link from "@docusaurus/Link"
import Section from "../shared/Section"

const Banner = () => {
  return (
    <main className="grid justify-center">
      <Section className="flex flex-col sm:items-center sm:text-center w-full !pb-0">
        <div className="h-full 2xl:min-h-0">
          <Heading
            as="h1"
            className="hero-banner-title text-title-large max-w-xs sm:text-display-small lg:text-display-large sm:max-w-5xl"
          >
            We craft digital <br />
            <span className="bg-orkait-yellow rounded-md sm:rounded-2xl px-SPACE_02">experiences</span> that inspire
          </Heading>
          <p className="hero-banner-sub-title sm:max-w-2xl sm:m-auto text-content-small sm:text-content-medium lg:text-content-large font-normal max-w-md sm:mt-SPACE_04 mb-0">
            Your trusted partner across web app development, software solutions, and enterprise scaling & deployment services.
          </p>
          <div className="hidden sm:flex justify-center mt-SPACE_06 sm:mt-SPACE_10">
            <LinkButton
              title="Connect With Us Now"
              href={pageLinks.contact}
              theme={Theme.Dark}
              width="auto"
              onClick={() => analyticsHandler("Home Page", "Click", "Connect Now")}
            />
          </div>

          <div className="sm:hidden flex justify-center mt-SPACE_06 sm:mt-SPACE_10">
            <LinkButton
              title="Connect With Us Now"
              href={pageLinks.contact}
              theme={Theme.Dark}
              onClick={() => analyticsHandler("Home Page", "Click", "Connect Now")}
              width="full"
            />
          </div>
        </div>
      </Section>
      <HeroImage className="object-contain h-full sm:h-full w-full mt-8 max-w-7xl" />
    </main>
  )
}

export default Banner

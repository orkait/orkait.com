import React from "react"
import Heading from "@theme/Heading"

import SolutionGraphic from "@site/static/animations/solution-graphic.json"
import SectionTitle from "../shared/SectionTitle"
import LottieContainer from "./LottieContainer.tsxsrc/components/home/LottieContainer"

const LegacyGateway = () => {
  return (
    <section className="w-full my-SPACE_12 lg:px-SPACE_16">
      <div className="max-w-7xl mx-SPACE_04 sm:m-SPACE_10 lg:mx-auto lg:my-SPACE_20">
        <SectionTitle title="The Problem" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-SPACE_10 lg:space-x-SPACE_20">
          <Heading
            as="h3"
            className="text-title-large sm:text-display-tiny lg:text-display-small text-orkait-dark-500 min-w-fit"
          >
            REST APIs are <br />
            <span className="bg-orkait-yellow px-SPACE_02 rounded-md sm:rounded-2xl">not composable</span> <br />
          </Heading>

          <p className="text-content-tiny font-normal sm:text-content-small lg:text-content-medium text-orkait-dark-500">
            Building modern digital experiences requires expertise across multiple domains. Orkait provides comprehensive solutions 
            for web app development, software solutions, and enterprise scaling. We craft digital experiences that inspire, 
            helping small enterprises compete and grow in today's digital landscape.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-0 mt-SPACE_07">
        <LottieContainer animationData={SolutionGraphic} loop className="bg-orkait-dark-500 sm:bg-transparent" />
      </div>
    </section>
  )
}

export default LegacyGateway

import React from "react"
import Heading from "@theme/Heading"

import LinkButton from "../shared/LinkButton"
import ChooseOrkait from "./ChooseOrkait"
import GraphContainer from "./GraphContainer"
import RequestVisual from "@site/static/animations/request-visual.json"
import LatencyVisual from "@site/static/animations/latency-visual.json"
import { analyticsHandler } from "@site/src/utils"
import { Theme } from "@site/src/constants"
import Section from "../shared/Section"

const Graph = () => {
    return (
        <Section className="bg-orkait-dark-600 h-full w-full text-orkait-light-100 lg:pt-48 lg:pb-36">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between lg:mb-16 gap-8">
                <div className="max-w-3xl">
                    <Heading
                        as="h2"
                        className="text-title-large sm:text-display-tiny lg:text-display-medium mb-4"
                    >
                        Performance that defines the standard.
                    </Heading>
                    <p className="text-content-small sm:text-content-medium text-orkait-light-400">
                        Our infrastructure is engineered for high-throughput and ultra-low latency, ensuring your digital experiences are always fast, reliable, and capable of scaling to millions of users.
                    </p>
                </div>
                <div className="hidden lg:block shrink-0">
                    <LinkButton
                        title="Get in Touch"
                        href="/contact"
                        theme={Theme.Gray}
                        onClick={() => analyticsHandler("Home Page", "Click", "Get in Touch")}
                    />
                </div>
            </div>

            {/* Graphs */}
            <div className="flex flex-col sm:flex-row gap-10 items-center w-full">
                {/* <GraphContainer
          visual={RequestVisual}
          metricData={7442.01}
          start={5000}
          metricTitle="Requests/sec"
          metricDesc="(Higher is better)"
          duration={1.6}
          delay={0}
        /> */}
                {/* <GraphContainer
          visual={LatencyVisual}
          metricData={13.39}
          start={1000}
          metricTitle="Latency (ms)"
          metricDesc="(Lower is better)"
          duration={1.6}
          delay={0}
        /> */}
                <div className="sm:hidden">
                    <LinkButton
                        title="Get in Touch"
                        href="/contact"
                        theme={Theme.Gray}
                        onClick={() => analyticsHandler("Home Page", "Click", "Get in Touch")}
                    />
                </div>
            </div>

            <ChooseOrkait />
        </Section>
    )
}

export default Graph

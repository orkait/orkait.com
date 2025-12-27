import React from "react"
import Heading from "@theme/Heading"
import Link from "@docusaurus/Link"
import Section from "../shared/Section"

const Configuration = () => {
  return (
    <Section className="flex flex-col lg:flex-row justify-center gap-10" innerClassName="xl:flex md:gap-10">
      <div className="max-w-2xl">
        <Heading as="h2" className="text-title-large sm:text-display-tiny lg:text-display-small mb-SPACE_04">
          Get <span className="rounded-lg px-SPACE_02 bg-orkait-yellow">Started</span>
        </Heading>
        <p className="text-content-small sm:text-content-medium mb-SPACE_11">
          Get started with Orkait's comprehensive digital solutions. We craft experiences that inspire across web apps, software solutions, and enterprise scaling.
        </p>
        <div>
          <h5>More</h5>
          <p className="text-content-small sm:text-content-medium mb-SPACE_11">
            To learn more about our services, <Link href="/contact">get in touch</Link> with our team. We provide tailored solutions for web app development, software solutions, and enterprise scaling & deployment.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-orkait-dark-600 rounded-lg p-6 text-white">
          <h3 className="text-title-medium mb-4">Ready to get started?</h3>
          <p className="text-content-small mb-4">
            Contact us today to discuss how Orkait can help transform your digital presence.
          </p>
          <div className="space-y-2">
            <p className="text-content-small">
              <strong>Phone:</strong> <a href="tel:+919920962195" className="text-orkait-yellow hover:underline">+91 9920962195</a>
            </p>
            <p className="text-content-small">
              <strong>Website:</strong> <a href="/contact" className="text-orkait-yellow hover:underline">orkait.com</a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Configuration

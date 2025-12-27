import React from "react"
import Heading from "@theme/Heading"

const Playground = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center my-SPACE_16">
      <Heading as="h3" className="text-display-medium text-start">
        Playground
      </Heading>
      <div className="flex flex-col items-center justify-center p-8 bg-orkait-dark-600 rounded-lg">
        <p className="text-content-medium text-orkait-light-100 mb-4">
          Explore our services and get in touch to see how we can help transform your digital presence.
        </p>
        <a 
          href="/contact" 
          className="bg-orkait-yellow text-black px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Playground

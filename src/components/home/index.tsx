import React from "react"

import Banner from "./Banner"
import Graph from "./Graph"
import Benefits from "./Benefits"
import Discover from "../shared/Discover"
import Configuration from "./Configuration"
import Testimonials from "./Testimonials"
import Announcement from "../shared/Announcement"
import IntroductionVideo from "./IntroductionVideo"
import Team from "./Team"
const HomePage = () => {
  return (
    <div className="">
      <Banner />
      <Configuration />
      <IntroductionVideo />
      <Testimonials />
      <Benefits />
      <Graph />
      {/* <Playground /> */}
      <Discover />
      <Team />
    </div>
  )
}

export default HomePage

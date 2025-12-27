import React, {useEffect} from "react"
// import ReactGA from "react-ga4"
import Layout from "@theme/Layout"
import {useLocation} from "@docusaurus/router"

import AboutPage from "../components/about"
import {PageDescription, PageTitle} from "../constants/titles"

const About = () => {
  const location = useLocation()

  useEffect(() => {
    // Tracking disabled
    // ReactGA.send({hitType: "pageview", page: location.pathname, title: "About Page"})
  }, [])

  return (
    <Layout title={PageTitle.ABOUT} description={PageDescription.ABOUT}>
      <AboutPage />
    </Layout>
  )
}

export default About

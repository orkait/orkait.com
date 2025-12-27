import React, {useEffect} from "react"
// import ReactGA from "react-ga4"
import Layout from "@theme/Layout"
import {useLocation} from "@docusaurus/router"

import EnterprisePage from "../components/enterprise"
import {PageDescription, PageTitle} from "../constants/titles"

const Services = () => {
  const location = useLocation()

  useEffect(() => {
    // Tracking disabled
    // ReactGA.send({hitType: "pageview", page: location.pathname, title: "Services Page"})
  }, [])

  return (
    <Layout title={PageTitle.SERVICES} description={PageDescription.SERVICES}>
      <EnterprisePage />
    </Layout>
  )
}

export default Services


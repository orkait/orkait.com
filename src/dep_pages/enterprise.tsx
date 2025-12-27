import React, {useEffect} from "react"
// import ReactGA from "react-ga4"
import Layout from "@theme/Layout"
import {useLocation} from "@docusaurus/router"

import EnterprisePage from "../components/enterprise"
import {PageDescription, PageTitle} from "../constants/titles"

const Enterprise = () => {
  const location = useLocation()

  useEffect(() => {
    // Tracking disabled
    // ReactGA.send({hitType: "pageview", page: location.pathname, title: "Enterprise Page"})
  }, [])

  return (
    <Layout title={PageTitle.ENTERPRISE} description={PageDescription.ENTERPRISE}>
      <EnterprisePage />
    </Layout>
  )
}

export default Enterprise

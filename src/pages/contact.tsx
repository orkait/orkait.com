import React, {useEffect} from "react"
// import ReactGA from "react-ga4"
import Layout from "@theme/Layout"
import {useLocation} from "@docusaurus/router"

import ContactPage from "../components/contact"
import {PageDescription, PageTitle} from "../constants/titles"

const Contact = () => {
  const location = useLocation()

  useEffect(() => {
    // Tracking disabled
    // ReactGA.send({hitType: "pageview", page: location.pathname, title: "Contact Page"})
  }, [])

  return (
    <Layout title={PageTitle.CONTACT} description={PageDescription.CONTACT}>
      <ContactPage />
    </Layout>
  )
}

export default Contact

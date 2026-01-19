import React, {useEffect} from "react"
import Layout from "@theme/Layout"
// import ReactGA from "react-ga4"
import {useLocation} from "@docusaurus/router"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import HomePage from "../components/home"
import {PageDescription, PageTitle} from "../constants/titles"
import Announcement from "../components/shared/Announcement"
import MaintenancePage from "../components/shared/MaintenancePage"

const Home = () => {
  const {siteConfig} = useDocusaurusContext()
  const isDevelopment = typeof window !== "undefined" && window.location.hostname === "localhost"
  const location = useLocation()
  const isSiteOffline = siteConfig.customFields?.siteOffline as boolean

  useEffect(() => {
    // Tracking disabled
    // ReactGA.send({hitType: "pageview", page: location.pathname, title: "Home Page"})
  }, [])

  // Show maintenance page if SITE_OFFLINE is set to true
  if (isSiteOffline) {
    return <MaintenancePage />
  }

  return (
    <Layout title={PageTitle.HOME} description={PageDescription.HOME}>
      <HomePage />
      {!isDevelopment && (
        <img
          style={{height: 0, width: 0}}
          referrerPolicy="no-referrer-when-downgrade"
          src="https://static.scarf.sh/a.png?x-pxid=45ec365f-ab8a-4848-a6a9-bd4ffecfe72e"
          alt="pixel"
        />
      )}
    </Layout>
  )
}

export default Home

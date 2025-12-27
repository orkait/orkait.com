import TrustedByMarquee from "@site/src/components/home/TrustedByMarquee"
import {partnerImages} from "@site/src/constants"
import React from "react"

const Partners = () => {
  const handleClick = () => {
    // Partners marquee - can link to contact or services page if needed
    window.open("/contact", "_blank")
  }

  return <TrustedByMarquee logos={partnerImages} onClick={handleClick} />
}

export default Partners

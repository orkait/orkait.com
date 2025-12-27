import React from "react"
import SectionTitle from "../shared/SectionTitle"
import {Youtube, Instagram, Twitter} from "lucide-react"
import {analyticsHandler} from "@site/src/utils"
import {socials} from "@site/src/constants"

const getIcon = (name: string) => {
  const normalizedName = name.toLowerCase()
  if (normalizedName.includes("youtube")) return Youtube
  if (normalizedName.includes("instagram")) return Instagram
  if (normalizedName.includes("twitter") || normalizedName.includes("x")) return Twitter
  return Youtube // default
}

const getSocialConfig = (name: string) => {
  const normalizedName = name.toLowerCase()
  if (normalizedName.includes("youtube")) {
    return {
      color: "text-red-600",
      hoverBg: "hover:bg-red-50",
      borderColor: "border-red-200",
      bottomBarColor: "bg-red-600",
      description: "Watch our latest tutorials and tech insights"
    }
  }
  if (normalizedName.includes("instagram")) {
    return {
      color: "text-pink-600",
      hoverBg: "hover:bg-pink-50",
      borderColor: "border-pink-200",
      bottomBarColor: "bg-pink-600",
      description: "Follow our journey and behind-the-scenes"
    }
  }
  if (normalizedName.includes("twitter") || normalizedName.includes("x")) {
    return {
      color: "text-blue-500",
      hoverBg: "hover:bg-blue-50",
      borderColor: "border-blue-200",
      bottomBarColor: "bg-blue-500",
      description: "Get updates and join the conversation"
    }
  }
  return {
    color: "text-gray-600",
    hoverBg: "hover:bg-gray-50",
    borderColor: "border-gray-200",
    bottomBarColor: "bg-gray-600",
    description: "Connect with us"
  }
}

const SocialBuzz = () => {
  return (
    <section className="py-SPACE_16 sm:py-24 relative flex items-center justify-center mx-SPACE_04 sm:mx-SPACE_10 lg:mx-SPACE_12 lg:space-x-SPACE_10 max-w-8xl">
      <div className="flex flex-col gap-SPACE_06 lg:gap-y-44 w-full">
        <div className="ml-SPACE_04 lg:ml-32">
          <SectionTitle title="About Us" />
          <span className="text-title-semi-large sm:text-display-small">Social & Buzz</span>
        </div>

        <div className="w-full">
          <p className="text-content-medium sm:text-content-large text-orkait-dark-600 text-center mb-SPACE_08 sm:mb-SPACE_10">
            Follow us on social media for updates and insights!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-SPACE_06 max-w-4xl mx-auto">
            {socials.map((social) => {
              const Icon = getIcon(social.name)
              const config = getSocialConfig(social.name)
              const redirectUrl = social.redirection_url || social.href
              const displayName = social.name.charAt(0).toUpperCase() + social.name.slice(1)

              return (
                <a
                  key={social.id}
                  href={redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => analyticsHandler("Social Media", "Click", displayName)}
                  className={`
                    group relative flex flex-col items-center justify-center
                    border-2 border-solid ${config.borderColor}
                    rounded-2xl p-SPACE_08 sm:p-SPACE_10
                    bg-white ${config.hoverBg}
                    transition-all duration-300
                    hover:shadow-lg hover:scale-105
                    cursor-pointer
                  `}
                >
                  <div
                    className={`
                      mb-SPACE_04 p-SPACE_04 rounded-full
                      bg-white group-hover:scale-110
                      transition-transform duration-300
                    `}
                  >
                    <Icon className={`h-8 w-8 sm:h-10 sm:w-10 ${config.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="text-title-small sm:text-title-medium font-bold text-orkait-dark-600 mb-SPACE_02">
                    {displayName}
                  </h3>
                  <p className="text-content-tiny sm:text-content-small text-orkait-dark-200 text-center">
                    {config.description}
                  </p>
                  <div
                    className={`
                      absolute bottom-0 left-0 right-0 h-1
                      ${config.bottomBarColor}
                      rounded-b-2xl
                      transform scale-x-0 group-hover:scale-x-100
                      transition-transform duration-300
                    `}
                  />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialBuzz

import React from "react"
import Heading from "@theme/Heading"
import SectionTitle from "../shared/SectionTitle"
import Section from "../shared/Section"
import {teamMembers} from "@site/src/constants"
import {analyticsHandler} from "@site/src/utils"
import {ArrowUp} from "lucide-react"

type TeamMemberProps = {
  member: TeamMember
}

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    analyticsHandler("Team", "Click", "Scroll to Top")
  }

  return (
    <div className="flex justify-center my-SPACE_10 lg:my-SPACE_16">
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-orkait-dark-600 hover:bg-orkait-dark-500 text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
      </button>
    </div>
  )
}

const TeamMemberCard = ({member}: TeamMemberProps) => {
  const handleClick = () => {
    if (member.redirection_url) {
      analyticsHandler("Team", "Click", `${member.name} - Profile`)
      window.open(member.redirection_url, "_blank", "noopener,noreferrer")
    }
  }

  const cardContent = (
    <>
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-orkait-yellow group-hover:border-orkait-light-100 transition-all"
        />
      ) : (
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orkait-light-300 to-orkait-light-400 flex items-center justify-center mb-4 border-4 border-orkait-yellow shadow-lg group-hover:bg-gradient-to-br group-hover:from-orkait-dark-500 group-hover:to-orkait-dark-600 group-hover:border-orkait-light-100 transition-all">
          <span className="text-display-tiny text-orkait-dark-500 font-bold group-hover:text-white transition-colors">
            {member.name.charAt(0).toUpperCase()}
          </span>
        </div>
      )}
      <div className="w-full text-center">
        <h3 className="text-title-medium font-bold text-orkait-dark-500 mb-2 group-hover:text-white transition-colors">
          {member.name}
        </h3>
        <p className="text-content-small text-orkait-dark-500 font-semibold mb-1 group-hover:text-white transition-colors">
          {member.currentRole}
        </p>
        {member.previousRoles && member.previousRoles.length > 0 && (
          <p className="text-content-tiny text-orkait-light-600 group-hover:text-orkait-light-300 transition-colors">
            Ex-{member.previousRoles.join(" | Ex-")}
          </p>
        )}
        {member.redirection_url && (
          <p className="text-content-tiny text-orkait-yellow mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            View Profile →
          </p>
        )}
      </div>
    </>
  )

  if (member.redirection_url) {
    return (
      <div
        onClick={handleClick}
        className="flex flex-col items-center p-6 border-2 border-solid border-orkait-border-dark-300 rounded-2xl hover:bg-orkait-dark-600 transition-all duration-300 bg-white cursor-pointer group hover:shadow-lg"
      >
        {cardContent}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center p-6 border-2 border-solid border-orkait-border-dark-300 rounded-2xl hover:bg-orkait-dark-600 transition-all duration-300 bg-white group">
      {cardContent}
    </div>
  )
}

const Team = () => {
  return (
    <Section className="bg-white">
      <div className="mb-SPACE_10 lg:mb-SPACE_16">
        <SectionTitle title="Team" />
        <Heading
          as="h2"
          className="text-title-large sm:text-display-tiny lg:text-display-small text-orkait-dark-500 mt-SPACE_04"
        >
          Meet the <span className="bg-orkait-yellow rounded-lg px-SPACE_02">Team</span>
        </Heading>
        <p className="text-content-small sm:text-content-medium text-orkait-dark-500 mt-SPACE_04 max-w-2xl">
          Our talented team brings together expertise from top companies to deliver exceptional digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      <ScrollToTopButton />
    </Section>
  )
}

export default Team


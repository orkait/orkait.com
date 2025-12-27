import React, {useRef} from "react"
import "./style.css"

const IntroductionVideo: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null)

  return (
    <div className="video-wrapper" ref={videoRef}>
      <div className="video-container">
        <img
          src="/web.jpg"
          alt="Orkait High Performance Scalable Solutions"
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default IntroductionVideo

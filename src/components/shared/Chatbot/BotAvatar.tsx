import React from "react"

const BotAvatar = () => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full shadow-md">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  )
}

export default BotAvatar


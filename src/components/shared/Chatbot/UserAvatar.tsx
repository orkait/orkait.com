import React from "react"

const UserAvatar = () => {
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
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  )
}

export default UserAvatar


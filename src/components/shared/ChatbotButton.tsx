import React, { useState } from "react"
import AskModal from "./AskModal"
import styles from "./ChatbotButton.module.css"

interface ChatbotButtonProps {
  className?: string
}

const ChatbotButton: React.FC<ChatbotButtonProps> = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleOpenModal}
        className={`${styles.chatbotButton} ${className}`}
        aria-label="Ask a question"
        title="Ask a question"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className={styles.chatbotText}>Ask</span>
      </button>

      <AskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

export default ChatbotButton


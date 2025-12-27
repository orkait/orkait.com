import React, { useState, useEffect } from "react"
import styles from "./AskModal.module.css"

interface AskModalProps {
  isOpen: boolean
  onClose: () => void
}

const AskModal: React.FC<AskModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Here you can integrate with your backend API or email service
      // For now, we'll simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log("Question submitted:", formData)
      
      setSubmitStatus("success")
      setFormData({ name: "", email: "", question: "" })
      
      // Close modal after 2 seconds on success
      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      console.error("Error submitting question:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.modalHeader}>
          <h2>Ask Us Anything</h2>
          <p>Have a question? We're here to help!</p>
        </div>

        {submitStatus === "success" ? (
          <div className={styles.successMessage}>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <h3>Thank you!</h3>
            <p>We've received your question and will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="question">Your Question *</label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                required
                placeholder="What would you like to know?"
                rows={5}
                disabled={isSubmitting}
              />
            </div>

            {submitStatus === "error" && (
              <div className={styles.errorMessage}>
                Something went wrong. Please try again or contact us directly.
              </div>
            )}

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className={styles.spinner} />
                  Sending...
                </>
              ) : (
                "Send Question"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default AskModal


import React, { useState } from "react"
import Sidebar from "@theme-original/DocRoot/Layout/Sidebar"
import AskModal from "@site/src/components/shared/AskModal"
import styles from "./styles.module.css"

const CustomSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className={styles.inputContainer} onClick={handleOpenModal}>
        <span aria-label="open chatbot" role="button" className="search-icon" tabIndex={0}></span>
        <input readOnly placeholder="Ask a question..." className={styles.input} />
      </div>
      <AskModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  )
}

// Wrapper component combining Sidebar with CustomSearch
const SidebarWrapper = (props: any) => {
  return (
    <div className="sidebar-search-container place-items-center flex flex-col lg:mb-[100px]">
      <CustomSearch />
      <Sidebar {...props} />
    </div>
  )
}

export default SidebarWrapper

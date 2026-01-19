import React from "react"

const MaintenancePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "500",
            color: "#333",
            lineHeight: "1.6",
            margin: 0,
          }}
        >
          Currently we are working to re-build site, to connect reach to{" "}
          <a
            href="mailto:connect@orkait.com"
            style={{
              color: "#0066cc",
              textDecoration: "none",
            }}
          >
            connect@orkait.com
          </a>
        </h1>
      </div>
    </div>
  )
}

export default MaintenancePage

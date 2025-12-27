import React, {useEffect, useState} from "react"

const Version = () => {
  const [version, setVersion] = useState<string>()

  const fetchVersion = async () => {
    // Version fetching disabled - Orkait doesn't use version-based releases
    // If needed in future, update with Orkait's release system
    setVersion("Latest")
  }

  useEffect(() => {
    fetchVersion().catch(console.error)
  }, [])
  return (
    <>
      <span>
        <b>{version}</b>
      </span>
    </>
  )
}

export default Version

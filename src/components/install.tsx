import React from "react"
import CodeBlock from "@theme/CodeBlock"

const InstallCommand = () => {
  // Install command disabled - Orkait doesn't have a CLI tool
  // If Orkait creates an install script in the future, update this component
  const command = `# Contact us at +91 9920962195 or visit orkait.com`

  return (
    <div>
      <CodeBlock>
        {command}
      </CodeBlock>
    </div>
  )
}

export default InstallCommand

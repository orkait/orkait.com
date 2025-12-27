/**
 * Utility functions to interact with the robofy.ai chatbot widget
 */

export const openChatbot = () => {
  if (typeof window === "undefined") return

  console.log("Attempting to open chatbot...")

  // Method 1: Try to find and click the actual chatbot widget button
  // Most chatbot widgets create a floating button - try common selectors
  const selectors = [
    '[id*="robofy"]',
    '[class*="robofy"]',
    '[id*="chatbot"]',
    '[class*="chatbot"]',
    '[data-robofy]',
    '[data-chatbot]',
    'button[aria-label*="chat"]',
    'button[aria-label*="Chat"]',
    '.chat-widget-button',
    '#chat-widget-button',
    '[role="button"][aria-label*="chat" i]',
    'div[class*="widget"] button',
    'div[id*="widget"] button'
  ]

  for (const selector of selectors) {
    try {
      const elements = document.querySelectorAll(selector)
      elements.forEach((element) => {
        const el = element as HTMLElement
        // Skip our own chatbot button to avoid infinite loops
        if (el.closest('.chatbotButton') || el.closest('[class*="ChatbotButton"]')) {
          return
        }
        // Check if it looks like a chatbot widget button
        const text = el.textContent?.toLowerCase() || ''
        const ariaLabel = el.getAttribute('aria-label')?.toLowerCase() || ''
        if (
          text.includes('chat') ||
          ariaLabel.includes('chat') ||
          el.tagName === 'BUTTON' ||
          el.getAttribute('role') === 'button'
        ) {
          console.log(`Found chatbot element with selector: ${selector}`)
          el.click()
          return
        }
      })
    } catch (e) {
      // Continue to next selector
    }
  }

  // Method 2: Try global window methods
  const windowAny = window as any
  const methods = ['robofy', 'robofyChatbot', 'openChatbot', 'openRobofy', 'chatbot', 'Robofy']
  
  for (const methodName of methods) {
    if (windowAny[methodName]) {
      const widget = windowAny[methodName]
      if (typeof widget === 'function') {
        console.log(`Trying global method: ${methodName}`)
        try {
          widget()
          return
        } catch (e) {
          console.log(`Method ${methodName} failed:`, e)
        }
      } else if (widget && typeof widget.open === 'function') {
        console.log(`Trying widget.open() for: ${methodName}`)
        try {
          widget.open()
          return
        } catch (e) {
          console.log(`widget.open() failed:`, e)
        }
      } else if (widget && typeof widget.show === 'function') {
        console.log(`Trying widget.show() for: ${methodName}`)
        try {
          widget.show()
          return
        } catch (e) {
          console.log(`widget.show() failed:`, e)
        }
      } else if (widget && typeof widget.toggle === 'function') {
        console.log(`Trying widget.toggle() for: ${methodName}`)
        try {
          widget.toggle()
          return
        } catch (e) {
          console.log(`widget.toggle() failed:`, e)
        }
      }
    }
  }

  // Method 3: Try to find iframe and interact with it
  const iframes = document.querySelectorAll('iframe[src*="robofy"], iframe[src*="chatbot"]')
  iframes.forEach((iframe) => {
    const iframeElement = iframe as HTMLIFrameElement
    console.log("Found chatbot iframe, trying to show it")
    iframeElement.style.display = 'block'
    iframeElement.style.visibility = 'visible'
    iframeElement.style.zIndex = '99999'
    iframeElement.style.position = 'fixed'
    iframeElement.style.bottom = '20px'
    iframeElement.style.right = '20px'
  })

  // Method 4: Dispatch custom events
  const events = ['openChatbot', 'openRobofy', 'chatbot:open', 'robofy:open', 'chatbot-open']
  events.forEach(eventName => {
    console.log(`Dispatching event: ${eventName}`)
    window.dispatchEvent(new CustomEvent(eventName, { bubbles: true }))
  })

  // Method 5: Try to trigger via postMessage to iframe
  const iframe = document.querySelector('iframe[src*="robofy"]') as HTMLIFrameElement
  if (iframe && iframe.contentWindow) {
    console.log("Sending postMessage to iframe")
    try {
      iframe.contentWindow.postMessage({ type: 'open', action: 'open', command: 'open' }, '*')
    } catch (e) {
      console.log("postMessage failed:", e)
    }
  }

  // Method 6: Look for any div/button that might be the chatbot launcher
  const allButtons = document.querySelectorAll('button, div[role="button"], a[role="button"]')
  allButtons.forEach((btn) => {
    const el = btn as HTMLElement
    const text = (el.textContent || '').toLowerCase()
    const className = el.className.toLowerCase()
    const id = el.id.toLowerCase()
    
    // Skip our own button
    if (el.closest('.chatbotButton') || el.closest('[class*="ChatbotButton"]')) {
      return
    }
    
    if (
      (text.includes('chat') || className.includes('chat') || id.includes('chat')) &&
      (className.includes('widget') || className.includes('launcher') || className.includes('bubble') || id.includes('widget'))
    ) {
      console.log("Found potential chatbot launcher button")
      el.click()
      return
    }
  })

  console.warn("Could not find a way to open the chatbot. Please check browser console and DOM for chatbot widget elements.")
}


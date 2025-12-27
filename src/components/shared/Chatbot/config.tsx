import React from "react"
import { createChatBotMessage } from "react-chatbot-kit"
import BotAvatar from "./BotAvatar"
import UserAvatar from "./UserAvatar"

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi there 👋\n\nWelcome to Orkait!\n\nHow can I help you today?`,
      {}
    ),
  ],
  botName: "Orkait Chatbot",
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#ffffff",
    },
    chatButton: {
      backgroundColor: "#ec4899",
    },
  },
  state: {},
  widgets: [],
}

export default config


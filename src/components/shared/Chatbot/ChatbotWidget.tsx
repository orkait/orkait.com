import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./ChatbotWidget.module.css";
import { MessageParser } from "./MessageParser";
import { ActionProvider } from "./ActionProvider";

interface Message {
    id: number
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hi there 👋\n\nWelcome to Orkait!\n\nHow can I help you today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const messageParser = new MessageParser()
    const actionProvider = new ActionProvider(setMessages)

    const toggleChatbot = () => {
        setIsOpen(!isOpen)
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault()
        const trimmedValue = inputValue.trim()

        if (!trimmedValue) return

        // Add user message
        const userMessage: Message = {
            id: Date.now(),
            text: trimmedValue,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMessage])
        setInputValue("")

        // Process message and get bot response
        setTimeout(() => {
            messageParser.parse(trimmedValue, actionProvider)
        }, 500)
    }

    return (
        <div className={styles.chatbotContainer}>
            {/* Chatbot Window */}
            {isOpen && (
                <div className={styles.chatbotWindow}>
                    {/* Header */}
                    <div className={styles.chatbotHeader}>
                        <h3 className="text-gray-800 m-0 p-0 font-extrabold text-base">Orkait Chatbot</h3>
                        <button onClick={toggleChatbot} className={styles.closeButton} aria-label="Close chatbot">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className={styles.chatbotContent}>
                        {messages.map((message) => (
                            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}>
                                {/* Bot avatar on left */}
                                {message.sender === "bot" && (
                                    <div className="flex-shrink-0 mr-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                )}

                                {/* Message bubble */}
                                <div
                                    className={`max-w-[75%] px-4 py-3 rounded-2xl ${message.sender === "user"
                                        ? "bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-br-sm"
                                        : "bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-sm"
                                        }`}
                                >
                                    {message.sender === "bot" ? (
                                        <div className="prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-li:my-1 prose-headings:mt-3 prose-headings:mb-2">
                                            {/* @ts-ignore - Type incompatibility between React 19 and react-markdown v9 */}
                                            <ReactMarkdown
                                                components={{
                                                    p: ({ children }: any) => <p className="text-gray-800 leading-relaxed text-[0.9375rem]">{children}</p>,
                                                    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
                                                    ul: ({ children }: any) => <ul className="list-none space-y-1.5 my-2">{children}</ul>,
                                                    ol: ({ children }: any) => <ol className="list-decimal list-inside space-y-1.5 my-2">{children}</ol>,
                                                    li: ({ children }: any) => <li className="text-gray-800 text-[0.9375rem] leading-relaxed">{children}</li>,
                                                    h1: ({ children }: any) => <h1 className="text-lg font-bold text-gray-900 mt-3 mb-2">{children}</h1>,
                                                    h2: ({ children }: any) => <h2 className="text-base font-bold text-gray-900 mt-3 mb-2">{children}</h2>,
                                                    h3: ({ children }: any) => <h3 className="text-sm font-bold text-gray-900 mt-2 mb-1">{children}</h3>,
                                                    code: ({ children }: any) => <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded text-sm">{children}</code>,
                                                }}
                                            >
                                                {message.text}
                                            </ReactMarkdown>
                                        </div>
                                    ) : (
                                        <div
                                            style={{
                                                whiteSpace: "pre-wrap",
                                                lineHeight: "1.6",
                                                fontSize: "0.9375rem",
                                            }}
                                        >
                                            {message.text}
                                        </div>
                                    )}
                                </div>

                                {/* User avatar on right */}
                                {message.sender === "user" && (
                                    <div className="flex-shrink-0 ml-3">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} className={styles.inputContainer}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Write your message here"
                            className={styles.input}
                        />
                        <button type="submit" className={styles.sendButton} disabled={!inputValue.trim()}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button onClick={toggleChatbot} className={styles.chatbotButton} aria-label={isOpen ? "Close chat" : "Open chat"}>
                {isOpen ? (
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                ) : (
                    <>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span className={styles.badge}>1</span>
                    </>
                )}
            </button>
        </div>
    )
}

export default ChatbotWidget


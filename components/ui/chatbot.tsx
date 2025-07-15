"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Bot, X, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useChat } from "ai/react"

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content:
          "Hi! I'm TapNex AI, your virtual assistant. How can I help you learn about our NFC payment solutions for events?",
      },
    ],
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSubmit(e)
  }

  return (
    <>
      {/* Help Message and Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Help Message */}
        <div className="mb-3 bg-white border-2 border-black rounded-lg px-4 py-2 shadow-lg max-w-[200px] text-center">
          <p className="text-sm font-medium text-gray-800">Need help? Talk to our AI assistant</p>
        </div>

        {/* Chat Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-2 border-black"
          aria-label={isOpen ? "Close TapNex AI chat" : "Open TapNex AI chat"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-6 w-96 h-[500px] z-50" role="dialog" aria-labelledby="chatbot-title">
          <Card className="h-full shadow-2xl border-4 border-black bg-white">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg border-b-2 border-black p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/tapnex-logo.png"
                    alt="TapNex Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                    loading="lazy"
                  />
                  <div>
                    <div id="chatbot-title" className="font-bold">
                      TapNex AI
                    </div>
                    <div className="text-sm opacity-90">Your Event Tech Assistant</div>
                  </div>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col p-0 h-[calc(100%-80px)]">
              {/* Messages */}
              <div
                className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0"
                role="log"
                aria-live="polite"
                aria-label="Chat messages"
              >
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl border-2 border-black ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                      role={message.role === "assistant" ? "status" : undefined}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div
                      className="bg-slate-100 p-3 rounded-2xl border-2 border-black"
                      role="status"
                      aria-label="AI is typing"
                    >
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t-2 border-black bg-white">
                <form onSubmit={handleFormSubmit} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me about TapNex..."
                    className="flex-1 border-2 border-black"
                    disabled={isLoading}
                    aria-label="Type your message to TapNex AI"
                  />
                  <Button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-2 border-black"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useKanyeQuotes from '../hooks/useKanyeQuotes'

function ChatInterface({ onKanyeResponse }) {
  const [messages, setMessages] = useState([
    { type: 'kanye', text: "Yo! I'm here to drop some wisdom on you. What's on your mind?" }
  ])
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { fetchKanyeQuote } = useKanyeQuotes()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!userInput.trim()) return

    // Add user message
    const newUserMessage = { type: 'user', text: userInput }
    setMessages(prev => [...prev, newUserMessage])
    
    // Clear input
    setUserInput('')
    setIsLoading(true)
    onKanyeResponse(true)

    try {
      // Fetch Kanye quote
      const quote = await fetchKanyeQuote()
      
      // Add Kanye response after a delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          type: 'kanye', 
          text: `${quote}` 
        }])
        setIsLoading(false)
        onKanyeResponse(false)
      }, 1500)
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'kanye', 
        text: "I'm dealing with some technical difficulties right now. Hit me up again!" 
      }])
      setIsLoading(false)
      onKanyeResponse(false)
    }
  }

  return (
    <div className="chat-interface">
      <div className="messages-container">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`message ${message.type}`}
            >
              <div className="message-bubble">
                {message.type === 'kanye' && <span className="kanye-prefix">🎤 Ye:</span>}
                {message.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="message kanye loading"
          >
            <div className="message-bubble">
              <span className="kanye-prefix">🎤 Ye:</span>
              <span className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask Kanye for advice..."
          className="message-input"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          disabled={isLoading || !userInput.trim()}
          className="send-button"
        >
          Ask Ye
        </button>
      </form>
    </div>
  )
}

export default ChatInterface

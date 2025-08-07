import { useState } from 'react'
import ChatInterface from './components/ChatInterface'
import KanyeAvatar from './components/KanyeAvatar'
import './App.css'

function App() {
  const [isKanyeSpeaking, setIsKanyeSpeaking] = useState(false)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Ask Ye Anything</h1>
        <p>Get life advice from Kanye West himself</p>
      </header>
      
      <main className="app-main">
        <div className="kanye-section">
          <KanyeAvatar isActive={isKanyeSpeaking} />
        </div>
        
        <div className="chat-section">
          <ChatInterface 
            onKanyeResponse={setIsKanyeSpeaking} 
          />
        </div>
      </main>
    </div>
  )
}

export default App
